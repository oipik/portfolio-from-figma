import Title from "../Title";

import "./resume.scss";

const Resume = () => {
    return (
        <section className="resume">
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
            </div>
        </section>
    )
}

export default Resume;