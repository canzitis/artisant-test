import React, {useEffect} from 'react';
import {useTypeSelectors} from "../../hooks/useTypeSelectors";
import Catalog from "./catalog";
import {useDispatch} from "react-redux";
import {fetchCatalog} from "../../store/action-creators/catalog";
import Preloader from "../preloader/preloader";

const CatalogContainer = () => {
    const {catalog, loading} = useTypeSelectors(state => state.catalog)
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(fetchCatalog())
    }, [])


    if (!loading) {
        return <Preloader/>
    }

    return (
        <>
            <Catalog catalog={catalog}/>
        </>
    );
};

export default CatalogContainer;
