import axios from "axios";
import {ActionTypes, CatalogActionTypes} from "../../types/catalog";
import {Dispatch} from "redux";

export const fetchCatalog = () => {
    const instanceAPI = {
        baseURL: 'https://artisant.io/api/products'
    }
    return async (dispatch: Dispatch<ActionTypes>) => {
        try {
            const response = await axios.get(`${instanceAPI.baseURL}`)
            debugger;
            dispatch({type: CatalogActionTypes.FETCH_CATALOG, catalog: response.data.data})
        } catch (error) {
            console.log(error)
        }
    }

}