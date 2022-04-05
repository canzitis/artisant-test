import {ActionTypes, CatalogActionTypes, StateType} from "../../types/catalog";

const initialState: StateType = {
    catalog: [],
    loading: false
}
export const catalogReducer = (state = initialState, action: ActionTypes): StateType => {
    switch (action.type) {
        case CatalogActionTypes.FETCH_CATALOG:
            return {
                ...state,
                catalog: [...action.catalog],
                loading: true
            }
        case CatalogActionTypes.SET_LOADING:
            return {
                ...state,
                loading: action.loading
            }
        default:
            return state
    }
}
