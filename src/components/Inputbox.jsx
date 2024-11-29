import React from 'react'

const Inputbox = (props) => {
  const {labelText,currencyKeys,selectCurrency,value,onAmountChange,onCurrencyChange} =  props;
  
  return (
    <>
      <div className='wc-row'>
        
        <div className='wc-col'>
          <label>{labelText}</label>
          <select value={selectCurrency} onChange={(e)=> onCurrencyChange && onCurrencyChange(e.target.value)} >
          {
           currencyKeys && currencyKeys.map((currency)=>(
            <option key={currency} value={currency}>{currency}</option>
           )) 
          }  
          </select>
        </div>
        
        <div className='wc-col'>
          <input type='textbox' value={value} onChange={(e)=> onAmountChange && onAmountChange(e.target.value)} />
        </div>

      </div>
    </>
  )
}

export default Inputbox