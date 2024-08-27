import '../styles/Button.css';

function Button({ text, isButtonClick, handleClick }) {
    return (
        <button className={isButtonClick ? "button-click": "restart-button"}
        onClick={handleClick}>
            {text}
        </button>
    )
}

export default Button;


