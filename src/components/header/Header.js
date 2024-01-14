import { switcher } from "../../images/images"

import "./header.scss";

const Header = () => {
    return (
        <section className="header">
            <p className="header__logo"><span></span>Portfolio</p>
            <div className="header__box">
                <img className="header__switcher" src={switcher} alt="switcher" />
            </div>
        </section>
    )
}

export default Header;