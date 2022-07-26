import Button from '../UI/Button'
import './Header.css'

const Header = (props) => {
    const icon = <span class="material-symbols-outlined">login</span>

    return ( 
    <header className="header">
        <nav>
            <ul className='navbar'>
                <li className='navbar-logo'></li>
                <li className='navbar-button'><Button title={`Log In`} onClick={props.onLogIn} icon={icon}/></li>
            </ul>
        </nav>
    </header>
     );
}
 
export default Header;