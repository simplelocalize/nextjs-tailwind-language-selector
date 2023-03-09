import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import React from "react";
import {LanguageSelector} from "@/components/LanguageSelector";
import {Inter} from "next/font/google";
import {useTranslation} from "react-i18next";

const inter = Inter({subsets: ['latin']})


export default function Home() {

    const {t} = useTranslation();

    return (
        <>
            <Head>
                <title>NextJS + Tailwind - Language Selector Demo</title>
                <meta name="description" content=""/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <main className={styles.main}>
                <div className={styles.description}>
                    <div>
                        <a
                            href="https://simplelocalize.io/?utm_source=language-selector&utm_medium=default-template&utm_campaign=language-selector"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            By{' '}
                            <img
                                src="/simplelocalize-logo-dark.svg"
                                alt="SimpleLocalize Logo"
                                className={styles.simpleLocalizeLogo}
                                width={190}
                                height={30}
                            />
                        </a>
                    </div>
                </div>

                <div className={styles.center}>

                        <h1 className={styles.title}>
                            {t('TITLE', {
                                defaultValue: "Language selector demo"
                            })}
                        </h1>

                        <p className={styles.mainDescription}>
                            {t('DESCRIPTION', {
                                defaultValue: "This is a demo of a language selector component for Next.js and Tailwind"
                            })}
                        </p>

                        <LanguageSelector/>
                </div>

                <div className={styles.grid}>
                    <a
                        href="https://simplelocalize.io/blog/posts/create-language-selector-with-nextjs-and-tailwind/?utm_source=language-selector&utm_medium=default-template&utm_campaign=language-selector"
                        className={styles.card}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <h2 className={inter.className}>
                            {t('READ_BLOG_POST_TITLE', {
                                defaultValue: "Read the blog post"
                            })}
                            &nbsp;<span>-&gt;</span>
                        </h2>
                        <p className={inter.className}>
                            {t('READ_BLOG_POST', {
                                defaultValue: "Learn how to create a language selector component for Next.js and Tailwind CSS"
                            })}
                        </p>
                    </a>

                    <a
                        href="https://simplelocalize.io/?utm_source=language-selector&utm_medium=default-template&utm_campaign=language-selector"
                        className={styles.card}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <h2 className={inter.className}>

                            {t('MANAGE_TRANSLATIONS_TITLE', {defaultValue: "Manage your translations"})}
                            &nbsp;<span>-&gt;</span>
                        </h2>
                        <p className={inter.className}>
                            {t('MANAGE_TRANSLATIONS', {
                                defaultValue: "Manage your translations in one place with SimpleLocalize"
                            })}
                        </p>
                    </a>

                    <a
                        href="https://simplelocalize.io/translation-hosting/?utm_source=language-selector&utm_medium=default-template&utm_campaign=language-selector"
                        className={styles.card}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <h2 className={inter.className}>
                            {t('TRANSLATION_HOSTING_TITLE', {defaultValue: "Translation Hosting"})}
                            &nbsp;<span>-&gt;</span>
                        </h2>
                        <p className={inter.className}>
                            {t('TRANSLATION_HOSTING', {defaultValue: "Host your translations in one place with SimpleLocalize"})}
                        </p>
                    </a>

                    <a
                        href="https://simplelocalize.io/auto-translation/?utm_source=language-selector&utm_medium=default-template&utm_campaign=language-selector"
                        className={styles.card}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <h2 className={inter.className}>
                            {t('AUTO_TRANSLATION_TITLE', {defaultValue: "Auto-translation"})}
                            &nbsp;<span>-&gt;</span>
                        </h2>
                        <p className={inter.className}>
                            {t('AUTO_TRANSLATION', {
                                defaultValue: "Auto-translate your texts with Google Translate or DeepL"
                            })
                            }
                        </p>
                    </a>
                </div>
            </main>
        </>
    )
}
