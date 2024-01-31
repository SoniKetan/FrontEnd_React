import "./AllExpenses.css";
import ExpDates from "./ExpDates";
import ExpenseDetails from "./ExpenseDetails";


// function AllExpenses(props) {

//     // let expDate = new Date();
//     // let expName = "Car Insurance";
//     // let expPrice = 254;

//     return <div className="exp_item">
//         <div> {props.expDate.toLocaleDateString()} </div>
//         <div className="exp_location"> {props.expLocation} </div>
//         <div className="exp_item_description">
//             <h2> {props.expName} </h2>
//         </div>
//         <div className="exp_item_price"> {props.expPrice} </div>
//     </div>
// }

// export default AllExpenses;





// function AllExpenses(props) {

//     const month = props.expDate.toLocaleDateString('en-US', { month: 'long' });

//     const day = props.expDate.toLocaleDateString('en-US', { day: '2-digit' });

//     const year = props.expDate.getFullYear();

//     return <div className="exp_item">
//         <div> {month} </div>
//         <div> {day} </div>
//         <div> {year} </div>
//         <div className="exp_location"> {props.expLocation} </div>
//         <div className="exp_item_description">
//             <h2> {props.expName} </h2>
//         </div>
//         <div className="exp_item_price"> {props.expPrice} </div>
//     </div>
// }

// export default AllExpenses;






// function AllExpenses(props) {

//     return <div className="exp_item">

//         <ExpDates expDateABC={props.expDate}></ExpDates>

//         <div className="exp_location"> {props.expLocation} </div>

//         <div className="exp_item_description">
//             <h2> {props.expName} </h2>
//         </div>

//         <ExpenseDetails expPriceABC={props.expPrice}></ExpenseDetails>



//     </div>
// }

// export default AllExpenses;






function AllExpenses(props) {

    return <div className="exp_item">

        <ExpDates expDateABC={props.expDate}></ExpDates>



        <div className="exp_item_description">
            <h2> {props.expName} </h2>
        </div>

        <ExpenseDetails expPriceABC={props.expPrice} expLocationABC={props.expLocation} >
        </ExpenseDetails>



    </div>
}

export default AllExpenses;