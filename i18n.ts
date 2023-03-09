import i18n from 'i18next'
import Backend from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'
import {initReactI18next} from 'react-i18next'

const fallbackLanguage = 'en'

export const projectToken = ""; // YOUR PROJECT TOKEN
export const apiKey = ""; // YOUR API KEY
export const cdnBaseUrl = "https://cdn.simplelocalize.io";
export const environment = "_latest"; // or "_production"

const loadPath = `${cdnBaseUrl}/${projectToken}/${environment}/{{lng}}`;
const endpoint = `https://api.simplelocalize.io/api/v1/translations`;
const missingKeysPushInterval = 10_000; // 10 seconds

let missingKeysRequests: any[] = [];

const missingKeyHandler = (
    languages: readonly string[],
    namespace: string,
    key: string,
    fallbackValue: string) => {
    missingKeysRequests.push({
        key,
        //namespace: namespace, // uncomment if you use namespaces
        language: fallbackLanguage,
        text: fallbackValue
    });
};


const pushMissingKeys = () => {
    if (missingKeysRequests.length > 0) {
        console.log(`[SimpleLocalize] Pushing missing keys: ${missingKeysRequests.length}`);
        const requestBody = {
            content: missingKeysRequests
        }
        fetch(endpoint, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'X-SimpleLocalize-Token': apiKey
            },
            body: JSON.stringify(requestBody),
        })
        missingKeysRequests = [];
    }
}

// @refresh reset
setInterval(() => pushMissingKeys(), missingKeysPushInterval)

i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: fallbackLanguage,
        backend: {
            loadPath: loadPath,
        },
        detection: {
            order: ['querystring', 'cookie'],
            lookupQuerystring: 'hl',
            lookupCookie: 'language',
            caches: ['cookie']
        },
        saveMissing: true,
        missingKeyHandler
    })

export default i18n;
