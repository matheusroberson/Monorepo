import Config from 'react-native-config'
const TOKEN_API = process.env.TOKEN_API || Config.TOKEN_API

export const getInfosSymbol = async (symbol: string) => {
    const response = await fetch(`https://sandbox.iexapis.com/stable/stock/${symbol}/quote/?token=${TOKEN_API}`, {
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
        latestPrice: res.latestPrice }
} 

export const getHistoricalPrices = async (symbol:string) => {
    const dateNow = new Date()
    const date = `${dateNow.getFullYear()}0${dateNow.getMonth() + 1}${dateNow.getDate()}`
    const response = await fetch(`https://sandbox.iexapis.com/stable/stock/${symbol}/chart/date/${date}?token=${TOKEN_API}`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
    })
    const res = await response.json()
    const arrayData = res.map((value) => {
        return {
            minute: value.label.includes("PM") ? `0${parseInt(value.minute.slice(0,1)) + 12}:${value.minute.slice(2, 4)}` : value.minute,
            average: value.average,
        }
    })
    return arrayData
}