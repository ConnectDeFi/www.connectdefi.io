import css from '../styles/common.module.scss';

export default function Roadmap() {
    return (
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
                        Development of the Asset/Portfolio management tool(s)
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
    );
}
