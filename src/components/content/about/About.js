import Title from "../Title";

import "./about.scss";

const About = () => {
    return (
        <section className="about">
            {/* <h2 className="about__title">ABOUT ME</h2> */}
            <Title title={"ABOUT ME"}/>
            <p className="about__me">
                Hello there! I'm thrilled to welcome you to my portfolio. I am a passionate and versatile
                full-stack developer with a keen interest in exploring the latest cutting-edge technologies.
                My journey in the world of web development has been nothing short of exhilarating, and
                I constantly strive to enhance my skills and embrace emerging trends in the industry.
            </p>
            <h3 className="about__subtitle">What do I do!</h3>
            <div className="about__ability">
                <div className="about__box">
                    <h4 className="about__box--title">Web Development</h4>
                    <p className="about__box--text">
                        As a developer, I find myself most captivated by the power and flexibility of NEXT.js. I'm always eager to dive into new projects that leverage NEXT.js and discover innovative ways to create fast, scalable, and user-friendly applications.
                    </p>
                </div>
                <div className="about__box lightblue">
                    <h4 className="about__box--title">App Development</h4>
                    <p className="about__box--text">
                        With a focus on user-centric design and cutting-edge technologies, I thrive on building intuitive and efficient apps that make a positive impact on people's lives. Let's turn ideas into reality and shape the future together.
                    </p>
                </div>
                <div className="about__box lightblue">
                    <h4 className="about__box--title">UI/UX Designing</h4>
                    <p className="about__box--text">
                        Crafting visually appealing and intuitive user interfaces that offer a delightful user experience is something I'm truly fanatic about.
                    </p>
                </div>
                <div className="about__box">
                    <h4 className="about__box--title">Mentorship</h4>
                    <p className="about__box--text">
                        I have also found great joy in sharing my knowledge with others. Being a technical mentor allows me to give back to the community that has supported me throughout my career.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default About;