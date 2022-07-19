import "./Button.scss";

const Button = ({ buttonText, isMinus}) => {

    let buttonStyle = isMinus ? "button button__secondary" : "button button__primary";

    return (
        <button className={buttonStyle}>{buttonText}</button>
    );
};

export default Button;