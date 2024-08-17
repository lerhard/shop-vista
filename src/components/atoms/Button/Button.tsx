import './style.css';
import {ButtonColors, ButtonStyle, ButtonTypes, ButtonVariants} from "@atoms/Button/ButtonEnums";

interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    type?: ButtonTypes;
    color?: ButtonColors
    style?: ButtonStyle;
    variant?: ButtonVariants;
    disabled?: boolean | undefined;
    id?: string;
    name?: string;
}

export const Button: React.FC<ButtonProps> = ({
                                                  children = '',
                                                  onClick,
                                                  type = ButtonTypes.Button,
                                                  color = ButtonColors.Primary,
                                                  style = ButtonStyle.Normal,
                                                  variant = ButtonVariants.Solid,
                                                    disabled = undefined,
                                                  id = undefined,
                                                  name=undefined
                                              }) => {
    return (
        <button id={id} name={name} type={`${type}`} className={`button ${style}  ${color} ${variant} ${disabled ? 'button--disabled' : ''}`}
                onClick={onClick} disabled={disabled}>{children}</button>
    );
}

