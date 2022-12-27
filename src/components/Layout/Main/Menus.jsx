import Card from "../../UI/Card";
import classes from "./Box.module.css";
import menu from "../../../assets/offers/menu.jpg";
const Menus = (props) => {

    return (
        <div className={props.className}>
            <div>
                <h1>Alacarte</h1>
                <Card>
                    <div className={classes.jobb}>
                        <img src={menu} alt="Menu" />
                    </div>
                </Card>
                <Card>
                    <div className={classes.jobb}>
                        <img src={menu} alt="Menu" />
                    </div>
                </Card>
            </div>
        </div>
    );
}

export default Menus;