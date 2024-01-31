import ListOfAllExp from "./Comp/ListOfAllExp";
import "./App.css"
function App() {

  let expObj = [
    {
      expName: "Food",
      expPrice: 250,
      expDate: new Date().getFullYear()
    },

    {
      expName: "Food",
      expPrice: 250,
      expDate: new Date().getFullYear()
    },


    {
      expName: "Food",
      expPrice: 250,
      expDate: new Date().getFullYear()
    }

  ]

  return <div>
    <h1 className="main-header"> Expense Items </h1>
    <ListOfAllExp
      expName={expObj[0].expName}
      expPrice={expObj[0].expPrice}
      expDate={expObj[0].expDate}>
    </ListOfAllExp>

    <ListOfAllExp
      expName={expObj[1].expName}
      expPrice={expObj[1].expPrice}
      expDate={expObj[1].expDate}>
    </ListOfAllExp>

    <ListOfAllExp
      expName={expObj[2].expName}
      expPrice={expObj[2].expPrice}
      expDate={expObj[2].expDate}>
    </ListOfAllExp>



  </div>
}

export default App;