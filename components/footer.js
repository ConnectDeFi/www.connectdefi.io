import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

import css from '../styles/footer.module.scss';

library.add(fab, faFacebookF, faTwitter);

export function Footer({ children }) {
    return (
        <footer className={css.footer}>
            ConnectDeFi &copy; 2021 ConnectDeFi
        </footer>
    );
}
