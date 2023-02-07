import React from "react";
import  ReactDOM  from "react-dom";

import './style.css'

export default function Calculate(){

    
    const [res,setRes]=React.useState('')
    

   
    function handleClick(event)
    {
        
        setRes(res.concat(event.target.name))
    }


    const clearFn=()=> setRes('')                  /// clear fn ////
    



    const deleteFn=()=>{                          // delete fn  ////

        const item=res.slice(0,res.length-1)     // 0th index to last  position ///
        setRes(item)
    }


   const getResult=()=>                         ///  result fn ////
   {
   
            try
            {
                
                setRes(eval(res).toString())
                
            }
   
           catch(err)
           {
            setRes('Error')
           }
        
   } 
    return(
        <>
        <div className="container">

           <form className="output_container">
                <input type='text' value={res} />
                
           </form>
           
            <button className="span_two" onClick={clearFn}>CLEAR</button>
            <button className="span_two" onClick={deleteFn}>DEL</button>
            <button name='1' onClick={handleClick} >1</button>
            <button name='2' onClick={handleClick} >2</button>
            <button name='3' onClick={handleClick} >3</button>
            <button name='4' onClick={handleClick} >4</button>
            <button name='5' onClick={handleClick} >5</button>
            <button name='6' onClick={handleClick} >6</button>
            <button  name='7' onClick={handleClick} >7</button>
            <button name='8' onClick={handleClick} >8</button>
            <button  name='9' onClick={handleClick} >9</button>
            <button  name='0' onClick={handleClick} >0</button>
            <button  name='+' onClick={handleClick}  className="operator"  >+</button>
            <button name='-' onClick={handleClick}   className="operator" >-</button>
            <button name='*' onClick={handleClick}  className="operator">*</button>
            <button name='/' onClick={handleClick}  className="operator" >/</button>
            <button name='%' onClick={handleClick}  className="operator">%</button>
            <button onClick={getResult} className="operator" >=</button>
               
          </div>
        
        
        
        </>
    )
}
ReactDOM.render(<Calculate />,document.getElementById('root'))