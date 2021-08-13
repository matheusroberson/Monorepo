import Config from 'react-native-config'
const TOKEN_API = process.env.TOKEN_API || Config.TOKEN_API

export const getInfosSymbol = async (symbol: string) => {
    const response = await fetch(`https://sandbox.iexapis.com/stable/stock/${symbol}/quote/?token=${TOKEN_API}&filter=latestPrice,change,companyName`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
    })
    const res = await response.json()
    return { 
        symbol: symbol.toUpperCase(),
        companyName: res.companyName,
        change: res.change,
        latestPrice: res.latestPrice
     }
} 

export const getHistoricalPrices = async (symbol:string) => {
    const dateNow = new Date()
    const date = `${dateNow.getFullYear()}0${dateNow.getMonth() + 1}${dateNow.getDate()}`
    const response = await fetch(`https://sandbox.iexapis.com/stable/stock/${symbol}/chart/date/${date}?token=${TOKEN_API}&filter=minute,average,label`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
    })
    const res = await response.json()
    const arrayData = res.map((value) => {
        return {
            minute: value.label.includes("PM") ? `${parseInt(value.minute.slice(0,1)) + 12}:${value.minute.slice(3, 5)}` : value.minute,
            average: value.average,
        }
    })
    return arrayData
}


export const getMultiInfosSymbos = async (symbols:string[]) => {
    const FormatedSymbols = symbols.join(",")
    const response = await fetch(`https://sandbox.iexapis.com/stable/stock/market/batch?types=quote&symbols=${FormatedSymbols}&token=${TOKEN_API}&filter=symbol,companyName,change,latestPrice`,{
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
    })
    const res = await response.json()
    const arrayData = Object.keys(res).map((value) => {
        return (res[value].quote)
    })
    return arrayData
}