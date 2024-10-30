import styles from "./Navigation.module.css"
export const Navigation = () => {
    return <nav className={`${styles.navigation} container`}>
        <div className="logo">
            <img src = "images/navimg.png" />
        </div>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
}