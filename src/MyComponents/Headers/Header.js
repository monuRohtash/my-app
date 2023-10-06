import HeaderItem from "./HeaderItem";
import React, {useState} from 'react';
import './Header.css';
import HeaderFilter from "./HeaderFilter";
import HeadersList from "./HeadersList";

  const Header = (props) => {
    const [filteredYear, setFilteredYear] = useState('2022');
    const filterChangeHandler = (selectedYear) => {
       setFilteredYear(selectedYear);
    }

    const filteredHeader = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    return (
        <div>
            <HeaderFilter
                selected={filteredYear}
                onChangeFilter={filterChangeHandler}
            />
                <HeadersList items={filteredHeader}/>
    </div>
    );
}
export default Header;
