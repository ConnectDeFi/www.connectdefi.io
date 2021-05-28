import css from '../styles/common.module.scss';

export default function Roadmap() {
    return (
        <div id="roadmap" className={css.roadmapSection}>
            <h1 className={css.roadmapSectionTitle}>Roadmap</h1>
            <div className={css.roadmapSectionBorder}></div>
            <div className={css.roadmapSectionContents}>
                <div className={css.roadmapSectionContentPart1}>
                    <h5 className={css.roadmapSectionContentPart1Detail}>
                        Team Establishment
                    </h5>
                    <h5 className={css.roadmapSectionContentPart1Detail}>
                        Feasibility with regards to roadmap targets
                    </h5>
                    <h5 className={css.roadmapSectionContentPart1Detail}>
                        Official website online
                    </h5>
                    <h5 className={css.roadmapSectionContentPart1Detail}>
                        Refinement of ConnectDeFi Architecture
                    </h5>
                    <h5 className={css.roadmapSectionContentPart1Detail}>
                        Initial Marketing Activities
                    </h5>
                    <h5 className={css.roadmapSectionContentPart1Detail}>
                        Asset management security Audit
                    </h5>
                    <h5 className={css.roadmapSectionContentPart1Detail}>
                        Initialization of Development: Liquidity and DEX
                        aggregators
                    </h5>
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
                </div>
            </div>
            <div className={css.roadmapSectionMore}>
                <h6 className={css.roadmapSectionMoreValue}>More... </h6>
            </div>
        </div>
    );
}
