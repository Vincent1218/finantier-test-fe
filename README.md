# Finantier Frontend Software Engineer - Coding Challenge Project

## By: Chai Wen Xuan

<br />

## Tech :
### Frontend framework : [React.js](https://reactjs.org/)
### CSS framework : [Bootstrap](https://getbootstrap.com/)
### API : [TwelveData](https://twelvedata.com/), [Alpha Vantage](https://www.alphavantage.co/)
### Graphing tools : [Plotly](https://plotly.com/)
### Cloud server : [Digital Ocean](https://www.digitalocean.com/)

<br />
<br />

## Project procedure
### Preparation
1. Research on APIs ([TwelveData](https://twelvedata.com/), [Alpha Vantage](https://www.alphavantage.co/),[Yahoo Finance](https://sg.finance.yahoo.com/))
2. Check data format of data retrieved
3. Research on suitable graphing tools. ([AnyChart](https://www.anychart.com/), [Plotly](https://plotly.com/), [React-stockcharts](https://github.com/rrag/react-stockcharts))

### Design
1. Getting ideas from some stock viewing sites and combining them together. ([Yahoo Finance](https://sg.finance.yahoo.com/), [Etoro](https://www.etoro.com/))

### Developing
1. Fetch API.
2. Choose both [TwelveData](https://twelvedata.com/) and [Alpha Vantage](https://www.alphavantage.co/) as [Alpha Vantage](https://www.alphavantage.co/) do not provide `real-time data` and [TwelveData](https://twelvedata.com/) do not provide `MarketCap`.
3. Reconstruct data to suit the format of the graphing tool parameters.
4. Displaying required data.
5. Set timer to fetch data every `60 seconds` due to limited total amount of requests. `(800 per day, 8 per minute)`([TwelveData](https://twelvedata.com/)),
`(500 per day, 5 per minute)`([Alpha Vantage](https://www.alphavantage.co/))
6. *Changed the required `bid` & `ask` to `high` & `low` as API chosen is not from a broker.
7. *Added `Sector` to make the data displayed neater.
8. Tried two graphing tools, [Plotly](https://plotly.com/) & [AnyChart](https://www.anychart.com/) and decided to use [Plotly](https://plotly.com/) as it is more customisable. 

### Deploying
1. Tried [Heroku](https://www.heroku.com), which is a free deploying platform.
2. Faced `Error => (Javascript Heap Out of Memory)`
4. Tried to deploy on [GitHub](https://vincent1218.github.io/finantier-test-fe/) but the page is not showing anything.
5. Choosing [Digital Ocean](https://www.digitalocean.com/) as server memory is more customisable and cheaper.
6. Build app.
7. Deploy.


## Challenging part:
1. Debugging the Error stated in `Deploying`. Where the Heap is Out of Memory.
### Solution: Change to cloud server with more memory and limiting the maximum memory size of the app.

<br />

## User Guide:
1. Enter company code in the search bar above, click `Search`,the relevant information will be displayed,
2. Regarding the graph, hover above the candle stick to look at the details.
3. Drag to adjust specific range for viewing.
4. Double click to reset axes.
5. Some famous company code: `FB`,`APPL`,`TSLA`,`MSFT`,`AMD`

## Link to website: [Click Me!](http://178.128.57.31/)
	

