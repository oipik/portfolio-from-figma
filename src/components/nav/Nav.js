import { useSelector, useDispatch } from "react-redux";
import "./nav.scss";
import { activeFilterChanged } from "../header/filterSlice";

import home from "../../images/icons/nav/home.svg";
import resume from "../../images/icons/nav/resume.svg";
import work from "../../images/icons/nav/work.svg";
import contacts from "../../images/icons/nav/contacts.svg";

import homeActive from "../../images/icons/nav/active/home.svg";
import resumeActive from "../../images/icons/nav/active/resume.svg";
import workActive from "../../images/icons/nav/active/work.svg";
import contactsActive from "../../images/icons/nav/active/contacts.svg";

import { home2 } from "../../images/images";

export const data = [
    { svg: home, svgActive: homeActive, descr: "Home", active: true },
    { svg: resume, svgActive: resumeActive, descr: "Resume", active: false },
    { svg: work, svgActive: workActive, descr: "Work", active: false },
    { svg: contacts, svgActive: contactsActive, descr: "Contact", active: false },
]

const Nav = () => {
    const currentData = useSelector(state => state.data)
    const dispatch = useDispatch();


    const handleClick = (i) => {
        dispatch(activeFilterChanged(i));
    }

    const list = currentData.map((item, i) => {
        return (
            <li
                className={`nav__item ${item.active ? "nav__item--active" : null}`}
                key={i}
                onClick={() => handleClick(i)}>
                <div>
                    <img src={item.active ? item.svgActive : item.svg} alt={item.descr} />
                </div>
                <a href="#" className="nav__link">{item.descr}</a>
            </li>
        )
    })

    return (
        <section className="nav">
            <img src={home2} alt="" />
            <div className="nav__wrapper">
                <ul className="nav__list">
                    {list}
                </ul>
            </div>
        </section>
    )
}

export default Nav;