import ProductItem from '../Product/ProductItem';
import {  useEffect, useState } from 'react';

import classes from './BorokForm.module.css';

const dummy_borok = [
    {
        id: 'bp1',
        price: 6,
        name: 'Kékfrankos',
        description: 'Sopron',
    },
    {
        id: 'bp2',
        price: 5,
        name: 'Merlot',
        description: 'Eger',
    },
  ];
  

const BorokForm = (props) => {

    const [borok, setBorok] = useState(dummy_borok);

    const fetchborokHandler = async () =>{
        try{
            const response = await fetch('https://react-2022-10-default-rtdb.europe-west1.firebasedatabase.app/Borok.json');
            if(!response.ok)
            {
                throw new Error('Request failed');
            }
            const data = await response.json();
            const transformboroks = data.map((bor)=>{
                return {
                    id: bor.id,
                    name:bor.name,
                    description: bor.description,
                    price: bor.price,
                };
            });
            setBorok(transformboroks);
        }catch (e){
            alert("Hiba a rendszerben \n"+e.message);
        }
    };

    useEffect(()=>{
        fetchborokHandler();
    },[])

    return (
        <section className={classes.products}>
            <h2>Borok</h2>
            <ul>
            {borok.map((product) => (
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

export default BorokForm;