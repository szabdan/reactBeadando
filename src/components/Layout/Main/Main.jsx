import Connection from './Connection';
import Gallery from './Gallery';
import Opportunities from './Opporunities'; 

import classes from './Main.module.css';


const Main = ()=>{

    return (
        <div className={classes.main}>
           <Opportunities className={classes.opportunities}/>
           <Gallery/>
           <Connection className={classes.opportunities}/>
        </div>
    );
}

export default Main;