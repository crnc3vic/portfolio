import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { FiX , FiMenu } from "react-icons/fi";
import content from '../../Content.json'; // Make sure the path to Content.json is correct

class HeaderFour extends Component{
    constructor(props) {
        super(props);
        this.menuTrigger = this.menuTrigger.bind(this);
        this.CLoseMenuTrigger = this.CLoseMenuTrigger.bind(this);
        window.addEventListener('load', function() {
            console.log('All assets are loaded')
        })
    }
    
    menuTrigger() {
        document.querySelector('.header-wrapper').classList.toggle('menu-open');
    }
    
    CLoseMenuTrigger() {
        document.querySelector('.header-wrapper').classList.remove('menu-open');
    }

    render(){
        const { logo, color='default-color' } = this.props;
        let logoUrl;
        if(logo === 'light'){
            logoUrl = <img src={content.logoLight} width="120px" alt="Frankfurt Web Services" />;
        }else if(logo === 'dark'){
            logoUrl = <img src={content.logoDark} width="120px" alt="Frankfurt Web Services" />;
        }else if(logo === 'symbol-dark'){
            logoUrl = <img src={content.logoDark} width="120px" alt="Frankfurt Web Services" />;
        }else if(logo === 'symbol-light'){
            logoUrl = <img src={content.logoDark} width="120px" alt="Frankfurt Web Services" />;
        }else{
            logoUrl = <img src={content.logoDark} width="120px" alt="Frankfurt Web Services" />;
        }
        
        const menuItems = content.menu.map((menu, index) => (
            <li key={index} className={menu.submenu ? 'has-droupdown' : ''}>
                <Link to={menu.link}>{menu.name}</Link>
                {menu.submenu && (
                    <ul className="submenu">
                        {menu.submenu.map((subItem, subIndex) => (
                            <li key={subIndex}><Link to={subItem.link}>{subItem.name}</Link></li>
                        ))}
                    </ul>
                )}
            </li>
        ));

        return(
            <header className={`header-area formobile-menu ${this.props.headerPosition} ${this.props.color}`}>
                <div className="header-wrapper" id="header-wrapper">
                    <div className="header-left">
                        <div className="logo">
                            <a href="/">
                                {logoUrl}
                            </a>
                        </div>
                    </div>
                    <div className="header-right">
                        <nav className="mainmenunav d-lg-block">
                            <ul className="mainmenu">
                                {menuItems}
                            </ul>
                        </nav>
                        <div className="header-btn">
                            <a className="rn-btn" href="/contact">
                                <span>{content.orderButton}</span>
                            </a>
                        </div>
                        {/* Start Humberger Menu */}
                        <div className="humberger-menu d-block d-lg-none pl--20">
                            <span onClick={this.menuTrigger} className="menutrigger text-white"><FiMenu /></span>
                        </div>
                        {/* End Humberger Menu */}
                        <div className="close-menu d-block d-lg-none">
                            <span onClick={this.CLoseMenuTrigger} className="closeTrigger"><FiX /></span>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}
export default HeaderFour;
