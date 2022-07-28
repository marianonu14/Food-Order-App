import Button from '../UI/Button'
import './Header.css'

const Header = (props) => {
    const icon = <span class="material-symbols-outlined">login</span>
    const icon2 = <span class="material-symbols-outlined">undo</span>

    return ( 
    <header className="header">
        <nav>
            <ul className='navbar'>
                <li className='navbar-logo'></li>
                <li className='navbar-button'>
                    <Button 
                    title={props.onLoginState ? `Main` : 'LogIn'} 
                    onClick={props.onLogIn} 
                    icon={props.onLoginState ? icon2 : icon}/>
                </li>
            </ul>
        </nav>
    </header>
     );
}
 
export default Header;