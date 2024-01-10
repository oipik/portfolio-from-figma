import Title from "../Title";

import smartBankApp from "../../../images/portfolio/smart-bank.png";
import blog from "../../../images/portfolio/blog.png";
import uiUx from "../../../images/portfolio/ui-ux.png";
import mentorship from "../../../images/portfolio/mentorship.png";
import web from "../../../images/portfolio/web.png";

import "./portfolio.scss";

const Portfolio = () => {
    return (
        <section className="portfolio">
            <Title title={"Portfolio"} style={{"margin-bottom" : "0"}}/>
            <ul className="portfolio__nav">
                <li className="portfolio__item">All</li>
                <li className="portfolio__item">App Development</li>
                <li className="portfolio__item">Web Development</li>
                <li className="portfolio__item">Design</li>
                <li className="portfolio__item">Mentorship</li>
            </ul>
            <div className="portfolio__projects">
                <div className="portfolio__project">
                    <img className="portfolio__img" src={smartBankApp} alt="Smart bank app" />
                    <p className="portfolio__way">App Development</p>
                    <p className="portfolio__name">Smart Bank App</p>
                </div>
                <div className="portfolio__project portfolio__project--heighter">
                    <img className="portfolio__img" src={blog} alt="Blog" />
                    <p className="portfolio__way">Blog</p>
                    <p className="portfolio__name">NEXT.js</p>
                </div>
                <div className="portfolio__project">
                    <img className="portfolio__img" src={uiUx} alt="ui/ux" />
                    <p className="portfolio__way">UI/UX</p>
                    <p className="portfolio__name">Rental</p>
                </div>
                <div className="portfolio__project portfolio__project--heighter">
                    <img className="portfolio__img" src={mentorship} alt="Mentorship" />
                    <p className="portfolio__way">Mentorship</p>
                    <p className="portfolio__name">Tech Mentor</p>
                </div>
                <div className="portfolio__project">
                    <img className="portfolio__img" src={web} alt="Web Development" />
                    <p className="portfolio__way">Web Development</p>
                    <p className="portfolio__name">IdeaFlow</p>
                </div>
            </div>
        </section>
    )
}

export default Portfolio;