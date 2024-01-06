import "./nav.scss";

import home from "../../images/icons/nav/home.svg"
import resume from "../../images/icons/nav/resume.svg"
import work from "../../images/icons/nav/work.svg"
import contacts from "../../images/icons/nav/contacts.svg"

const Nav = () => {
    return (
        <section className="nav">
            <div className="nav__wrapper"> 
                <ul className="nav__list">
                    <li className="nav__item">
                        <div>
                            <img src={home} alt="home" />
                        </div>
                        <a href="#" className="nav__link">Home</a>
                    </li>
                    <li className="nav__item">
                        <div>
                            <img src={resume} alt="home" />
                        </div>
                        <a href="#" className="nav__link">Resume</a>
                    </li>
                    <li className="nav__item">
                        <div>
                            <img src={work} alt="home" />
                        </div>
                        <a href="#" className="nav__link">Work</a>
                    </li>
                    <li className="nav__item">
                        <div>
                            <img src={contacts} alt="home" />
                        </div>
                        <a href="#" className="nav__link">Contact</a>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Nav;