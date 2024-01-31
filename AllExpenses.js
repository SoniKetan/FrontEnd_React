import "./AllExpenses.css"



function ALlExpenses(props) {

    // let expDate = new Date();
    // let expName = "Car Insurance";
    // let expPrice = 254;

    return <div className="exp_item">
        <div> {props.expDate.toLocaleDateString()} </div>
        <div className="exp_location"> {props.expLocation} </div>
        <div className="exp_item_description">
            <h2> {props.expName} </h2>
        </div>
        <div className="exp_item_price"> {props.expPrice} </div>
    </div>
}

export default ALlExpenses;