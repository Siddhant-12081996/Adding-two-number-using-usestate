import React, { useState } from 'react'

export const Calc = () => {

    const [state1,setState1]=useState(0);
    const [state2,setState2]=useState(0);
    const [state3,setState3]=useState(0);


    const change1=(event)=>{
        //console.log(event)
        setState1(Number(event.target.value))
    }
    const change2=(event)=>{
        setState2(Number(event.target.value))
    }
  const click=()=>{
  setState3(state1+state2)
  }

  



  return (
    <div>

    <input type={"text"} className={"form-control"} onChange={change1}/> <br></br>
    <input type={"text"} className={"form-control"} onChange={change2}/> <br></br>
    <input type={"text"} className={"form-control"} value={state3}/> <br></br>
    
    <button className= {'btn btn-success'} onClick={click}>
        Add Numbers
    </button>
    </div>
  )
    }

export default Calc