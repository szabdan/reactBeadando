import ProductItem from '../Product/ProductItem';
import {  useEffect, useState } from 'react';

import classes from './KoktelokForm.module.css';

const dummy_koktelok= [
    {
        id: "kp1",
        price: 12,
        name: "Sex on the beach",
        description: "hozzávalók"
    },
	{
        id: "kp2",
        price: 16,
        name: "Manhattan",
        description: "hozzávalók"
    },
  ];
  

const KoktelokForm = (props) => {

    const [koktelok, setKoktelok] = useState(dummy_koktelok);

    const fetchKoktelokHandler = async () =>{
        try{
            const response = await fetch('https://react-2022-10-default-rtdb.europe-west1.firebasedatabase.app/Koktelok.json');
            if(!response.ok)
            {
                throw new Error('Request failed');
            }
            const data = await response.json();
            const transformKoktelok = data.map((koktel)=>{
                return {
                    id: koktel.id,
                    name:koktel.name,
                    description: koktel.description,
                    price: koktel.price,
                };
            });
            setKoktelok(transformKoktelok);
        }catch (e){
            alert("Hiba a rendszerben \n"+e.message);
        }
    };

    useEffect(()=>{
        fetchKoktelokHandler();
    },[])

    return (
        <section className={classes.products}>
            <h2>Koktélok</h2>
            <ul>
            {koktelok.map((product) => (
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

export default KoktelokForm;