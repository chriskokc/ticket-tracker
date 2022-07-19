import "./Button.scss";

const Button = ({ buttonText, isMinus, buttonFunction}) => {

    let buttonStyle = isMinus ? "button button__secondary" : "button button__primary";

    return (
        <button className={buttonStyle} onClick={buttonFunction}>{buttonText}</button>
    );
};

export default Button;