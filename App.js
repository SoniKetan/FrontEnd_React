import AllExpenses from "./Components/AllExpenses";
import "./App.css"

function App() {
  let expObjects = [
    {
      date: new Date(),
      name: "Car Insurance",
      amount: 2150,
      locationOfExp: 'raisen'
    },

    {
      date: new Date(),
      name: "Bike Insurance",
      amount: 1200,
      locationOfExp: 'kerala'
    },


    {
      date: new Date(),
      name: "Truck Insurance",
      amount: 2554,
      locationOfExp: 'hydrabad'
    },

    {
      date: new Date(),
      name: "Auto Insurance",
      amount: 3605,
      locationOfExp: 'mysure'
    }

  ]



  return <div>
    <h1 className="main_header"> Expense Tracker App </h1>
    <AllExpenses
      expDate={expObjects[0].date}
      expName={expObjects[0].name}
      expPrice={expObjects[0].amount}
      expLocation={expObjects[0].locationOfExp}
    ></AllExpenses>

    <AllExpenses
      expDate={expObjects[1].date}
      expName={expObjects[1].name}
      expPrice={expObjects[1].amount}
      expLocation={expObjects[1].locationOfExp}
    ></AllExpenses>

    <AllExpenses
      expDate={expObjects[2].date}
      expName={expObjects[2].name}
      expPrice={expObjects[2].amount}
      expLocation={expObjects[2].locationOfExp}
    ></AllExpenses>

    <AllExpenses
      expDate={expObjects[3].date}
      expName={expObjects[3].name}
      expPrice={expObjects[3].amount}
      expLocation={expObjects[3].locationOfExp}
    ></AllExpenses>
  </div>
}

export default App;