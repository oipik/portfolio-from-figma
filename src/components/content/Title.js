import "./title.scss";

const Title = ({title, style}) => {
    return (
        <h2 className="title" style={style ? style : null}>{title}</h2>
    )
}

export default Title;