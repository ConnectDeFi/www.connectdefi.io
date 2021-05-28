import css from '../styles/common.module.scss';
import CheckIcon from '@material-ui/icons/Check';

export default function Governance() {
    return (
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
                        The platform issues its own native utility token, $CDF.
                        This token powers the entire ConnectDeFi ecosystem,
                        where it’s used for transaction fees and incentives, as
                        well as governance.
                    </p>
                </div>
                <div className={css.fifthSectionContentPart2}>
                    <h1 className={css.fifthSectionContentPart2Title}>
                        Governance
                    </h1>
                    <p className={css.fifthSectionContentPart2Paragraph}>
                        ConnectDeFi is a fully decentralized and community-led
                        platform; hence the DAO makes all major decisions for
                        the platform. Examples of such decisions include:
                    </p>
                    <div className={css.fifthSectionContentPart2Footer}>
                        <div
                            className={css.fifthSectionContentPart2FooterInner}
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
                            className={css.fifthSectionContentPart2FooterInner}
                        >
                            <CheckIcon className={css.fifthSectionIcons} />
                            <div
                                className={
                                    css.fifthSectionContentPart2FooterInnerTitle
                                }
                            >
                                Adjusting yield distribution and interest rates
                            </div>
                        </div>
                        <div
                            className={css.fifthSectionContentPart2FooterInner}
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
                            className={css.fifthSectionContentPart2FooterInner}
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
                            className={css.fifthSectionContentPart2FooterInner}
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
    );
}
