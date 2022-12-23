import Card from "../../UI/Card";
import classes from "./Box.module.css";
const Menus = (props) => {

    return (
        <div className={props.className}>
            <div>
                <h1>Alacarte</h1>
                <Card>
                    <div className={classes.jobb}>
                        <img src={require("../../../assets/offers/menu.jpg")} alt="Menu" />
                    </div>
                </Card>
                <Card>
                    <div className={classes.jobb}>
                        <img src={require("../../../assets/offers/menu.jpg")} alt="Menu" />
                    </div>
                </Card>
            </div>
        </div>
    );
}

export default Menus;