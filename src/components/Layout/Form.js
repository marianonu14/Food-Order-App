import { useRef, useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import './Form.css'

const Form = (props) => {
    const userInput = useRef(null);
    const passwordInput = useRef(null);
    const [validUser, setValidUser ] = useState(false)
    const [validPassword, setValidPassword ] = useState(false)

    const validationUser = () => {
        const userValue = userInput.current.value.trim();
        if (userValue.includes('@')){
            setValidUser(true) 
        } else {
            setValidUser(false)   
        }
    }

    const validationPassword = () => {
        const passValue = passwordInput.current.value.trim();
        if (passValue.length > 6 ){
            setValidPassword(true) 
        } else {
            setValidPassword(false)  
        }     
    }

    const test = (e) => {
        e.preventDefault()

        if (validUser && validPassword){
            props.onValidation();
        } else {
            console.log('Invalid')
        }

    }

    return ( 
        <Card class={'card-form'}>
            <h1 className="form-title">ACCOUNT LOGIN<span class="material-symbols-outlined">person</span></h1>
            <form>
                <label htmlFor="userEmail">Email:<span>*</span></label>
                <input
                className={validUser ? "validInput" : "invalidInput"}
                type="text" 
                id="userEmail" 
                ref={userInput}
                onBlur={validationUser} 
                />
                <label htmlFor="userPassword">Password:<span>*</span></label>
                <input 
                className={validPassword ? "validInput" : "invalidInput"}
                type="password" 
                id="userPassword"
                ref={passwordInput}
                onBlur={validationPassword} 
                />
                <Button 
                title={'Start Now !'} 
                onClick={test}
                />
            </form>
        </Card>
     );
}
 
export default Form;