
import Card from "../../UI/Card";
import { Link } from "react-router-dom";
import classes from "./Box.module.css";
import pizza from "../../../assets/offers/pizza.png";
import wine from "../../../assets/offers/wine.png";
import drinks from "../../../assets/offers/drinks.png";

const Offers = (props) => {

    return (
        <div className={props.className}>
            <div>
                <h1>Ajánlatok</h1>
                <Link to='/pizza'>
                    <Card>
                        <div className={classes.bal}>
                            <img src={pizza} alt="Pizza" />
                            <p>Pizza</p>
                        </div>
                    </Card>
                </Link>
                <Link to='/borok'>
                    <Card>
                        <div className={classes.bal}>
                            <img src={wine} alt="Borok" />
                            <p>Borok</p>
                        </div>
                    </Card>
                </Link>
                <Link to='/koktelok'>
                    <Card>
                        <div className={classes.bal}>
                            <img src={drinks} alt="Koktélok" />
                            <p>Koktélok</p>
                        </div>
                    </Card>
                </Link>

            </div>
        </div>
    );
}

export default Offers;