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
    return { symbol: symbol.toUpperCase(), companyName: res.companyName, change: res.change, latestPrice: res.latestPrice }
} 