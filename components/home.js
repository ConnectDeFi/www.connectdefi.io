import css from '../styles/common.module.scss';

export default function Home() {
    return (
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
    );
}
