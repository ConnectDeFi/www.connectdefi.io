import css from '../styles/common.module.scss';
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import CenterFocusWeakIcon from '@material-ui/icons/CenterFocusWeak';
import LayersIcon from '@material-ui/icons/Layers';
import BubbleChartIcon from '@material-ui/icons/BubbleChart';

export default function Services() {
    return (
        <div id="services" className={css.serviceSection}>
            <h1 className={css.serviceSectionTitle}>Our Services</h1>
            <div className={css.serviceSectionContent}>
                <div className={css.serviceSectionContentPart1}>
                    <AccountTreeIcon className={css.serviceSectionIcon1} />
                    <div className={css.serviceSectionContentDetail}>
                        <h2 className={css.serviceSectionContentTitle}>
                            Decentralized exchange and Liquidity Aggregator
                        </h2>
                        <p className={css.serviceSectionContentP}>
                            ConnectDeFi will compare liquidity pools of every
                            decentralized exchange to provide traders with both
                            best price and liquidity depth allowing users to
                            easily decide the best way to trade tokens.
                        </p>
                    </div>
                </div>
                <div className={css.serviceSectionContentPart2}>
                    <BubbleChartIcon className={css.serviceSectionIcon2} />
                    <div className={css.serviceSectionContentDetail}>
                        <h2 className={css.serviceSectionContentTitle}>
                            Yield Farming and Staking Aggregator
                        </h2>
                        <p className={css.serviceSectionContentP}>
                            ConnectDeFi is designed to collect data points from
                            various DeFi protocols with respect to individual
                            ROI, allowing users to decide what is more
                            profitable, almost effortlessly.
                        </p>
                    </div>
                </div>
            </div>

            <div className={css.serviceSectionContent}>
                <div className={css.serviceSectionContentPart3}>
                    <CenterFocusWeakIcon className={css.serviceSectionIcon3} />
                    <div className={css.serviceSectionContentDetail}>
                        <h2 className={css.serviceSectionContentTitle}>
                            Portfolio Management
                        </h2>
                        <p className={css.serviceSectionContentP}>
                            ConnectDeFi assists by tracking assets across
                            multiple wallets, while providing the exact value of
                            all holdings.
                        </p>
                    </div>
                </div>
                <div className={css.serviceSectionContentPart4}>
                    <LayersIcon className={css.serviceSectionIcon4} />
                    <div className={css.serviceSectionContentDetail}>
                        <h2 className={css.serviceSectionContentTitle}>
                            Multichain Wallet
                        </h2>
                        <p className={css.serviceSectionContentP}>
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
