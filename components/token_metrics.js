import css from '../styles/common.module.scss';

export default function Metrics() {
    return (
        <div className={css.metricsSection}>
            <h1 className={css.metricsSectionTitle}>Token Metrics</h1>
            <h3 className={css.metricsSectionSubTitle}>
                1 billion $CDFCONNECT tokens will be minted at TGE.
            </h3>
            <div className={css.metricsSectionContent}>
                <div className={css.metricsSectionContentValues}>
                    <div className={css.metricsSectionContentPercent}>40%</div>
                    <div className={css.metricsSectionContentTitle}>
                        Community incentives and farming allocation
                    </div>
                </div>
                <div className={css.metricsSectionContentValues}>
                    <div className={css.metricsSectionContentPercent}>12%</div>
                    <div className={css.metricsSectionContentTitle}>
                        Token Sale
                    </div>
                </div>
                <div className={css.metricsSectionContentValues}>
                    <div className={css.metricsSectionContentPercent}>17%</div>
                    <div className={css.metricsSectionContentTitle}>
                        Team members
                    </div>
                </div>
                <div className={css.metricsSectionContentValues}>
                    <div className={css.metricsSectionContentPercent}>10%</div>
                    <div className={css.metricsSectionContentTitle}>
                        Marketing
                    </div>
                </div>
                <div className={css.metricsSectionContentValues}>
                    <div className={css.metricsSectionContentPercent}>3%</div>
                    <div className={css.metricsSectionContentTitle}>
                        Advisors
                    </div>
                </div>
                <div className={css.metricsSectionContentValues}>
                    <div className={css.metricsSectionContentPercent}>18%</div>
                    <div className={css.metricsSectionContentTitle}>
                        Future project development
                    </div>
                </div>
            </div>
        </div>
    );
}
