
import classes from "./Map.module.css";

const Map = (props) => {
    return (
        <div className={props.className}>
            <div className={classes.mapouter}>
                <div className={classes.gmap_canvas}>
                    <iframe className={classes.gmap_iframe} frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" src="https://maps.google.com/maps?width=500&amp;height=500&amp;hl=en&amp;q=42.329652482615266, 10.307934314184989&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
                </div>
            </div>
        </div>
    );
}

export default Map;

