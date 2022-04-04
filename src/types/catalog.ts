export enum CatalogActionTypes{
     FETCH_CATALOG = 'FETCH_CATALOG',
     SET_LOADING = 'SET_LOADING'
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

export type ActionTypes = FetchCatalogAction | SetLoadingAction
