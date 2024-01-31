import "./ExpenseDetails.css"

function ExpenseDetails(props) {
    return <div>
        <div className="exp_item_price">
            <div> ₹  {props.expPriceABC} </div>
        </div>

        <div className="exp_location"> {props.expLocationABC} </div>
    </div>
}


export default ExpenseDetails;