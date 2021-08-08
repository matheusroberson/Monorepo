import Config from 'react-native-config'
const TOKEN_API = process.env.TOKEN_API || Config.TOKEN_API

export const getInfosSymbol = (symbol: string) => {
    return fetch(`https://sandbox.iexapis.com/stable/stock/${symbol}/quote/?token=${TOKEN_API}`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
    })
    .then(response => { return response.json() })
    .then((res) => {
        return { symbol: symbol.toUpperCase(), companyName: res.companyName, change: res.change, latestPrice: res.latestPrice }
    })
} 