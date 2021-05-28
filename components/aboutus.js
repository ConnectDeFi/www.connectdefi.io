import css from '../styles/common.module.scss';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import BuildIcon from '@material-ui/icons/Build';

export default function About() {
    return (
        <div id="aboutus" className={css.secondSection}>
            <div className={css.secondSectionTitle}>
                <h1 className={css.secondSectionTitleH1}>Who we are?</h1>
                <div className={css.secondSectionWho}>
                    <div className={css.secondSectionWho1}>
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
                    <div className={css.secondSectionWho2}>
                        <img
                            className={css.secondSectionWho2Img}
                            src="/abstract.png"
                        />
                    </div>
                </div>
                <div className={css.secondSectionFooter}>
                    <div className={css.secondSectionFooterContent}>
                        <div className={css.secondSectionFooterTitle}>
                            <TrendingUpIcon
                                className={css.secondSectionIcons}
                            />
                            <h2>Market </h2>
                        </div>
                        <p className={css.secondSectionFooterContentP}>
                            According to Facts and Factors, the crypto market
                            capitalization is expected to triple in the next
                            five years, driven by the continued push of
                            institutional and retail adoption.
                        </p>
                    </div>
                    <div className={css.secondSectionFooterContent}>
                        <div className={css.secondSectionFooterTitle}>
                            <ErrorOutlineIcon
                                className={css.secondSectionIcons}
                            />
                            <h2>Problems </h2>
                        </div>
                        <p className={css.secondSectionFooterContentP}>
                            There are multiple variables a trader needs to
                            consider for any individual trade, such as safety,
                            price, liquidity, slippage. It is virtually
                            impossible to identify the best combination of these
                            factors without the assistance of a reliable
                            aggregator.
                        </p>
                    </div>
                    <div className={css.secondSectionFooterContent}>
                        <div className={css.secondSectionFooterTitle}>
                            <BuildIcon className={css.secondSectionIcons} />
                            <h2>Solution </h2>
                        </div>
                        <p className={css.secondSectionFooterContentP}>
                            ConnectDeFi aims to become the go-to decentralized
                            exchange, liquidity aggregator, and more.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
