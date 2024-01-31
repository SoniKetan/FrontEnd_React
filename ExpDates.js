import "./ExpDates.css"

function ExpDates(props) {

    const month = props.expDateABC.toLocaleDateString('en-US', { month: 'long' });

    const day = props.expDateABC.toLocaleDateString('en-US', { day: '2-digit' });

    const year = props.expDateABC.getFullYear();

    return <div className="exp_Alldates">

        <div className="exp_month"> {month} </div>

        <div className="exp_year"> {year} </div>

        <div className="exp_day"> {day} </div>

    </div>
}

export default ExpDates;