export function symbolToLogo(syb:string) {
    const data = [
        {
            "symbol": "amzn",
            "url": "https://i.imgur.com/Ae1rKJQ.png"
        },{
            "symbol": "aapl",
            "url": "https://i.imgur.com/Dr2cbCP.png"
        }, {
            "symbol": "fb",
            "url": "https://i.imgur.com/08rRU1f.png"
        }, {
            "symbol": "msft",
            "url": "https://i.imgur.com/iAohKBG.png"
        }, {
            "symbol": "sbux",
            "url": "https://i.imgur.com/O5Bcz6x.png"
        },{
            "symbol": "adbe",
            "url": "https://i.imgur.com/VjMV7x8.png"
        }, {
            "symbol": "twtr",
            "url": "https://i.imgur.com/XJljEAP.png"
        }
    ]

    const [{symbol, url}] = data.filter((value) => {
        if (value.symbol === syb)  return value.url
    })

    return url
}