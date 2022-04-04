import React, {useEffect} from 'react';
import {useTypeSelectors} from "../../hooks/useTypeSelectors";
import Catalog from "./catalog";
import {useDispatch} from "react-redux";
import {fetchCatalog} from "../../store/action-creators/catalog";

const CatalogContainer = () => {
    const {catalog, loading} = useTypeSelectors(state => state.catalog)
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(fetchCatalog())
        console.log(catalog)
    }, [])

    if (!loading) {
        return <h4>Загрузка...</h4>
    }

    return (
        <>
            <Catalog/>
        </>
    );
};

export default CatalogContainer;