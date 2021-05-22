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
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import CheckIcon from '@material-ui/icons/Check';

export default function Home() {
    return (
        <Page>
            <div id="home" className={css.firstSection}>
                <div className={css.firstSectionTitle}>
                    <h1 className={css.title}>ConnectDeFi</h1>
                    <h2 className={css.firstSectionSubTitle}>
                        Fully decentralized and community-led platform.
                    </h2>
                    <button className={css.startButton}>
                        <a className={css.startButtonLink} href="#aboutus">
                            Get Started >
                        </a>{' '}
                    </button>
                </div>
            </div>
            <div id="aboutus" className={css.secondSection}>
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
            <div id="framework" className={css.fourthSection}>
                <h1 className={css.fourthSectionTitle}>
                    Operational Framework
                </h1>
                <h5 className={css.fourthSectionSubTitle}>
                    The ConnectDeFi platform is powered by the Polkadot Network.
                </h5>
                <div className={css.fourthSectionContent}>
                    <div className={css.fourthSectionContentPart1}>
                        <h3>Benefits of Building on the Polkadot Network </h3>
                        <div className={css.fourthSectionContentPart1Headers}>
                            <div className={css.fourthSectionContentPart1Icons}>
                                <CheckBoxIcon
                                    className={css.fourthSectionContentIcons}
                                />
                            </div>
                            <div className={css.fourthSectionContentPart1Title}>
                                True Interoperability
                            </div>
                        </div>
                        <div className={css.fourthSectionContentPart1Paragraph}>
                            <p>
                                {' '}
                                There are multiple methods to achieve
                                interoperability but Polkadot is unparalleled in
                                this area. The structure includes a central
                                relay chain that all individual blockchains
                                connect to, the parachains run in parallel,
                                while also utilizing bridges that connect to
                                blockchains that do not use Polkadot protocols.
                            </p>
                        </div>
                        <div className={css.fourthSectionContentPart1Headers}>
                            <div className={css.fourthSectionContentPart1Icons}>
                                <CheckBoxIcon
                                    className={css.fourthSectionContentIcons}
                                />
                            </div>
                            <div className={css.fourthSectionContentPart1Title}>
                                Economic Scalability:
                            </div>
                        </div>
                        <div className={css.fourthSectionContentPart1Paragraph}>
                            <p>
                                Polkadot achieves high scalability by enabling a
                                common set of validators to secure multiple
                                blockchains. This shared security strategy is
                                reliable compared to first generation smart
                                contract platforms such as Ethereum 1.0 that is
                                prone to significant network congestion and
                                scaling frictions.
                            </p>
                        </div>
                        <div className={css.fourthSectionContentPart1Headers}>
                            <div className={css.fourthSectionContentPart1Icons}>
                                <CheckBoxIcon
                                    className={css.fourthSectionContentIcons}
                                />
                            </div>
                            <div className={css.fourthSectionContentPart1Title}>
                                Open-Source
                            </div>
                        </div>
                        <div className={css.fourthSectionContentPart1Paragraph}>
                            <p>
                                Polkadot Network is powered by Substrate, an
                                open-source framework that allows for building
                                configurable blockchains in a minimal time.
                            </p>
                        </div>
                        <div className={css.fourthSectionContentPart1Headers}>
                            <div className={css.fourthSectionContentPart1Icons}>
                                <CheckBoxIcon
                                    className={css.fourthSectionContentIcons}
                                />
                            </div>
                            <div className={css.fourthSectionContentPart1Title}>
                                Decentralized Governance
                            </div>
                        </div>
                        <div className={css.fourthSectionContentPart1Paragraph}>
                            <p>
                                Polkadot’s governance is based on a
                                Decentralized Autonomous Organization (DAO),
                                which democratically confers on shareholders the
                                rights to form a consensus on critical
                                decisions.
                            </p>
                        </div>
                    </div>
                    <div className={css.fourthSectionContentPart2}>
                        <img src="./polkadot_img.png" />
                    </div>
                </div>
            </div>
            <div className={css.fifthSection}>
                <div className={css.fifthSectionContent}>
                    <div className={css.fifthSectionContentPart1}>
                        <h1 className={css.fifthSectionContentPart1Title}>
                            Token &
                        </h1>
                        <p className={css.fifthSectionContentPart1Paragraph}>
                            <span className={css.fifthSectionInnerTitleHolder}>
                                <span
                                    className={css.fifthSectionInnerTitleLine}
                                ></span>
                                <span className={css.fifthSectionInnerTitle}>
                                    Token
                                </span>
                            </span>
                            The platform issues its own native utility token,
                            $CDF. This token powers the entire ConnectDeFi
                            ecosystem, where it’s used for transaction fees and
                            incentives, as well as governance.
                        </p>
                    </div>
                    <div className={css.fifthSectionContentPart2}>
                        <h1 className={css.fifthSectionContentPart2Title}>
                            Governance
                        </h1>
                        <p className={css.fifthSectionContentPart2Paragraph}>
                            ConnectDeFi is a fully decentralized and
                            community-led platform; hence the DAO makes all
                            major decisions for the platform. Examples of such
                            decisions include:
                        </p>
                        <div className={css.fifthSectionContentPart2Footer}>
                            <div
                                className={
                                    css.fifthSectionContentPart2FooterInner
                                }
                            >
                                <CheckIcon className={css.fifthSectionIcons} />
                                <div
                                    className={
                                        css.fifthSectionContentPart2FooterInnerTitle
                                    }
                                >
                                    Proposals and voting
                                </div>
                            </div>
                            <div
                                className={
                                    css.fifthSectionContentPart2FooterInner
                                }
                            >
                                <CheckIcon className={css.fifthSectionIcons} />
                                <div
                                    className={
                                        css.fifthSectionContentPart2FooterInnerTitle
                                    }
                                >
                                    Adjusting yield distribution and interest
                                    rates
                                </div>
                            </div>
                            <div
                                className={
                                    css.fifthSectionContentPart2FooterInner
                                }
                            >
                                <CheckIcon className={css.fifthSectionIcons} />
                                <div
                                    className={
                                        css.fifthSectionContentPart2FooterInnerTitle
                                    }
                                >
                                    Review of other important rules
                                </div>
                            </div>
                            <div
                                className={
                                    css.fifthSectionContentPart2FooterInner
                                }
                            >
                                <CheckIcon className={css.fifthSectionIcons} />
                                <div
                                    className={
                                        css.fifthSectionContentPart2FooterInnerTitle
                                    }
                                >
                                    Modifying the DAO Structure
                                </div>
                            </div>
                            <div
                                className={
                                    css.fifthSectionContentPart2FooterInner
                                }
                            >
                                <CheckIcon className={css.fifthSectionIcons} />
                                <div
                                    className={
                                        css.fifthSectionContentPart2FooterInnerTitle
                                    }
                                >
                                    Suggesting new features to be implemented
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={css.sixthSection}>
                <h1 className={css.sixthSectionTitle}>Token Metrics</h1>
                <h3 className={css.sixthSectionSubTitle}>
                    1 billion $CDFCONNECT tokens will be minted at TGE.
                </h3>
                <div className={css.sixthSectionContent}>
                    <div className={css.sixthSectionContentValues}>
                        <div className={css.sixthSectionContentPercent}>
                            40%
                        </div>
                        <div className={css.sixthSectionContentTitle}>
                            Community incentives and farming allocation
                        </div>
                    </div>
                    <div className={css.sixthSectionContentValues}>
                        <div className={css.sixthSectionContentPercent}>
                            12%
                        </div>
                        <div className={css.sixthSectionContentTitle}>
                            Token Sale
                        </div>
                    </div>
                    <div className={css.sixthSectionContentValues}>
                        <div className={css.sixthSectionContentPercent}>
                            17%
                        </div>
                        <div className={css.sixthSectionContentTitle}>
                            Team members
                        </div>
                    </div>
                    <div className={css.sixthSectionContentValues}>
                        <div className={css.sixthSectionContentPercent}>
                            10%
                        </div>
                        <div className={css.sixthSectionContentTitle}>
                            Marketing
                        </div>
                    </div>
                    <div className={css.sixthSectionContentValues}>
                        <div className={css.sixthSectionContentPercent}>3%</div>
                        <div className={css.sixthSectionContentTitle}>
                            Advisors
                        </div>
                    </div>
                    <div className={css.sixthSectionContentValues}>
                        <div className={css.sixthSectionContentPercent}>
                            18%
                        </div>
                        <div className={css.sixthSectionContentTitle}>
                            Future project development
                        </div>
                    </div>
                </div>
            </div>
            <div id="roadmap" className={css.seventhSection}>
                <h1 className={css.seventhSectionTitle}>Roadmap</h1>
                <div className={css.seventhSectionBorder}></div>
                <div className={css.seventhSectionContents}>
                    <div className={css.seventhSectionContentPart1}>
                        <h5 className={css.seventhSectionContentPart1Detail}>
                            Team Establishment
                        </h5>
                        <h5 className={css.seventhSectionContentPart1Detail}>
                            Feasibility with regards to roadmap targets
                        </h5>
                        <h5 className={css.seventhSectionContentPart1Detail}>
                            Official website online
                        </h5>
                        <h5 className={css.seventhSectionContentPart1Detail}>
                            Refinement of ConnectDeFi Architecture
                        </h5>
                        <h5 className={css.seventhSectionContentPart1Detail}>
                            Initial Marketing Activities
                        </h5>
                        <h5 className={css.seventhSectionContentPart1Detail}>
                            Asset management security Audit
                        </h5>
                        <h5 className={css.seventhSectionContentPart1Detail}>
                            Initialization of Development: Liquidity and DEX
                            aggregators
                        </h5>
                    </div>
                    <div className={css.seventhSectionContentPart2}>
                        <h5 className={css.seventhSectionContentPart2Detail}>
                            Conceptualization of the Idea
                        </h5>
                        <h5 className={css.seventhSectionContentPart2Detail}>
                            Initial feasibility and testing of concept
                        </h5>
                        <h5 className={css.seventhSectionContentPart2Detail}>
                            Feature architecture and rollout timelines
                        </h5>
                        <h5 className={css.seventhSectionContentPart2Detail}>
                            Private sale fundraising round
                        </h5>
                        <h5 className={css.seventhSectionContentPart2Detail}>
                            Development of the Asset/Portfolio management
                            tool(s)
                        </h5>
                        <h5 className={css.seventhSectionContentPart2Detail}>
                            Launch of Asset Management tool MVP
                        </h5>
                        <h5 className={css.seventhSectionContentPart2Detail}>
                            Updated landing page app (Asset Management tool)
                        </h5>
                    </div>
                </div>
                <div className={css.seventhSectionMore}>
                    <h6 className={css.seventhSectionMoreValue}>More... </h6>
                </div>
            </div>
            <div id="contact" className={css.eighthSection}>
                <div className={css.eighthSectionPanel}>
                    <h3 className={css.eighthSectionPanelTitle}>
                        Join us in building the efficiency of decentralized
                        finance together!
                    </h3>
                    <p>
                        The referral program aims to drive widespread adoption
                        of the platform by rewarding users accordingly. Anyone
                        can take advantage of this program by generating unique
                        links to invite others.
                    </p>
                    <p>
                        By joining this lucrative referral program, you help
                        promote not just the platform, but the entire DeFi
                        ecosystem.
                    </p>
                </div>
            </div>
        </Page>
    );
}
