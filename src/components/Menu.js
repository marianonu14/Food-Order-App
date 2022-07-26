import Card from "./UI/Card";

const dishesDb = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

const Menu = () => {

    return ( 
        <Card class={'card'}>
            <h1>Our Dishes</h1>
            <ul>
                {dishesDb.map(elem => <li key={elem.id}>{elem.title}</li>)}
            </ul>
        </Card>
     );
}
 
export default Menu;