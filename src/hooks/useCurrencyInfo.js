import { useEffect,useState } from "react";

function useCurrencyInfo(currency='usd')
{
  const [data, setData] = useState(null)
  useEffect(()=>{
    fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
    .then(response => response.json())
    .then(response => {
      setData(response[currency]);
    })
    .catch(error => console.error(error))
  },[currency]);
  return data; 
}
export default useCurrencyInfo