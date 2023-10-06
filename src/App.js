
import React,{useState} from "react";
import './App.css';
import Header from "./MyComponents/Headers/Header";
import Navbar from "./MyComponents/Headers/Navbar";
import NewHeader from "./MyComponents/NewHeader/NewHeader";

// const App = () => {      // Arrow function
// // function App () {     // Normal function
//     const [expenses, setExpenses] = useState(Dummy_Expense);



    const DUMMY_EXPENSES  = [
        // {
        //     id: 'e1',
        //     title: 'Paper',
        //     amount: 94.12,
        //     date: new Date(2010, 11, 1),
        // },
        // {
        //     id: 'e2',
        //     title: 'book Paper',
        //     amount: 50.10,
        //     date: new Date(2010, 11, 1),
        // },
        // {
        //     id: 'e3',
        //     title: 'Car Insurance',
        //     amount: 294.67,
        //     date: new Date(2021, 2, 28),
        // },
        // {
        //     id: 'e4',
        //     title: 'New Desk (Wooden)',
        //     amount: 450,
        //     date: new Date(2021, 5, 12),
        // }, {
        //     id: 'e4',
        //     title: 'New Desk (Wooden)',
        //     amount: 450,
        //     date: new Date(2021, 5, 12),
        // },
    ];

const App = () => {      // Arrow function
// function App () {     // Normal function
    const [expenses, setExpenses] = useState(DUMMY_EXPENSES )
    const addExpenseHandler = (expense) => {
        setExpenses((prevExpenses) => {
        return [expense, ...prevExpenses];
        });
    };

   // return React.createElement(
   //     'div',
   //     {},
   //     React.createElement('h2',{},"lets React Project!"),
   //     React.createElement(Header,{items:expenses})
   // );
  return (
  <div>
      <Navbar></Navbar>
      <div className="container">
          {/*<h2> lets React Project!</h2>*/}
          <NewHeader onAddExpense = {addExpenseHandler}/>
      <Header items={expenses}></Header>
      </div>
  </div>
  );
}

export default App;

