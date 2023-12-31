import React from "react";
import './HeaderForm.css'
import {useState} from "react";
const HeaderForm = (props) =>{

   const [enteredTitle,  setEnteredTitle] = useState('');
   const [enteredAmount,  setEnteredAmount] = useState('');
   const [enteredDate,  setEnteredDate] = useState('');
    const titleChangeHandler =(event) => {
      // console.log(event.target.value);
      setEnteredTitle(event.target.value);
    };
    const amountChangeHandler =(event) => {
      setEnteredAmount(event.target.value);
    };
    const dateChangeHandler =(event) => {
      setEnteredDate(event.target.value);
    };

   const submitHandler=(event)=>{
       event.preventDefault();
       const expenseData = {
           title: enteredTitle,
           amount: enteredAmount,
           date: new Date(enteredDate)
       };

           // console.log(expenseData);
       props.onSaveExpenseData(expenseData);
           setEnteredTitle('');
           setEnteredAmount('');
           setEnteredDate('');
   };


return(
    <form onSubmit={submitHandler}>
        {/*...*/}
        <div className="new-expense__controls ">
            <div className="new-expense__control">
                <label>Title</label>
                <input
                       type="text"
                       placeholder="Title"
                       value={enteredTitle}
                       onChange={titleChangeHandler}/>
            </div>

            <div className="new-expense__control">
                <label>Amount</label>
                <input type="number"
                       placeholder="Amount"
                       value={enteredAmount}
                       onChange={amountChangeHandler}/>
            </div>

            <div className="new-expense__control">
                <label>Date</label>
                <input type="date"
                       min="2019-01-01"
                       max="2022-12-31"
                       value={enteredDate}
                       onChange={dateChangeHandler}/>
            </div>
        </div>
        <div className="new-expense__actions">

            <button  className="Header-form-Submit" type="submit">Add Submit</button>
            <button className="Header-form-Submit" type="button" onClick={props.onCancle}>Cancle</button>

        </div>
    </form>
)};
export default HeaderForm;
