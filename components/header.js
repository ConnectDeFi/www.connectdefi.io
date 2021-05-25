import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import Nav from 'react-bootstrap/Nav';
import Link from 'next/link';
import { useRouter } from 'next/router';
import css from '../styles/header.module.scss';
import NAV_LINKS from '../constants/nav_links.js';
import EXT_LINKS from '../constants/ext_links.js';
import MenuIcon from '@material-ui/icons/Menu';

export function Header({ children }) {
    const router = useRouter();
    const navItemsJSX = NAV_LINKS.map((link, index) => {
        const classes = classNames({
            [css.active]: link.url === router.pathname,
        });
        const target = link.url.substring(0, 4) === 'http' ? '_blank' : null;
        return (
            <Nav.Item key={`link-${index}`}>
                <Nav.Link href={link.url} className={classes} target={target}>
                    {link.name}
                </Nav.Link>
            </Nav.Item>
        );
    });
    const extItemsJSX = EXT_LINKS.map((link, index) => {
        const classes = classNames({
            [css.active]: link.url === router.pathname,
        });
        const target = link.url.substring(0, 4) === 'http' ? '_blank' : null;
        return (
            <Nav.Item key={`link-${index}`}>
                <Nav.Link href={link.url} className={classes} target={target}>
                    {link.name}
                </Nav.Link>
            </Nav.Item>
        );
    });

    const [menu, setMenu] = useState(`${css.smallHeaderHidden}`);

    const handleClick = () => {
        if (menu == `${css.smallHeaderHidden}`) {
            setMenu(`${css.smallHeader}`);
        } else if (menu == `${css.smallHeader}`) {
            setMenu(`${css.smallHeaderHidden}`);
        }
    };

    return (
        <div className={css.headers}>
            <div className={css.topHeader}>
                <Nav>{extItemsJSX}</Nav>
            </div>
            <div className={css.logo}>
                <img className={css.logoImg} src="/logo.png" />
            </div>
            <div className={css.header}>
                <Nav>{navItemsJSX}</Nav>
            </div>
            <div className={menu}>
                <img src="/logo.png" className={css.headerLeftImg} alt="logo" />
                {navItemsJSX}
            </div>
            <button className={css.smallMenu} onClick={handleClick}>
                <MenuIcon style={{ fontSize: 50 }} />
            </button>
        </div>
    );
}
