import css from '../styles/common.module.scss';
import CheckIcon from '@material-ui/icons/Check';

export default function Governance() {
    return (
        <div className={css.governanceSection}>
            <div className={css.governanceSectionContent}>
                <div className={css.governanceSectionContentPart1}>
                    <h1 className={css.governanceSectionContentPart1Title}>
                        Token &
                    </h1>
                    <p className={css.governanceSectionContentPart1Paragraph}>
                        <span className={css.governanceSectionInnerTitleHolder}>
                            <span
                                className={css.governanceSectionInnerTitleLine}
                            ></span>
                            <span className={css.governanceSectionInnerTitle}>
                                Token
                            </span>
                        </span>
                        The platform issues its own native utility token, $CDF.
                        This token powers the entire ConnectDeFi ecosystem,
                        where it’s used for transaction fees and incentives, as
                        well as governance.
                    </p>
                </div>
                <div className={css.governanceSectionContentPart2}>
                    <h1 className={css.governanceSectionContentPart2Title}>
                        Governance
                    </h1>
                    <p className={css.governanceSectionContentPart2Paragraph}>
                        ConnectDeFi is a fully decentralized and community-led
                        platform; hence the DAO makes all major decisions for
                        the platform. Examples of such decisions include:
                    </p>
                    <div className={css.governanceSectionContentPart2Footer}>
                        <div
                            className={
                                css.governanceSectionContentPart2FooterInner
                            }
                        >
                            <CheckIcon className={css.governanceSectionIcons} />
                            <div
                                className={
                                    css.governanceSectionContentPart2FooterInnerTitle
                                }
                            >
                                Proposals and voting
                            </div>
                        </div>
                        <div
                            className={
                                css.governanceSectionContentPart2FooterInner
                            }
                        >
                            <CheckIcon className={css.governanceSectionIcons} />
                            <div
                                className={
                                    css.governanceSectionContentPart2FooterInnerTitle
                                }
                            >
                                Adjusting yield distribution and interest rates
                            </div>
                        </div>
                        <div
                            className={
                                css.governanceSectionContentPart2FooterInner
                            }
                        >
                            <CheckIcon className={css.governanceSectionIcons} />
                            <div
                                className={
                                    css.governanceSectionContentPart2FooterInnerTitle
                                }
                            >
                                Review of other important rules
                            </div>
                        </div>
                        <div
                            className={
                                css.governanceSectionContentPart2FooterInner
                            }
                        >
                            <CheckIcon className={css.governanceSectionIcons} />
                            <div
                                className={
                                    css.governanceSectionContentPart2FooterInnerTitle
                                }
                            >
                                Modifying the DAO Structure
                            </div>
                        </div>
                        <div
                            className={
                                css.governanceSectionContentPart2FooterInner
                            }
                        >
                            <CheckIcon className={css.governanceSectionIcons} />
                            <div
                                className={
                                    css.governanceSectionContentPart2FooterInnerTitle
                                }
                            >
                                Suggesting new features to be implemented
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
