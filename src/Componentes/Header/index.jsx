import React, {useState} from 'react';
import axios from 'axios';
import './index.css'
    export default function Header (){

      const [temp, setTemp]=useState('');
      const [conv, setConv]=useState('');
      const result = document.querySelector('#result')

      
      
      let api = `http://localhost:8080/?temperatura=${temp}&conversor=${conv}`;

        async function btn (e){
            e.preventDefault() 
          const res = await axios.get(api) ;
            console.log(res);
            result.innerHTML  = JSON.stringify(res.data);
      }
      
    

    return(
    <div className="container">
        <form id='form' onSubmit={btn}>
            <p>Temperatura</p>   <input type="number" className='value'value={temp} onChange={(e)=>setTemp(e.target.valueAsNumber)}></input>
            <p>Conversor (escolha entre C e F)</p> <input type="text" className='value' value={conv} onChange={(b)=>setConv(b.target.value)}></input>
            <input type="submit" className='btn' value="click"></input>
        </form>
        <p id='result'> </p>
    </div>
    )


    }
