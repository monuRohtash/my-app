import React from "react";
import HeaderItem from "./HeaderItem";
import './HeadersList.css';


const HeadersList = (props) => {
    if (props.items.length === 0) {
        return <h2 className="expenses-list__fallback">No Expenses Found.</h2>
    }
    return (
        <ul className='expenses-list'>
        {props.items.map((expense) => (
        <HeaderItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
        />
        ))}
    </ul>
    );
};



export default HeadersList;
