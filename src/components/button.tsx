import ArrowSec from "../icons/arrow-sec.tsx";
import ArrowPri from "../icons/arrow-pri.tsx";

export interface ButtonProps {
    variant?: "primary" | "secondary" | "light" | "outline";
    text: string;
    type?: "submit" | "button";
    href?: string;
    onClick?: () => void;
}

const Button = (props : ButtonProps) => {
    const {
        variant = "primary",
        text = "Default Text",
        type = "button",
        href,
        onClick
    } = props;

    const defaultStyles = "rounded-[18px] flex items-center justify-center gap-[9px] w-fit text-base lg:t" +
            "ext-lg font-semibold leading-snug tracking-tight px-10 py-5 md:px-[54px] md:py" +
            "-[26px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-of" +
            "fset-2 transition-colors duration-300";

    let bgClass = "";
    let textColor = "text-white";
    let arrowComponent = variant === "primary"
        ? <ArrowSec/>
        : <ArrowPri/>;
    let outlineClass = "";

    switch (variant) {
        case "primary":
            bgClass = "bg-primary-200 hover:bg-primary-200/90 focus-visible:outline-primary-200";
            break;
        case "secondary":
            bgClass = "bg-primary-100 hover:bg-primary-100/90 focus-visible:outline-primary-100";
            break;
        case "light":
            bgClass = "bg-primary-100 hover:bg-primary-300 focus-visible:outline-white";
            textColor = "text-text-blue";
            arrowComponent = <ArrowPri/>;
            break;
        case "outline":
            bgClass = "bg-transparent hover:bg-white/10 focus-visible:outline-white";
            outlineClass = "border-2 border-white";
            arrowComponent = <ArrowSec/>;
            break;
        default:
            bgClass = "bg-primary-200 hover:bg-primary-200/90 focus-visible:outline-primary-200";
    }

    const className = `${defaultStyles} ${bgClass} ${textColor} ${outlineClass}`;

    // Jeśli podano href, renderuj link
    if (href) {
        return (
            <a href={href} className={className}>
                {text}
                {arrowComponent}
            </a>
        );
    }

    // W przeciwnym razie renderuj przycisk
    return (
        <button className={className} type={type} onClick={onClick}>
            {text}
            {arrowComponent}
        </button>
    );
};

export default Button;