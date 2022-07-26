import Card from "./UI/Card";
import Button from "./UI/Button";
import './Form.css'

const Form = () => {
    const test = () => {
        console.log('click..')
    }

    return ( 
        <Card class={'card-form'}>
            <h1 className="form-title">ACCOUNT LOGIN</h1>
            <form>
                <label htmlFor="userEmail">Email:<span>*</span></label>
                <input type="text" id="userEmail" onBlur={test}/>
                <label htmlFor="userPassword">Password:<span>*</span></label>
                <input type="password" id="userPassword"/>
            </form>
            <Button title={'Start Now !'} onClick={test}/>
        </Card>
     );
}
 
export default Form;