import Head from 'next/head';
import { Header } from '../components/header';
import { Footer } from '../components/footer';
import { CommonCSS } from '../components/css/common';
import { CommonJS } from '../components/js/common';
import { NonBlockingJS } from '../components/js/nonblocking';
import css from '../styles/common.module.scss';
import utilsCss from '../styles/utils.module.scss';

export default function Page({ children }) {
    return (
        <div className={css.container}>
            <Head>
                <title>ConnectDeFi</title>

                <meta charSet="utf-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, shrink-to-fit=Yes"
                />

                <link rel="icon" href="/favicon.ico" />
            </Head>
            <CommonCSS />
            <CommonJS />
            <Header />
            <main className={css.main}>{children}</main>
            <Footer />
            <NonBlockingJS />
        </div>
    );
}
