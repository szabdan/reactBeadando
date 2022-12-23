import Menus from "./Menus";
import Offers from "./Offers";

import classes from "./Opportunities.module.css";

const Opportunities = (props) => {

    return (
        <div className={classes.opportunities}>
            <Offers className={classes.cart}/>
            <Menus className={classes.cart}/>
        </div>
    )
}
export default Opportunities;