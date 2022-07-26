import Card from './UI/Card';
import Button from './UI/Button';

const Main = (props) => {
    return ( 
        <Card class={'card'}>
            <h1>Food Delivery and Takeout</h1>
            <p>From sushi restaurants to the burgers and fries you crave, you can choose from over 300,000 local and national favorites in the United States, Canada and Australia.</p>
            <p>Receive orders at your door. Or try the takeout orders on the way home. Lunchtime is when you want.</p>
            <p>Incredibly colorful, powerful meals to get you out of the kitchen and enjoying summer.</p>
            <Button title="Order Now !" onClick={props.onLogIn}/>
        </Card>  
     );
}
 
export default Main;