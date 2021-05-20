import Page from '../components/base_page';

import css from '../styles/common.module.scss';

import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import BuildIcon from '@material-ui/icons/Build';
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import CenterFocusWeakIcon from '@material-ui/icons/CenterFocusWeak';
import LayersIcon from '@material-ui/icons/Layers';
import BubbleChartIcon from '@material-ui/icons/BubbleChart';

export default function Home() {
    return (
        <Page>
            <div className={css.firstSection}>
                <div className={css.firstSectionTitle}>
                    <h1 className={css.title}>ConnectDeFi</h1>
                    <h2 className={css.firstSectionSubTitle}>
                        Fully decentralized and community-led platform.
                    </h2>
                    <button className={css.startButton}>Get Started > </button>
                </div>
            </div>
            <div className={css.secondSection}>
                <div className={css.secondSectionTitle}>
                    <h1 className={css.secondSectionTitleH1}>Who we are?</h1>
                    <div className={css.secondSectionWho}>
                        <div className={css.secondSectionWho1}>
                            <p>
                                Decentralized Finance (DeFi) has brought with it
                                many benefits to the holistic cryptocurrency
                                ecosystem, as well as a lot of demands. The DeFi
                                ecosystem needs platforms that will capture
                                exchange and liquidity demands, yield farming
                                and staking, as well as portfolio management.
                            </p>
                            <p>
                                While there are several platforms filling these
                                individual needs, it is cumbersome and sometimes
                                impossible to use them efficiently since each is
                                specific and narrow in what it offers. The
                                fragmented nature of these services continues to
                                be a major obstacle to the adoption of DeFi.
                            </p>
                            <p>
                                ConnectDeFi aims to bridge these gaps by
                                providing a single gateway, combining all these
                                services into one easy-to-use platform.
                                ConnectDeFi will function as an aggregator for
                                decentralized exchanges (DEX),covering
                                liquidity, yield farming and staking, while
                                implementing a dedicated portfolio manager, and
                                multichain decentralized wallet.
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
                                According to Facts and Factors, the crypto
                                market capitalization is expected to triple in
                                the next five years, driven by the continued
                                push of institutional and retail adoption.
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
                                consider for any individual trade, such as
                                safety, price, liquidity, slippage. It is
                                virtually impossible to identify the best
                                combination of these factors without the
                                assistance of a reliable aggregator.
                            </p>
                        </div>
                        <div className={css.secondSectionFooterContent}>
                            <div className={css.secondSectionFooterTitle}>
                                <BuildIcon className={css.secondSectionIcons} />
                                <h2>Solution </h2>
                            </div>
                            <p className={css.secondSectionFooterContentP}>
                                ConnectDeFi aims to become the go-to
                                decentralized exchange, liquidity aggregator,
                                and more.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={css.thirdSection}>
                <h1 className={css.thirdSectionTitle}>Our Services</h1>
                <div className={css.thirdSectionContent}>
                    <div className={css.thirdSectionContentPart1}>
                        <AccountTreeIcon className={css.thirdSectionIcon1} />
                        <div className={css.thirdSectionContentDetail}>
                            <h2 className={css.thirdSectionContentTitle}>
                                Decentralized exchange and Liquidity Aggregator
                            </h2>
                            <p className={css.thirdSectionContentP}>
                                ConnectDeFi will compare liquidity pools of
                                every decentralized exchange to provide traders
                                with both best price and liquidity depth
                                allowing users to easily decide the best way to
                                trade tokens.
                            </p>
                        </div>
                    </div>
                    <div className={css.thirdSectionContentPart2}>
                        <BubbleChartIcon className={css.thirdSectionIcon2} />
                        <div className={css.thirdSectionContentDetail}>
                            <h2 className={css.thirdSectionContentTitle}>
                                Yield Farming and Staking Aggregator
                            </h2>
                            <p className={css.thirdSectionContentP}>
                                ConnectDeFi is designed to collect data points
                                from various DeFi protocols with respect to
                                individual ROI, allowing users to decide what is
                                more profitable, almost effortlessly.
                            </p>
                        </div>
                    </div>
                </div>

                <div className={css.thirdSectionContent}>
                    <div className={css.thirdSectionContentPart3}>
                        <CenterFocusWeakIcon
                            className={css.thirdSectionIcon3}
                        />
                        <div className={css.thirdSectionContentDetail}>
                            <h2 className={css.thirdSectionContentTitle}>
                                Portfolio Management
                            </h2>
                            <p className={css.thirdSectionContentP}>
                                ConnectDeFi assists by tracking assets across
                                multiple wallets, while providing the exact
                                value of all holdings.
                            </p>
                        </div>
                    </div>
                    <div className={css.thirdSectionContentPart4}>
                        <LayersIcon className={css.thirdSectionIcon4} />
                        <div className={css.thirdSectionContentDetail}>
                            <h2 className={css.thirdSectionContentTitle}>
                                Multichain Wallet
                            </h2>
                            <p className={css.thirdSectionContentP}>
                                ConnectDeFi will function as a wallet,
                                supporting multiple assets, including Bitcoin,
                                various Ethereum standards, and various other
                                public blockchains.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Page>
    );
}
