
import googleicon from "../../../assets/icons/googleIcon.png";
import twittericon from "../../../assets/icons/twitterIcon.png";
import facebookicon from "../../../assets/icons/facebookIcon.png";
import opinionicon from "../../../assets/icons/opinionIcon.png";

import classes from "./Footer.module.css";

const Footer = () => {
    return (
        <div className={classes.footer}>
            <img className={classes.img} src={googleicon} alt="Google" />
            Google
            <img className={classes.img} src={facebookicon} alt="Facebook" />
            Facebook
            <img className={classes.img} src={twittericon} alt="Twitter" />
            Twitter
            <img className={classes.img} src={opinionicon} alt="Opinion" />
            Vélemények
        </div>
    );
}

export default Footer;