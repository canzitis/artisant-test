import {TypedUseSelectorHook, useSelector} from "react-redux";
import {RootState} from "../store/reducers/combine";

export const useTypeSelectors: TypedUseSelectorHook<RootState> = useSelector