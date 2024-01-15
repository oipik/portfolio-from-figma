import { useSelector, useDispatch } from "react-redux";
import { activeFilterState } from "./portfolioSlice";

import Title from "../Title";

import "./portfolio.scss";

const Portfolio = () => {

    const portfolio = useSelector(state => state.portfolioSlice.portfolio);
    const activeState = useSelector(state => state.portfolioSlice.active);

    const dispatch = useDispatch();

    const menuItemArray = ["All", "App Development", "Web Development", "Design", "Mentorship"];

    const menuElements = menuItemArray.map((name, i) => {
        const clazz = name === activeState ? "portfolio__item--active" : null;
        return (
            <li className={`portfolio__item ${clazz}`} key={i} onClick={() => dispatch(activeFilterState(name))}>{name}</li>
        )
    })

    const getProjects = (data, state) => {
        return data.filter((item, i) => {
            if (state === item.way) {
                return item;
            } else if (state === "All") {
                return item;
            }
        })
        .map((item) => {
            return (
                <div className={`portfolio__project`} key={item.id}>
                    <img className="portfolio__img" src={item.src} alt={item.project} />
                    <p className="portfolio__way">{item.way}</p>
                    <p className="portfolio__name">{item.project}</p>
                </div>
            )
        })
    }

    return (
        <section className="portfolio">
            <Title title={"Portfolio"} style={{ "marginBottom": "0" }} />
            <ul className="portfolio__nav">
                {menuElements}
            </ul>
            <div className="portfolio__projects">
                {getProjects(portfolio, activeState)}
            </div>
        </section>
    )
}

export default Portfolio;