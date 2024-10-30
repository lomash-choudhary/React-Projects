import { useState } from "react"
import { Button } from "../Buttons/Buttons"
import styles from "./ContactForm.module.css"
import { MdMessage, MdCall, MdEmail } from "react-icons/md"
export const ContactForm = () => {
    let [name, setName] = useState("");
    let[email, setEmail] = useState("");
    let [text, setText] = useState("");
    const onSubmit = (event) => {
        event.preventDefault()
        setName(event.target[0].value);
        setEmail(event.target[1].value);
        setText(event.target[2].value);
    }

    const viaCall = () => {
        console.log("I am from call");
    }
    const viaChat = () => {
        console.log("I am from chat");
    }
    const viaEmail = () => {
        console.log("I am from Email");
    }
    return <section className={styles.container}>
        <div className={styles.contactForm}>
            <div className={styles.topBtn}>
            <Button  onClick={viaChat} text={"VIA SUPPORT CHAT"} icon={<MdMessage style={{fontSize:"24px"}}/>}/>
            <Button onClick={viaCall} text={"VIA CALL"} icon={<MdCall style={{fontSize:"24px"}}/>}/>
            </div>
            <Button onClick={viaEmail} text={"VIA EMAIL FORM"} icon={<MdEmail style={{fontSize:"24px"}}/>} outline={true}/>
            <form onSubmit={onSubmit}>
                <div className={styles.formController}>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" />
                </div>
                <div className={styles.formController}>
                <label htmlFor="Email">Email</label>
                <input type="email" name="Email" />
                </div>
                <div className={styles.formText}>
                <label htmlFor="text">TEXT</label>
                <input name="text" rows="8" />
                </div>
                <div style={{display:"flex", justifyContent:"end"}}>
                <Button text={"SUBMIT"}/>
                </div>
                <div>
                    {name && email && text && (
                        <div>
                            <p>Name : {name}</p>
                            <p>Email : {email}</p>
                            <p>Text : {text}</p>
                        </div>
                    )}
                </div>
            </form>
        </div>
        <div className={styles.contactImage}>
            <img src = "./images/secondimg.svg" />
        </div>
    </section>
}