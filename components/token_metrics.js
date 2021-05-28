import css from '../styles/common.module.scss';

export default function Metrics() {
    return (
        <div className={css.sixthSection}>
            <h1 className={css.sixthSectionTitle}>Token Metrics</h1>
            <h3 className={css.sixthSectionSubTitle}>
                1 billion $CDFCONNECT tokens will be minted at TGE.
            </h3>
            <div className={css.sixthSectionContent}>
                <div className={css.sixthSectionContentValues}>
                    <div className={css.sixthSectionContentPercent}>40%</div>
                    <div className={css.sixthSectionContentTitle}>
                        Community incentives and farming allocation
                    </div>
                </div>
                <div className={css.sixthSectionContentValues}>
                    <div className={css.sixthSectionContentPercent}>12%</div>
                    <div className={css.sixthSectionContentTitle}>
                        Token Sale
                    </div>
                </div>
                <div className={css.sixthSectionContentValues}>
                    <div className={css.sixthSectionContentPercent}>17%</div>
                    <div className={css.sixthSectionContentTitle}>
                        Team members
                    </div>
                </div>
                <div className={css.sixthSectionContentValues}>
                    <div className={css.sixthSectionContentPercent}>10%</div>
                    <div className={css.sixthSectionContentTitle}>
                        Marketing
                    </div>
                </div>
                <div className={css.sixthSectionContentValues}>
                    <div className={css.sixthSectionContentPercent}>3%</div>
                    <div className={css.sixthSectionContentTitle}>Advisors</div>
                </div>
                <div className={css.sixthSectionContentValues}>
                    <div className={css.sixthSectionContentPercent}>18%</div>
                    <div className={css.sixthSectionContentTitle}>
                        Future project development
                    </div>
                </div>
            </div>
        </div>
    );
}
