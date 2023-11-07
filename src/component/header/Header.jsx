import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { FiX , FiMenu } from "react-icons/fi";
import content from "../../Content.json";

class Header extends Component {
    constructor(props) {
        super(props);
        this.menuTrigger = this.menuTrigger.bind(this);
        this.CLoseMenuTrigger = this.CLoseMenuTrigger.bind(this);
        window.addEventListener('load', function() {
            console.log('All assets are loaded')
        })
    }

    menuTrigger() {
        document.querySelector('.header-wrapper').classList.toggle('menu-open')
    }

    CLoseMenuTrigger() {
        document.querySelector('.header-wrapper').classList.remove('menu-open');
    }

    renderLogo() {
        const { logo } = this.props;
        const logos = {
            light: <img src={content.logoLight} width="150px" alt="Frankfurt Web Services." />,
            dark: <img src={content.logoDark} alt="Frankfurt Web Services" />,
            'symbol-dark': <img src="/assets/images/logo/logo-symbol-dark.png" alt="Frankfurt Web Services" />,
            'symbol-light': <img src="/assets/images/logo/logo-symbol-light.png" alt="Frankfurt Web Services" />
        };
        return logos[logo] || logos.light;
    }

    renderMenuItems(menuData) {
        return (
            <ul className="mainmenu">
                {menuData.map((item, index) => (
                    <li key={index} className={item.submenu ? 'has-droupdown' : ''}>
                        <Link to={item.link}>{item.name}</Link>
                        {item.submenu && (
                            <ul className="submenu">
                                {item.submenu.map((subItem, subIndex) => (
                                    <li key={`submenu-item-${subIndex}`}>
                                        <Link to={subItem.link}>{subItem.name}</Link>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        const { color='default-color' } = this.props;

        return (
            <header className={`header-area formobile-menu header--transparent ${color}`}>
                <div className="header-wrapper" id="header-wrapper">
                    <div className="header-left">
                        <div className="logo">
                            <a href="/">
                                {this.renderLogo()}
                            </a>
                        </div>
                    </div>
                    <div className="header-right">
                        <nav className="mainmenunav d-lg-block">
                            {this.renderMenuItems(content.menu)}
                        </nav>

                        {/* Start Hamburger Menu */}
                        <div className="humberger-menu d-block d-lg-none pl--20">
                            <span onClick={this.menuTrigger} className="menutrigger text-white"><FiMenu /></span>
                        </div>
                        {/* End Hamburger Menu */}
                        <div className="close-menu d-block d-lg-none">
                            <span onClick={this.CLoseMenuTrigger} className="closeTrigger"><FiX /></span>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header;
