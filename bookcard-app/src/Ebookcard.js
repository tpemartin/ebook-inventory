import React from "react"
import useFetch  from "react-fetch-hook"
import "./Ebookcard.css"
import config from "./config.json"


export function Card(props){


    return <>
    
  <div>
  <meta charSet="utf-8" />
  <style dangerouslySetInnerHTML={{__html: "body{background-color:white;}" }} />
  <link href="./Ebookcard.css" rel="stylesheet" />
  <div className="ebookcard">
  <p id="data">{props.inventorynumber}</p>
  <img src="https://img.onl/nyh6kK"  id= "e-reader" alt="Get Started"/>
    <div className="ebookcard-icon">
      <div className="ebookcard-icon-icon" >
      <img src="https://img.onl/2M7ndA" alt="Start" />
      </div>
      <div className="ebookcard-icon-iconName" />
    </div>
  </div>
  <div className="pill">
    <div className="pill-availability">
      <div className="pill-availability-icon" />
      <div className="pill-availability-number" />
    </div>
    <div className="pill-action">
        <img src="https://img.onl/Ti5HYi" alt="get started" />
      <div className="pill-action-type" />
    </div>
  </div>
</div>
       </>
}

 export function SubtractNumber(){

    var {IsLoading,Data}=useFetch(config.appScript)
    if (IsLoading){

        return <>
         <div className="text-light">Loading...</div>  </>
    } else{

        return <Card inventorynumber={Data}/>
     }

 }
 
 

