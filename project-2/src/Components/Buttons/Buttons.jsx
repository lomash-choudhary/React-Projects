import { MdMessage } from "react-icons/md"
import styles from "./Buttons.module.css";
export const Button = ({text, icon, outline, ...rest}) => {
    return <>
    <button {...rest} className={outline ? styles.outlineBtn : styles.primaryBtn}>
        {icon}
        {text}
    </button>
    </>
}