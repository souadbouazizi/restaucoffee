import React from "react";
import './menu.css';
import {Card, CardBody, CardText, CardTitle} from 'react-bootstrap';
import BreakftPhoto from '../user/img/breackfast.png';
import LunchPhoto from '../user/img/salade2.png';
import DinnerPhoto from '../user/img/plat4.png';
import DessertPhoto from '../user/img/dessert4.png';
import Jucephoto from '../user/img/jus1.jpg'



const breackfast = [
    {
    id: 1,
    name : 'Breackfast',
    description : 'bread, juce, eggs, fruits, milk, cheese, jam, cherry, Orange, peach',
    price: '12$'
},
{
    id: 2,
    name : 'Breackfast',
    description : 'Southwest-style egg substitute, feta cheese, whole wheat tortillas',
    price: '15$'
},
{
    id: 3,
    name : 'Breackfast',
    description : 'Whipped cream cheese, sourdough, orange marmalade, eggs',
    price: '11$'
},
{
    id: 4,
    name : 'Breackfast',
    description : 'Plain Greek yogurt, almond butter, granola with fruit and nuts',
    price: '14$'
}
];
const Lunch = [
    {
        id: 1,
        name : 'Salade vert',
        description : 'Tomatoes, Cucumbers, Bell peppers (green or red), Red onion (or spring onions), Radishes, Fresh parsley, Fresh mint (optional), Black olives, Tuna ',
        price: '12$'
    },
    {
        id: 2,
        name : 'Salade Michwiya',
        description : 'Green bell peppers, Tomatoes, Onions, Garlic cloves, Hot chili peppers (optional, for spiciness), Olive oil, Lemon juice, Salt, Black pepper,',
        price: '15$'
    },
    {
        id: 3,
        name : 'Salade Blanquite',
        description : 'Potatoes (boiled and cubed), Tuna (canned in oil or water), Hard-boiled eggs (optional, for garnish), Capers (optional), Black olives ',
        price: '11$'
    },
    {
        id: 4,
        name : 'Caesar Salad',
        description : 'Romaine lettuce, Croutons, Parmesan cheese (shaved or grated), Caesar dressing , Grilled chicken (optional), Anchovies (optional, for garnish), Black pepper',
        price: '14$'
    }
]
const Dinner = [
    {
        id: 1,
        name : 'Couscous',
        description : 'Couscous (semolina wheat), Olive oil, Water or broth (vegetable, chicken, or lamb), Meat (lamb, chicken, or beef), Vegetables ',
        price: '12$'
    },
    {
        id: 2,
        name : 'spaghetti',
        description : 'Spaghetti (pasta), Olive oil, Garlic (optional, for flavor), Onion (optional, for flavor), Tomatoes , Tomato paste, Ground meat, Basil ',
        price: '15$'
    },
    {
        id: 3,
        name : 'Marga Jelbana',
        description : 'Green beans (trimmed and cut), Olive oil, Onion (chopped), Garlic (minced), Tomatoes, Tomato paste , Ground meat, Chickpeas, Carrots, Potatoes, Spices ',
        price: '11$'
    },
    {
        id: 4,
        name : 'Ruz Jerbi',
        description : 'Rice (typically long-grain or basmati), Olive oil or butter, Onion (chopped), Garlic , Salt, Black pepper, Fresh parsley or coriander, Water or broth (for cooking the rice)',
        price: '14$'
    }
]

const Dessert = [
    {
        id: 1,
        name : 'Zgougou',
        description : 'Pine nuts (soaked and ground), Sugar, Water, Rosewater (optional, for flavor), Cinnamon (optional, for garnish)',
        price: '12$'
    },
    {
        id: 2,
        name : 'Jwajem',
        description : 'Fruit (choose a variety, such as):Apples (peeled, cored, and diced), Oranges (peeled and segmented),...',
        price: '15$'
    },
    {
        id: 3,
        name : 'Fruit Ice Cream',
        description : 'Fruit (choose your favorite, such as): Mango (peeled and chopped), Strawberries (hulled), Bananas...',
        price: '11$'
    },
    {
        id: 4,
        name : 'Fruit Salad Recipe',
        description : 'Fruit (choose a variety, such as): Apples (peeled, cored, and diced), Oranges, ...',
        price: '14$'
    }
]
const CafeDrinkJuce = [
    {
        id: 1,
        name : 'Tropical Fruit Punch',
        description : 'Pineapple juice, Orange juice, Mango juice, Lime juice, Simple syrup , Fresh fruit slices  for garnish, Ice cubes',
        price: '12$'
    },
    {
        id: 2,
        name : 'Berry Mojito',
        description : 'Fresh mint leaves, Lime juice, Simple syrup (sugar and water), Mixed berries , Sparkling water or soda, Ice cubes',
        price: '15$'
    },
    {
        id: 3,
        name : 'Citrus Sunrise',
        description : 'Orange juice, Grapefruit juice, Lemon juice, Grenadine syrup, Ice cubes, Orange slices and maraschino cherries (for garnish)',
        price: '11$'
    },
    {
        id: 4,
        name : 'Pineapple Coconut Cooler',
        description : 'Pineapple juice, Coconut water, Lime juice, Simple syrup (sugar and water), Fresh pineapple chunks (for garnish), Mint leaves (for garnish), Ice cubes',
        price: '14$'
    }
]





