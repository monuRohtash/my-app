import React from "react";
import {useState} from "react";

import './NewHeader.css';
import HeaderForm from "./HeaderForm";
const NewHeader = (props) => {
    const [isEditing,setIsEditing] = useState(false);
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
    };
    const  startEditingHandler = () => {
        setIsEditing(true);
    }
    const stopEditingHandler = ()=> {
        setIsEditing(false)
    }


    return(
        <div className='Header-Form'>
            {!isEditing && ( < button className="Header-form-Submit" onClick={startEditingHandler}>Add New Post</button>)}
            {isEditing && ( <HeaderForm  onSaveExpenseData = {saveExpenseDataHandler} onCancle={stopEditingHandler} />)}
    </div>
    );
};
export default NewHeader;
