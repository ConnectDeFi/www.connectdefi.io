import css from '../styles/common.module.scss';
import { useState } from 'react';

export default function Roadmap() {
    const [more, setMore] = useState(false);
    const showHideRoadmap = () => {
        setMore(!more);
    };

    return (
        <div id="roadmap" className={css.roadmapSection}>
            <h1 className={css.roadmapSectionTitle}>Roadmap</h1>
            <div className={css.roadmapSectionContents}>
                <div className={css.roadmapSectionContentPart1}>
                    <div className={css.roadmapSectionContentPart1Container}>
                        <h5 className={css.roadmapSectionContentPart1Detail}>
                            Team Establishment
                        </h5>
                        <div
                            className={css.roadmapSectionContentMiddleLine}
                        ></div>
                    </div>
                    <div className={css.roadmapSectionContentPart1Container}>
                        <h5 className={css.roadmapSectionContentPart1Detail}>
                            Feasibility with regards to roadmap targets
                        </h5>
                        <div
                            className={css.roadmapSectionContentMiddleLine}
                        ></div>
                    </div>
                    <div className={css.roadmapSectionContentPart1Container}>
                        <h5 className={css.roadmapSectionContentPart1Detail}>
                            Official website online
                        </h5>
                        <div
                            className={css.roadmapSectionContentMiddleLine}
                        ></div>
                    </div>
                    <div className={css.roadmapSectionContentPart1Container}>
                        <h5 className={css.roadmapSectionContentPart1Detail}>
                            Refinement of ConnectDeFi Architecture
                        </h5>
                        <div
                            className={css.roadmapSectionContentMiddleLine}
                        ></div>
                    </div>
                    <div className={css.roadmapSectionContentPart1Container}>
                        <h5 className={css.roadmapSectionContentPart1Detail}>
                            Initial Marketing Activities
                        </h5>
                        <div
                            className={css.roadmapSectionContentMiddleLine}
                        ></div>
                    </div>
                    <div className={css.roadmapSectionContentPart1Container}>
                        <h5 className={css.roadmapSectionContentPart1Detail}>
                            Asset management security Audit
                        </h5>
                        <div
                            className={css.roadmapSectionContentMiddleLine}
                        ></div>
                    </div>
                    <div className={css.roadmapSectionContentPart1Container}>
                        <h5 className={css.roadmapSectionContentPart1Detail}>
                            Initialization of Development: Liquidity and DEX
                            aggregators
                        </h5>
                        <div
                            className={css.roadmapSectionContentMiddleLine}
                        ></div>
                    </div>
                    {more ? (
                        <>
                            <div
                                className={
                                    css.roadmapSectionContentPart1Container
                                }
                            >
                                <h5
                                    className={
                                        css.roadmapSectionContentPart1Detail
                                    }
                                >
                                    Initialization of development: Yield Farming
                                    and Staking Aggregators
                                </h5>
                                <div
                                    className={
                                        css.roadmapSectionContentMiddleLine
                                    }
                                ></div>
                            </div>
                            <div
                                className={
                                    css.roadmapSectionContentPart1Container
                                }
                            >
                                <h5
                                    className={
                                        css.roadmapSectionContentPart1Detail
                                    }
                                >
                                    Launch of Liquidity and DEX aggregator beta
                                </h5>
                                <div
                                    className={
                                        css.roadmapSectionContentMiddleLine
                                    }
                                ></div>
                            </div>
                            <div
                                className={
                                    css.roadmapSectionContentPart1Container
                                }
                            >
                                <h5
                                    className={
                                        css.roadmapSectionContentPart1Detail
                                    }
                                >
                                    Launch ofMulti-chain DEX integration
                                    initiative (ongoing process) (Liquidity &
                                    Trading)
                                </h5>
                                <div
                                    className={
                                        css.roadmapSectionContentMiddleLine
                                    }
                                ></div>
                            </div>
                            <div
                                className={
                                    css.roadmapSectionContentPart1Container
                                }
                            >
                                <h5
                                    className={
                                        css.roadmapSectionContentPart1Detail
                                    }
                                >
                                    Testing of yield and staking aggregator
                                    platform
                                </h5>
                                <div
                                    className={
                                        css.roadmapSectionContentMiddleLine
                                    }
                                ></div>
                            </div>
                            <div
                                className={
                                    css.roadmapSectionContentPart1Container
                                }
                            >
                                <h5
                                    className={
                                        css.roadmapSectionContentPart1Detail
                                    }
                                >
                                    Launch of yield and staking aggregator tool
                                </h5>
                                <div
                                    className={
                                        css.roadmapSectionContentMiddleLine
                                    }
                                ></div>
                            </div>
                            <div
                                className={
                                    css.roadmapSectionContentPart1Container
                                }
                            >
                                <h5
                                    className={
                                        css.roadmapSectionContentPart1Detail
                                    }
                                >
                                    ConnectDeFi Multi-chain Wallet Security
                                    Audit
                                </h5>
                                <div
                                    className={
                                        css.roadmapSectionContentMiddleLine
                                    }
                                ></div>
                            </div>
                            <div
                                className={
                                    css.roadmapSectionContentPart1Container
                                }
                            >
                                <h5
                                    className={
                                        css.roadmapSectionContentPart1Detail
                                    }
                                >
                                    Launch of ConnectDeFi multi-chain mobile App
                                </h5>
                                <div
                                    className={
                                        css.roadmapSectionContentMiddleLine
                                    }
                                ></div>
                            </div>
                            <div
                                className={
                                    css.roadmapSectionContentPart1Container
                                }
                            >
                                <h5
                                    className={
                                        css.roadmapSectionContentPart1Detail
                                    }
                                >
                                    Initiatives regarding increased onboarding
                                    of users
                                </h5>
                                <div
                                    className={
                                        css.roadmapSectionContentMiddleLine
                                    }
                                ></div>
                            </div>
                        </>
                    ) : null}
                </div>
                <div className={css.roadmapSectionContentPart2}>
                    <h5 className={css.roadmapSectionContentPart2Detail}>
                        Conceptualization of the Idea
                    </h5>
                    <h5 className={css.roadmapSectionContentPart2Detail}>
                        Initial feasibility and testing of concept
                    </h5>
                    <h5 className={css.roadmapSectionContentPart2Detail}>
                        Feature architecture and rollout timelines
                    </h5>
                    <h5 className={css.roadmapSectionContentPart2Detail}>
                        Private sale fundraising round
                    </h5>
                    <h5 className={css.roadmapSectionContentPart2Detail}>
                        Development of the Asset/Portfolio management tool(s)
                    </h5>
                    <h5 className={css.roadmapSectionContentPart2Detail}>
                        Launch of Asset Management tool MVP
                    </h5>
                    <h5 className={css.roadmapSectionContentPart2Detail}>
                        Updated landing page app (Asset Management tool)
                    </h5>
                    {more ? (
                        <div className={css.roadmapSectionMoreHidden}>
                            <h5
                                className={css.roadmapSectionContentPart2Detail}
                            >
                                Support of ERC20 DEXes on liquidity and DEX
                                aggregator
                            </h5>
                            <h5
                                className={css.roadmapSectionContentPart2Detail}
                            >
                                Multi-chain DEX Security Audit
                            </h5>
                            <h5
                                className={css.roadmapSectionContentPart2Detail}
                            >
                                Introduction of Referral Program
                            </h5>
                            <h5
                                className={css.roadmapSectionContentPart2Detail}
                            >
                                Integration of different yield and staking
                                platform
                            </h5>
                            <h5
                                className={css.roadmapSectionContentPart2Detail}
                            >
                                Yield & Staking platform: Security Audit
                            </h5>
                            <h5
                                className={css.roadmapSectionContentPart2Detail}
                            >
                                Development of ConnectDeFi multi-chain wallet
                            </h5>
                            <h5
                                className={css.roadmapSectionContentPart2Detail}
                            >
                                Launch of ConnectDeFi Multi-chain Wallet
                            </h5>
                            <h5
                                className={css.roadmapSectionContentPart2Detail}
                            >
                                Broadening of feature set within the platform
                            </h5>
                            <h5
                                className={css.roadmapSectionContentPart2Detail}
                            >
                                R&D with regard to platform optimization,
                                streamlining, and expansion
                            </h5>
                        </div>
                    ) : null}
                </div>
            </div>
            <div className={css.roadmapSectionMore}>
                {!more ? (
                    <div className={css.roadmapButtonContainer}>
                        <div className={css.roadmapButtonLine}></div>
                        <a
                            onClick={showHideRoadmap}
                            className={css.roadmapSectionMoreValue}
                        >
                            More...{' '}
                        </a>
                    </div>
                ) : null}
            </div>
            <div className={css.roadmapSectionMore}>
                {more ? (
                    <div className={css.roadmapButtonContainer}>
                        <div className={css.roadmapButtonLine}></div>

                        <a
                            onClick={showHideRoadmap}
                            className={css.roadmapSectionLessValue}
                        >
                            Less...{' '}
                        </a>
                    </div>
                ) : null}
            </div>
        </div>
    );
}