function Menu(){
        return(
            <div>
            <div className='container my-5 text-center'>

                <h2 className='mb-5'>Menu</h2>

            </div>

<div className='breakfast bg-light text-dark py-5 text-center'>
    <div className='container flex-column-reserve flex-md-row align-items-center'>
        <div className='row align-items-center'>
        <div className='col-md-6'>
                        <img src={BreakftPhoto} className='w-75 mt-4 border rounded border-4 border-dark' alt='restau coffee breackfast' style={{ maxWidth: '100%', height: 'auto' }}/>
                    </div>
                    <div className='col-md-6 flex-column'>
                        <h3 className='text-center text-warning fw-bold'> Breackfast</h3>
                        {breackfast.map((breackfast) =>(
                            <div key={breackfast.id}>
                                <Card className='border-0'>
                                    <CardBody>
                                        <CardTitle className='text-center fs-3'>
                                            {breackfast.name}
                                        </CardTitle>
                                        <CardText className='small'>
                                            {breackfast.description}
                                        </CardText>
                                        <CardText className='tex-center fs-3 text-warning fw-bold'>
                                            {breackfast.price}
                                        </CardText>
                                    </CardBody>

                                </Card>
                            </div>

                        ))}


                    </div>
        </div>

    </div>
    
</div>

<div className='Lunch bg-dark text-light py-5 text-center'>
    <div className='container flex-column-reserve flex-md-row align-items-center'>
        <div className='row align-items-center'>
            
        <div className='col-md-6 flex-column'>
                    <h3 className='text-center text-warning fw-bold'> Lunch</h3>
                        {Lunch.map((Lunch) =>(
                            <div key={Lunch.id}>
                                <Card className='border-0'>
                                    <CardBody>
                                        <CardTitle className='text-center fs-3'>
                                            {Lunch.name}
                                        </CardTitle>
                                        <CardText className='small'>
                                            {Lunch.description}
                                        </CardText>
                                        <CardText className='tex-center fs-3 text-warning fw-bold'>
                                            {Lunch.price}
                                        </CardText>
                                    </CardBody>

                                </Card>
                            </div>

                        ))}


                    </div>
                    <div className='col-md-6'>
                        <img src={LunchPhoto} className='w-75 mt-4 border rounded border-4 border-dark' alt='restau coffee breackfast' style={{ maxWidth: '100%', height: 'auto' }}/>
                    </div>
        </div>

    </div>
    
</div>



<div className='Dinner bg-light text-dark py-5 text-center'>
    <div className='container flex-column-reserve flex-md-row align-items-center'>
        <div className='row align-items-center'>
        <div className='col-md-6'>
                        <img src={DinnerPhoto} className='w-75 mt-4 border rounded border-4 border-dark' alt='restau coffee breackfast' style={{ maxWidth: '100%', height: 'auto' }}/>
                    </div>
                    <div className='col-md-6 flex-column'>
                    <h3 className='text-center text-warning fw-bold'> Dinner</h3>
                        {Dinner.map((Dinner) =>(
                            <div key={Dinner.id}>
                                <Card className='border-0'>
                                    <CardBody>
                                        <CardTitle className='text-center fs-3'>
                                            {Dinner.name}
                                        </CardTitle>
                                        <CardText className='small'>
                                            {Dinner.description}
                                        </CardText>
                                        <CardText className='tex-center fs-3 text-warning fw-bold'>
                                            {Dinner.price}
                                        </CardText>
                                    </CardBody>

                                </Card>
                            </div>

                        ))}


                    </div> 
        </div>

    </div>
    
</div>
<div className='Dessert bg-dark text-light py-5 text-center'>
    <div className='container flex-column-reserve flex-md-row align-items-center'>
        <div className='row align-items-center'>
        <div className='col-md-6 flex-column'>
                    <h3 className='text-center text-warning fw-bold'>Dessert</h3>
                        {Dessert.map((Dessert) =>(
                            <div key={Dessert.id}>
                                <Card className='border-0'>
                                    <CardBody>
                                        <CardTitle className='text-center fs-3'>
                                            {Dessert.name}
                                        </CardTitle>
                                        <CardText className='small'>
                                            {Dessert.description}
                                        </CardText>
                                        <CardText className='tex-center fs-3 text-warning fw-bold'>
                                            {Dessert.price}
                                        </CardText>
                                    </CardBody>

                                </Card>
                            </div>

                        ))}


                    </div> 
                    <div className='col-md-6'>
                        <img src={DessertPhoto} className='w-75 mt-4 border rounded border-4 border-dark' alt='restau coffee breackfast' style={{ maxWidth: '100%', height: 'auto' }}/>
                    </div>

        </div>

    </div>
    
</div>
<div className='Coffe bg-light text-dark py-5 text-center'>
    <div className='container flex-column-reserve flex-md-row align-items-center'>
        <div className='row align-items-center'>
        <div className='col-md-6'>
                        <img src={Jucephoto} className='w-75 mt-4 border rounded border-4 border-dark' alt='restau coffee breackfast' style={{ maxWidth: '100%', height: 'auto' }}/>
                    </div>
                    <div className='col-md-6 flex-column'>
                    <h3 className='text-center text-warning fw-bold'> Cafe Drink & Juice</h3>
                        {CafeDrinkJuce.map((CafeDrinkJuce) =>(
                            <div key={CafeDrinkJuce.id}>
                                <Card className='border-0'>
                                    <CardBody>
                                        <CardTitle className='text-center fs-3'>
                                            {CafeDrinkJuce.name}
                                        </CardTitle>
                                        <CardText className='small'>
                                            {CafeDrinkJuce.description}
                                        </CardText>
                                        <CardText className='tex-center fs-3 text-warning fw-bold'>
                                            {CafeDrinkJuce.price}
                                        </CardText>
                                    </CardBody>

                                </Card>
                            </div>

                        ))}


                    </div> 
        </div>

    </div>
    
</div>

</div>




        )
}
export default Menu;