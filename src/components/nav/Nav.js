import { useSelector, useDispatch } from "react-redux";
import { activeFilterChanged } from "./navSlice";

import "./nav.scss";

const Nav = () => {
    const currentData = useSelector(state => state.navSlice.data)
    const dispatch = useDispatch();

    const handleClick = (id) => {
        dispatch(activeFilterChanged(id));
    }

    const list = currentData.map((item) => {
        return (
            <li
                className={`nav__item ${item.active ? "nav__item--active" : null}`}
                key={item.id}
                onClick={() => handleClick(item.id)}>
                <div>
                    <img src={item.active ? item.svgActive : item.svg} alt={item.descr} />
                </div>
                <a href="#" className="nav__link">{item.descr}</a>
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