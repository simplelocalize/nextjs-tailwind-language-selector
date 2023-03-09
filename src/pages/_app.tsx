import "node_modules/flag-icons/css/flag-icons.min.css";
import '@/styles/globals.scss'
import type {AppProps} from 'next/app'
import '../../i18n';
import {Suspense} from "react";
import {useTranslation} from "react-i18next";


export default function App({Component, pageProps}: AppProps) {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Component {...pageProps} />
        </Suspense>
    );
}
