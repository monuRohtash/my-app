
import React,{useState} from "react";
import HeaderDate from './HeaderDate';
import './Header.css';
const  HeaderItem = (props) => {
    return (
    <li>


        <div className='expense-item'>

            <HeaderDate date={props.date} />
         <div className='expense-item_description'>
         <h2>{props.title}</h2>
        <div className='expense-item_price'>${props.amount}</div>
    </div>
        </div>

    </li>
    );
}
export default HeaderItem;
