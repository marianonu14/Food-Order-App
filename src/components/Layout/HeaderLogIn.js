import Button from '../UI/Button'
import './Header.css'

const Header = (props) => {
    const iconLogOut = <span class="material-symbols-outlined">logout</span>
    const iconCart = <span class="material-symbols-outlined">shopping_cart</span>

    const cartFunction = () => {
        console.log('Estamos en vivo')
    }
    
    return ( 
    <header className="header">
        <nav>
            <ul className='navbar'>
                <li className='navbar-logo'></li>
                <li className='navbar-button-auth'>
                    <Button 
                    title={'LogOut'} 
                    onClick={props.onLogOut} 
                    icon={iconLogOut} />
                    <Button 
                    title={'Cart'} 
                    onClick={cartFunction} 
                    icon={iconCart} />
                </li>
            </ul>
        </nav>
    </header>
     );
}
 
export default Header;