import { useForm } from "react-hook-form";
import Title from "../Title";
import "./contact.scss";

const Contact = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = () => {
        reset();
    }

    return (
        <section className="contact">
            <Title title={"Contact"} style={{ "marginBottom": "20px" }} />
            <div className="contact__data">
                <div className="contact__phone">
                    <p className="contact__phone--text">Phone:</p>
                    <a className="contact__number" href="tel:+254723909353">+254723909353</a>
                    <a className="contact__number" href="tel:+254738509151">+254738509151</a>
                </div>
                <div className="contact__email">
                    <p className="contact__email--text">Email:</p>
                    <a className="contact__mailto" href="mailto:mail@htmlacademy.ru">beatricewambuimbugua@gmail.com</a>
                </div>
            </div>

            <form className="contact__form"
                onSubmit={handleSubmit(onSubmit)}>
                <p className="form__text">
                    I am always open to discussing <strong>new projects, opportunities in tech world, partnerships</strong> and more so <strong>mentorship.</strong>
                </p>
                <input
                    {...register("name", { required: true })}
                    className="form__input form__name"
                    type="text"
                    placeholder="Name" />
                <input
                    {...register("email", { required: true })}
                    className="form__input form__email"
                    type="text"
                    placeholder="Email" />
                <input
                    {...register("message", { required: true })}
                    className="form__input form__message"
                    type="text"
                    placeholder="Message" />
                <button className="form__btn">Submit</button>
            </form>
        </section >
    )
}

export default Contact;