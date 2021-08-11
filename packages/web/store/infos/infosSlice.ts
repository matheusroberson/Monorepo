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
    }[],
    favorites: {
        symbol: string,
        companyName: string,
        change: number,
        latestPrice: number,
    }[],
}

const initialState: infosState = {
    symbol: "",
    companyName: "",
    change: 0,
    latestPrice: 0,
    history: [],
    favorites: []
}
export const infosSymbol = createAsyncThunk("infos/infosSymbol", getInfosSymbol)

export const infosSlice = createSlice({
    name: "infos",
    initialState,

    reducers: {
        addFavorites: ((state, action: PayloadAction<string>) => {
            const [item] = state.history.filter((value) => value.symbol === action.payload)
            if(!state.favorites.find((value) => value.symbol === action.payload))
                state.favorites.push(item)
        }),
        removeFavorites: ((state, action: PayloadAction<string>) => {
            const newFavorites = state.favorites.filter((value) => value.symbol !== action.payload)
            state.favorites = newFavorites
        }),
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
    addFavorites,
    removeFavorites
} = infosSlice.actions


export const selectInfos = (state: RootState) => state.infos;

export default infosSlice.reducer;