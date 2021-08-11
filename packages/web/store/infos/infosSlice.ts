import {
    createSlice,
    createAsyncThunk,
    PayloadAction
} from '@reduxjs/toolkit'
import type {RootState} from '../index'
import {getInfosSymbol} from '../../../shared/api/index' 

export type infosState = {
    symbol: string,
    companyName: string,
    change: number,
    latestPrice: number,
    history: {
        symbol: string,
        companyName: string,
        change: number,
        latestPrice: number,
    }[]
}

const initialState: infosState ={
    symbol: "",
    companyName: "",
    change: 0,
    latestPrice: 0,
    history: [],
}
export const infosSymbol = createAsyncThunk("infos/infosSymbol", getInfosSymbol)

export const infosSlice = createSlice({
    name: "infos",
    initialState,

    reducers: {

    },

    extraReducers: (builder) => {
        builder.addCase(infosSymbol.fulfilled, (state, {payload}) => {
            state.symbol = payload.symbol
            state.change = payload.change
            state.companyName = payload.companyName
            state.latestPrice = payload.latestPrice

            const lastHistoy = state.history.filter((value) => value.symbol !== payload.symbol)
            lastHistoy.push(payload)
            state.history = lastHistoy
        })
    }
})

export const {
    
} = infosSlice.actions


export const selectInfos = (state: RootState) => state.infos;

export default infosSlice.reducer;