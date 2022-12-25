
import Card from "../../UI/Card";
import { Link } from "react-router-dom";
import classes from "./Box.module.css";

const Offers = (props) => {

    return (
        <div className={props.className}>
            <div>
                <h1>Ajánlatok</h1>
                <Link to='/pizza'>
                    <Card>
                        <div className={classes.bal}>
                            <img src={require("../../../assets/offers/pizza.png")} alt="Pizza" />
                            <p>Pizza</p>
                        </div>
                    </Card>
                </Link>
                <Link to='/borok'>
                    <Card>
                        <div className={classes.bal}>
                            <img src={require("../../../assets/offers/wine.png")} alt="Borok" />
                            <p>Borok</p>
                        </div>
                    </Card>
                </Link>
                <Link to='/koktelok'>
                    <Card>
                        <div className={classes.bal}>
                            <img src={require("../../../assets/offers/drinks.png")} alt="Koktélok" />
                            <p>Koktélok</p>
                        </div>
                    </Card>
                </Link>

            </div>
        </div>
    );
}

export default Offers;