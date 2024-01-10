import Title from "../Title";

import "./resume.scss";

const Resume = () => {
    return (
        <section className="resume">
            <div className="resume__inner">
                <Title title={"Resume"} />
                <div className="resume__subtitles">
                    <h4 className="resume__subtitle">Education</h4>
                    <h4 className="resume__subtitle">Experience</h4>
                </div>
                <div className="resume__history">
                    <div className="resume__item">
                        <p className="resume__date">2020-2021</p>
                        <p className="resume__pos">Software Development</p>
                        <p className="resume__text">Moringa School</p>
                    </div>
                    <div className="resume__item lighter">
                        <p className="resume__date">2020-2021</p>
                        <p className="resume__pos">Software Development</p>
                        <p className="resume__text">Moringa School</p>
                    </div>
                    <div className="resume__item lighter">
                        <p className="resume__date">2012-2016</p>
                        <p className="resume__pos">Disaster Management</p>
                        <p className="resume__text">Masinde Muliro Universiity</p>
                    </div>
                    <div className="resume__item">
                        <p className="resume__date">2021-2022</p>
                        <p className="resume__pos">Website Development</p>
                        <p className="resume__text">Village 2 Nation</p>
                    </div>
                </div>
            </div>
            <div className="resume__skills">
                <div className="resume__hard">
                    <h4 className="resume__hard--title">Work Skills</h4>
                    <ul className="resume__list">
                        <li className="resume__list--item">NEXT.js</li>
                        <li className="resume__list--item">React.js</li>
                        <li className="resume__list--item">HTML5</li>
                        <li className="resume__list--item">CSS3</li>
                        <li className="resume__list--item">Tailwind CSS</li>
                        <li className="resume__list--item">Figma</li>
                        <li className="resume__list--item">JavaScript</li>
                        <li className="resume__list--item">Mongo DB</li>
                        <li className="resume__list--item">SQL</li>
                        <li className="resume__list--item">Angular</li>
                        <li className="resume__list--item">Android</li>
                        <li className="resume__list--item">Git</li>
                    </ul>
                </div>
                <div className="resume__soft">
                    <h4 className="resume__hard--title">Work Skills</h4>
                    <ul className="resume__list resume__list--soft">
                        <li className="resume__list--item">Time Management</li>
                        <li className="resume__list--item">Mentorship</li>
                        <li className="resume__list--item">Impeccable Communication</li>
                        <li className="resume__list--item">Flexibility</li>
                        <li className="resume__list--item">Research</li>
                        <li className="resume__list--item">Writing</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Resume;