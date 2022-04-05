import React from 'react';
import s from "./filter.module.scss";
import {FilterDataType} from "../../../types/catalog";

const Filter: React.FC<FilterDataType> = ({setFilter, filter}) => {

    return (
        <div className={s.container}>
            <span>Показать только в наличии:</span>
            <input type="checkbox" onChange={() => setFilter(!filter)}/>
        </div>
    );
};

export default Filter;
