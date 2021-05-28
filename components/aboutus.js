import css from '../styles/common.module.scss';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import BuildIcon from '@material-ui/icons/Build';

export default function About() {
    return (
        <div id="aboutus" className={css.aboutSection}>
            <div className={css.aboutSectionTitle}>
                <h1 className={css.aboutSectionTitleH1}>Who we are?</h1>
                <div className={css.aboutSectionWho}>
                    <div className={css.aboutSectionWho1}>
                        <p>
                            Decentralized Finance (DeFi) has brought with it
                            many benefits to the holistic cryptocurrency
                            ecosystem, as well as a lot of demands. The DeFi
                            ecosystem needs platforms that will capture exchange
                            and liquidity demands, yield farming and staking, as
                            well as portfolio management.
                        </p>
                        <p>
                            While there are several platforms filling these
                            individual needs, it is cumbersome and sometimes
                            impossible to use them efficiently since each is
                            specific and narrow in what it offers. The
                            fragmented nature of these services continues to be
                            a major obstacle to the adoption of DeFi.
                        </p>
                        <p>
                            ConnectDeFi aims to bridge these gaps by providing a
                            single gateway, combining all these services into
                            one easy-to-use platform. ConnectDeFi will function
                            as an aggregator for decentralized exchanges
                            (DEX),covering liquidity, yield farming and staking,
                            while implementing a dedicated portfolio manager,
                            and multichain decentralized wallet.
                        </p>
                    </div>
                    <div className={css.aboutSectionWho2}>
                        <img
                            className={css.aboutSectionWho2Img}
                            src="/abstract.png"
                        />
                    </div>
                </div>
                <div className={css.aboutSectionFooter}>
                    <div className={css.aboutSectionFooterContent}>
                        <div className={css.aboutSectionFooterTitle}>
                            <TrendingUpIcon className={css.aboutSectionIcons} />
                            <h2>Market </h2>
                        </div>
                        <p className={css.aboutSectionFooterContentP}>
                            According to Facts and Factors, the crypto market
                            capitalization is expected to triple in the next
                            five years, driven by the continued push of
                            institutional and retail adoption.
                        </p>
                    </div>
                    <div className={css.aboutSectionFooterContent}>
                        <div className={css.aboutSectionFooterTitle}>
                            <ErrorOutlineIcon
                                className={css.aboutSectionIcons}
                            />
                            <h2>Problems </h2>
                        </div>
                        <p className={css.aboutSectionFooterContentP}>
                            There are multiple variables a trader needs to
                            consider for any individual trade, such as safety,
                            price, liquidity, slippage. It is virtually
                            impossible to identify the best combination of these
                            factors without the assistance of a reliable
                            aggregator.
                        </p>
                    </div>
                    <div className={css.aboutSectionFooterContent}>
                        <div className={css.aboutSectionFooterTitle}>
                            <BuildIcon className={css.aboutSectionIcons} />
                            <h2>Solution </h2>
                        </div>
                        <p className={css.aboutSectionFooterContentP}>
                            ConnectDeFi aims to become the go-to decentralized
                            exchange, liquidity aggregator, and more.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
