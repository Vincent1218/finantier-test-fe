import React from 'react'
import Alert from 'react-bootstrap/Alert';
import { useState, useEffect, useRef } from 'react'
import '../CSS/Stock.css'
import Plot from 'react-plotly.js';



const Stock = () => {
  const [stockSymbol,setStockSymbol] = useState('');
  const [dataav,setDataav] = useState([]);
  // const [datatd,setDatatd] = useState([]);
  const [datao,setDatao] = useState([]);
  // const [datap,setDatap] = useState([]);
  const [showF, setShowF] = useState(false) ;
  const [showE, setShowE] = useState(false) ;
  const [positive,setPositive] = useState(true);
  const [fetched,setFetched] = useState(false);
  const [fetchedGraph,setFetchedGraph] = useState(false);
  const [stockData,setStockData] = useState([{}]);
  const [graphWidth,setGraphWidth] = useState(0);
  const [graphHeight,setGraphHeight] = useState(0);
  const [stockLayout,setStockLayout] = useState({});
  
  //API KEY
  //Alpha Vantage
  const [API_KEY_1,setAPI_KEY_1] = useState('3RFOOF2S72MF6TGZ');
  //Twelve Data
  const [API_KEY_2,setAPI_KEY_2] = useState('d50e44b3951e474e96b7aaacf310b9ce');  

  const ref = useRef(null);
  useEffect(() => {
    if(ref.current){
      // setStockLayout({ ...stockLayout, width: ref.current.offsetWdith })
      setGraphWidth((ref.current.offsetWidth)*0.95);
      setGraphHeight((ref.current.offsetHeight)*0.95);
    }
  }, []);

  const fetchInitialStock = async () => {
    //Overview (Twelve Data)
    var urlo = `https://api.twelvedata.com/quote?symbol=${stockSymbol}&apikey=${API_KEY_2}`;
    const reso = await fetch(urlo);
    const data_1 = await reso.json();
    if((data_1.code)===400){
      // console.log("Symbol does not exist")
      setShowF(true)
      setTimeout(() => setShowF(false), 1000);
      return;
    }
    if((data_1.code)===429){
      // console.log("Symbol does not exist")
      setShowE(true)
      setTimeout(() => setShowE(false), 1000);
      return;
    }

    //Market Cap (Alpha Vantage)
    var urlav = `https://www.alphavantage.co/query?function=OVERVIEW&symbol=${stockSymbol}&apikey=${API_KEY_1}`;
    const resav = await fetch(urlav);
    const data_2 = await resav.json();
    if(data_2==={}){
      setShowF(true)
      setTimeout(() => setShowF(false), 1000);
      return;
    }
    if(data_2.note){
      setShowE(true)
      setTimeout(() => setShowE(false), 1000);
      return;
    }
    // console.log(data_1)

    //Set data
    if(data_1.percent_change<0){
      setPositive(false);
    }
    data_1.percent_change = `(${data_1.percent_change}%)`
    data_1.symbol = `(${data_1.symbol})`
    setDatao(data_1);
    setDataav(data_2)
    setFetched(true);
    //Fetch Chart Data
    fetchStock();
  }

  const fetchStock =  async () => {
    var urltd = `https://api.twelvedata.com/time_series?symbol=${stockSymbol}&interval=5min&outputsize=78&apikey=${API_KEY_2}`
    // var urlp = `https://api.twelvedata.com/price?symbol=${StockSymbol}&apikey=${API_KEY_2}`
    const restd = await fetch(urltd)
    // const resp = await fetch(urlp)

    const data = await restd.json()
    // const data = await resp.json()
    
    // setDatatd (data)
    // setDatap (data)
    // console.log(data.values)
    if((data.code)===400){
      setShowF(true)
      setTimeout(() => setShowF(false), 1000);
      return;
    }
    if((data.code)===429){
      setShowE(true)
      setTimeout(() => setShowE(false), 1000);
      return;
    }
    var temp = data.values.length

    var tempDateArr = [];
    var tempOpenArr = [];
    var tempHighArr = [];
    var tempLowArr = [];
    var tempCloseArr = [];
    for (var i = 0; i < temp; i++){
      tempDateArr.push(data.values[i].datetime)
      tempOpenArr.push(parseFloat(data.values[i].open))
      tempHighArr.push(parseFloat(data.values[i].high))
      tempLowArr.push(parseFloat(data.values[i].low))
      tempCloseArr.push(parseFloat(data.values[i].close))
    }

    // console.log(data.values)



    setStockLayout({
      dragmode: 'zoom', 
      margin: {
        r: 10, 
        t: 25, 
        b: 40, 
        l: 60
      }, 
      showlegend: false, 
      xaxis: {
        autorange: true, 
        domain: [0, 1], 
        title: 'Date', 
        type: "date",
        rangebreaks: [{
          enabled: true,
          // bounds : ["sat","mon"],
          // values : ["2021-05-28"]
          pattern: 'hour', 
          bounds: [16,9.5] 
        }]
      }, 
      yaxis: {
        autorange: true, 
        domain: [0, 1], 
        type: 'linear'
      },
      width: graphWidth ,
      height: graphHeight ,
    });

    setStockData ([{
      x: tempDateArr, 
      close: tempCloseArr, 
      decreasing: {line: {color: '#f54748'}},
      high: tempHighArr,
      increasing: {line: {color: '#29bb89'}},  
      line: {color: 'rgba(31,119,180,1)'}, 
      low: tempLowArr,
      open: tempOpenArr,
      type: 'candlestick', 
      xaxis: 'x', 
      yaxis: 'y'
    }]);

    // console.log(stockData);
    setFetchedGraph(true);  
    // setTimeout(fetchStock, 100);
    setTimeout(() => fetchInitialStock(), 600000);
  }  

  const addStock = () => {
    // console.log(stockSymbol);
    fetchInitialStock();
  }




  return (
    <div className = "stockpage">
      <Alert show={showF} className= "alertdne" variant="danger" onClose={() => setShowF(false)} dismissible>
        <Alert.Heading className = "alertHeading"> Symbol does not exist! </Alert.Heading>
      </Alert>
      <Alert show={showE} className= "alertdne" variant="danger" onClose={() => setShowF(false)} dismissible>
        <Alert.Heading className = "alertHeading"> API calls limit reached! </Alert.Heading>
      </Alert>
      <div className = "container">
          <div className="input-group mb-3">
            <input type="text" className="searchbar form-control" value={stockSymbol} placeholder="Company's symbol" aria-label="Company's symbol" aria-describedby="button-addon2"
            onChange={(e) => setStockSymbol( e.target.value )}></input>
            <div className="input-group-append">
              <button className="btn btn-primary" type="button" id="button-addon2" onClick={addStock}>Search</button>
            </div>
          </div>
          <div className ={`firstRow  ${fetched ? "" : "firstRowh"}`}>
            <div className = "company">
              {datao.name} {datao.symbol}
            </div>
            <div className = "exchange">
              {datao.exchange}
            </div>
          </div>
          <div className = {`price  ${fetched ? "" : "priceh"}`}>
            <div className = "cvalue">
              {datao.close}
            </div>
            <div className = {`change  ${positive ? "pos" : "neg"}`}>
              {datao.change}
            </div>
            <div className = {`percent_change  ${positive ? "pos" : "neg"}`}>
              {datao.percent_change}
            </div>
          </div>
          <div ref={ref} className = {`graph  ${fetchedGraph? "" : "graphh"}`}>
            {
              fetchedGraph ? 
                <Plot
                data={stockData}
                layout={stockLayout}
              />
              : ""
            }
          </div>
          <div className = "row details">

            <div className = "col Column">
              <div className = {`block  ${fetched ? "" : "blockh"}`}>
              {fetched ? <div className="title">Previous Close</div>: ""}
                <div className="content">{datao.previous_close}</div>
              </div>
              <div className = {`block  ${fetched ? "" : "blockh"}`}>
                {fetched ? <div className="title">Open</div>: ""}
                <div className="content">{datao.open}</div>
              </div>
            </div>
            <div className = "col Column">
              <div className = {`block  ${fetched ? "" : "blockh"}`}>
                {fetched ? <div className="title">High</div>: ""}
                <div className="content">{datao.high}</div>
              </div>
              <div className = {`block  ${fetched ? "" : "blockh"}`}>
                {fetched ? <div className="title">Low</div>: ""}
                <div className="content">{datao.low}</div>
              </div>
            </div>
            <div className = "col Column">
              <div className = {`block  ${fetched ? "" : "blockh"}`}>
                {fetched ? <div className="title">Market Capitalization</div>: ""}
                <div className="content">{dataav.MarketCapitalization}</div>
              </div>
              <div className = {`block  ${fetched ? "" : "blockh"}`}>
                {fetched ? <div className="title">Sector</div>: ""}
                <div className="content">{dataav.Sector}</div>
              </div>
            </div>
            <div className = "col Column">
              <div className = {`block  ${fetched ? "" : "blockh"}`}>
                {fetched ? <div className="title">Volume</div>: ""}
                <div className="content">{datao.volume}</div>
              </div>
              <div className = {`block  ${fetched ? "" : "blockh"}`}>
                {fetched ? <div className="title">Average Volume</div>: ""}
                <div className="content">{datao.average_volume}</div>
              </div>
            </div>

          </div>
      </div>
    </div>
  )
}

export default Stock
