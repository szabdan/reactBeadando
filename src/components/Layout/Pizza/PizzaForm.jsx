import ProductItem from './ProductItem';
import classes from './PizzaForm.module.css';
import {  useEffect, useState } from 'react';

const dummy_pizza = [
    {
        id: 'p1',
        price: 6,
        name: 'Magyaros Pizza',
        description: 'paradicsom szósz, kolbász, hagyma, erős paprika, sajt',
    },
    {
        id: 'p2',
        price: 5,
        name: 'Gombás-sonkás pizza',
        description: 'paradicsom szósz, sonka, hagyma, gomba, kukorica, sajt',
    },
  ];
  

const PizzaForm = (props) => {

    const [pizzas, setPizzas] = useState(dummy_pizza);

    const fetchPizzaHandler = async () =>{
        try{
            const response = await fetch('https://react-2022-10-default-rtdb.europe-west1.firebasedatabase.app/Pizzas.json');
            if(!response.ok)
            {
                throw new Error('Request failed');
            }
            const data = await response.json();
            const transformPizzas = data.map((pizza)=>{
                return {
                    id: pizza.id,
                    name:pizza.name,
                    description: pizza.description,
                    price: pizza.price,
                };
            });
            setPizzas(transformPizzas);
        }catch (e){
            alert("Hiba a rendszerben \n"+e.message);
        }
    };

    useEffect(()=>{
        fetchPizzaHandler();
    },[])

    return (
        <section className={classes.products}>
            <h2>Pizza</h2>
            <ul>
            {pizzas.map((product) => (
                    <ProductItem
                        key={product.id}
                        id={product.id}
                        name={product.name}
                        price={product.price}
                        description={product.description}
                    />
                ))}
            </ul>
        </section>
    );
}

export default PizzaForm;