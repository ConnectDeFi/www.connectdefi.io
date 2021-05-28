import css from '../styles/common.module.scss';
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import CenterFocusWeakIcon from '@material-ui/icons/CenterFocusWeak';
import LayersIcon from '@material-ui/icons/Layers';
import BubbleChartIcon from '@material-ui/icons/BubbleChart';

export default function Services() {
    return (
        <div id="services" className={css.thirdSection}>
            <h1 className={css.thirdSectionTitle}>Our Services</h1>
            <div className={css.thirdSectionContent}>
                <div className={css.thirdSectionContentPart1}>
                    <AccountTreeIcon className={css.thirdSectionIcon1} />
                    <div className={css.thirdSectionContentDetail}>
                        <h2 className={css.thirdSectionContentTitle}>
                            Decentralized exchange and Liquidity Aggregator
                        </h2>
                        <p className={css.thirdSectionContentP}>
                            ConnectDeFi will compare liquidity pools of every
                            decentralized exchange to provide traders with both
                            best price and liquidity depth allowing users to
                            easily decide the best way to trade tokens.
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
                            ConnectDeFi is designed to collect data points from
                            various DeFi protocols with respect to individual
                            ROI, allowing users to decide what is more
                            profitable, almost effortlessly.
                        </p>
                    </div>
                </div>
            </div>

            <div className={css.thirdSectionContent}>
                <div className={css.thirdSectionContentPart3}>
                    <CenterFocusWeakIcon className={css.thirdSectionIcon3} />
                    <div className={css.thirdSectionContentDetail}>
                        <h2 className={css.thirdSectionContentTitle}>
                            Portfolio Management
                        </h2>
                        <p className={css.thirdSectionContentP}>
                            ConnectDeFi assists by tracking assets across
                            multiple wallets, while providing the exact value of
                            all holdings.
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
                            ConnectDeFi will function as a wallet, supporting
                            multiple assets, including Bitcoin, various Ethereum
                            standards, and various other public blockchains.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
