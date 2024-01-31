import "./ListOfAllExp.css";

function ListOfAllExp(props) {

    return <div className="main-div">

        <div className="expDate"> {props.expDate} </div>
        <div className="expName"> {props.expName} </div>
        <div className="expPrice"> {props.expPrice} </div>

    </div>
}

export default ListOfAllExp;