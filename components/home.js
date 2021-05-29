import css from '../styles/common.module.scss';

export default function Home() {
    return (
        <div id="home" className={css.homeSection}>
            <div className={css.homeSectionTitle}>
                <h1 className={css.title}>ConnectDeFi</h1>
                <h2 className={css.homeSectionSubTitle}>
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
