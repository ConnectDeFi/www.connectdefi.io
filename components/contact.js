import css from '../styles/common.module.scss';

export default function Contact() {
    return (
        <div id="contact" className={css.contactSection}>
            <div className={css.contactSectionPanel}>
                <h3 className={css.contactSectionPanelTitle}>
                    Join us in building the efficiency of decentralized finance
                    together!
                </h3>
                <p>
                    The referral program aims to drive widespread adoption of
                    the platform by rewarding users accordingly. Anyone can take
                    advantage of this program by generating unique links to
                    invite others.
                </p>
                <p>
                    By joining this lucrative referral program, you help promote
                    not just the platform, but the entire DeFi ecosystem.
                </p>
            </div>
        </div>
    );
}
