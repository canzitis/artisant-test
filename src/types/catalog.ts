export enum CatalogActionTypes {
    FETCH_CATALOG = 'FETCH_CATALOG',
    SET_LOADING = 'SET_LOADING',
    FILTER_PRODUCT = 'FILTER_PRODUCT'
}

export interface StateType {
    catalog: any[],
    loading: boolean
}

interface FetchCatalogAction {
    type: CatalogActionTypes.FETCH_CATALOG
    catalog: any[],
    loading?: boolean
}

interface SetLoadingAction {
    type: CatalogActionTypes.SET_LOADING
    loading: boolean
}

interface FilterProduct {
    type: CatalogActionTypes.FILTER_PRODUCT
}

export type ActionTypes = FetchCatalogAction | SetLoadingAction | FilterProduct


export interface CatalogPropsType {
    catalog: any
}
