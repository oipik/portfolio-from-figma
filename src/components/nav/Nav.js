import { useSelector, useDispatch } from "react-redux";
import { activeFilterChanged } from "./navSlice";
import { NavLink } from "react-router-dom";

import "./nav.scss";

const Nav = () => {
    const currentData = useSelector(state => state.navSlice.data)
    const dispatch = useDispatch();

    const handleClick = (id) => {
        dispatch(activeFilterChanged(id));
    }

    const list = currentData.map((item) => {
        return (
            <li className="nav__item" key={item.id}>
                <NavLink
                    to={`/${item.to}`}
                    className={({ isActive }) => "nav__link " + (isActive ? "nav__link--active" : "")}
                    onClick={() => handleClick(item.id)}>
                    <img src={item.active ? item.svgActive : item.svg} alt={item.descr} />
                    {item.descr}
                </NavLink>
            </li>
        )
    })

    return (
        <section className="nav">
            <div className="nav__wrapper">
                <ul className="nav__list">
                    {list}
                </ul>
            </div>
        </section>
    )
}

export default Nav;