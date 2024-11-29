import { useState,useEffect } from 'react'

import './App.css'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import Inputbox from './components/Inputbox';


function App() {

  const [fromCurrency, setFromCurrency] = useState('usd');
  const [toCurrency, setToCurrency] = useState('inr');

  const [amount, setAmount] = useState(1);
  const [convertedAmount, setConvertedAmount] = useState(1);

  let currencyInfo = useCurrencyInfo(fromCurrency);
  

  let currencyKeys = '';
  if(currencyInfo)
  {
    currencyKeys = Object.keys(currencyInfo);  
  }
  
  useEffect(() => {
    if (currencyInfo && amount && toCurrency) 
    {
      setConvertedAmount(amount * currencyInfo[toCurrency]);
    }
  }, [amount,currencyInfo, toCurrency, fromCurrency]);

  
  const swap= () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  }
  
  return (
    <>
      <Inputbox labelText='From' currencyKeys={currencyKeys} selectCurrency={fromCurrency} value={amount} onAmountChange={(amount)=> setAmount(amount)} onCurrencyChange={(currency)=> setFromCurrency(currency)}  />
      <Inputbox labelText='To' currencyKeys={currencyKeys} selectCurrency={toCurrency} value={convertedAmount} onCurrencyChange={(currency)=> setToCurrency(currency)}/>
      <button onClick={swap}>Swap</button>      
    </>
  )
}

export default App
