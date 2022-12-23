
const ConnectionItem = (props) => {
    return (
        <div  className={props.className}>
            <ul>
                <li>Italia, Monte della Fortezza 645.</li>
                <li>info@reactorestaurant.it
                    +39 11 1123 456</li>
                <li>Nyitva tartás:
                    Hétfő-Kedd: 11:00-14:00</li>
                <li>Szerda-Szombat: 11:00-22:00</li>
                <li>Vasárnap: zárva</li>       
            </ul>
        </div>
    );
}
export default ConnectionItem;