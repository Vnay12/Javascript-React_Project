/* 
Custom hooks are nothing but functions which return an array[] 
with 2 varibale 

for good practice we use useCurrencyinfo 

we have one function to fetch and return data

*/

import React from 'react'
import { useEffect, useState } from 'react'

function useCurrencyinfo(currency) {
    const [data, setdata] = useState();
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((res) =>res.json)
        .then((res) =>setData(res[currency]))

        
    }, [currency]);

    return data
}

export default useCurrencyinfo