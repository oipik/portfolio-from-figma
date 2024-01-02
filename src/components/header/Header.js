import switcher from "../../images/icons/switcher.png"

import "./header.scss";

const Header = () => {
    return (
        <div className="header">
            <p className="header__logo"><span></span>Portfolio</p>
            <div className="header__box">
                <img className="header__switcher" src={switcher} alt="switcher" />
            </div>
        </div>
    )
}

export default Header;