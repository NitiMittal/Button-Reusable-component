import { ButtonContainer } from "./ButtonContainer";
import CartIcon from "../images/cart.svg";

interface ButtonProps {
  text: string;
  variant?: "default" | "outline" | "text";
  disabledButton?: boolean;
  disabledBoxShadow?: boolean;
  iconAlignment?: "left" | "right";
  size?: "sm" | "md" | "lg";
  buttonColor?: "default" | "primary" | "secondary" | "danger";
  hover?: boolean;
  hoverColor?: string;
}

const Button = ({
  text,
  variant,
  disabledButton,
  disabledBoxShadow,
  iconAlignment,
  size,
  buttonColor,
  hover,
  hoverColor,
}: ButtonProps) => {
  const variantName = variant || "default";

  const variantClass = `btn ${variantName}-btn `;
  const disabledClass = disabledButton ? "disabled" : "";
  const disabledShadow = disabledBoxShadow ? "disabled-shadow" : "";
  const buttonCol = buttonColor !== undefined ? `${buttonColor}-btn` : "";
  const btnSize = size !== undefined ? `${size}-btn` : "";

  return (
    <ButtonContainer hover={hover} hoverColor={hoverColor}>
      <button
        className={`${variantClass}${disabledClass}${disabledShadow}${buttonCol}${btnSize}`}
      >
        {iconAlignment === "left" && (
          <img src={CartIcon} alt="cart" className="left" />
        )}
        {text}
        {iconAlignment === "right" && (
          <img src={CartIcon} alt="cart" className="right" />
        )}
      </button>
    </ButtonContainer>
  );
};

export default Button;
