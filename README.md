# Work

> Development Task

- [x] setup project
- [x] dataset research
- [x] create type def file
- [x] create service files with error handeling
- [ ] create context to hold and manage state
- [ ] create layout
- [ ] deploy project
- [ ] submit project

> Task 1 // Setup project
- using vite for project setup

> Task 2 // data set

```json
// Json data
{
    "metrics": {
        "backendRequestEndsAt": 1581488258.7008908,
        "backendRequestStartsAt": 1581488258.4641087
    },
    "payload": [{
        "name": "Property: The Sail @ Marina Bay Unit 68-020000 3BR 1991sqft",
        "ticker": "Property_TheSail@MarinaBay-68-02",
        "asset_class": "Real Estate",
        "avg_price": 3982000,
        "market_price": 3996971.1,
        "market_value_ccy": 3996971.1,
        "latest_chg_pct": 31
    }, {
        "name": "SGD Cash",
        "ticker": "demo_equity_managed_cssg01_sgd_01",
        "asset_class": "Cash",
        "market_value_ccy": 3000000,
        "latest_chg_pct": 59
    }, {
        "name": "DYNAMIC TALENT LTD 4.7500% 2017-08-01",
        "ticker": "XS0810321140",
        "asset_class": "Bond",
        "avg_price": 101.5168,
        "market_price": 100.16,
        "market_value_ccy": 714882,
        "latest_chg_pct": 7
    },.... ]
    "requestId": "ac77d137-9c10-47d6-ab1d-efbd00c1f92b",
    "status": "ok",
    "type": "result"
}

//fields
name: string
ticker: string
asset_class: enum
avg_price: number (optional)
market_price: number (optional)
market_value_ccy: number
latest_chg_pct: number 
```
