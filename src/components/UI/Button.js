import './Button.css'

const Button = (props) => {
    return ( 
        <button className="button" onClick={props.onClick} >
            <div className='button-container'>
                {props.title}
                {props.icon}
            </div>
        </button>
     );
}
 
export default Button;