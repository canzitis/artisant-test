import React, {useState} from 'react';
import {CatalogPropsType} from "../../types/catalog";
import s from './catalog.module.scss'
// @ts-ignore
import backgroundImg from '../../img/backgaroundImg.png'
import Filter from "./filter/filter";


const Catalog: React.FC<CatalogPropsType> = ({catalog}) => {

    const [filter, setFilter] = useState<boolean>(false)

    return (<div className={s.container}>
            <h4>Explore</h4>
            <p>Buy and sell digital fashion NFT art</p>
            <Filter setFilter={setFilter} filter={filter}/>
            <div className={s.catalogGridWrapper}>
                {catalog.map((item: any) => {
                    return <div key={item.product_id}
                                className={filter && item.quantity_available === 0
                                    ? s.catalogGridItemNone
                                    : s.catalogGridItem}>
                        <div className={s.containerText}>
                            <img src={backgroundImg} alt=""/>
                            <div className={s.descriptionCatalog}>
                                <div>
                                    <span>created by</span>
                                    <span>{item.created_by.display_name}</span>
                                </div>

                                <div>
                                    <span>Digital Addiction</span>
                                    <span>{item.name}</span>
                                </div>
                            </div>
                        </div>
                        <div className={s.availableAndPriceWrapper}>
                            <div className={s.availableWrapper}>
                                <span>available</span>
                                <span><b>{item.quantity_available} of 50</b></span>
                            </div>
                            <div className={s.priceWrapper}>
                                <span>price</span>
                                <span><b>{item.initial_price} ETH</b></span>
                            </div>
                        </div>
                    </div>
                })}
            </div>
        </div>
    );
};
export default Catalog;
