import { useState } from "react"
function randomquotegen(){
    const [fact,setFact]=useState('');
    document.title="Random Fact Generator"
    const fetchrandomfact=async ()=>{
        const url="https://uselessfacts.jsph.pl/random.json?language=en"
        const response=await fetch(url)
        const data=await response.json();
        setFact(data.text)
        
    }
    return(
        <>
        
        <div className="container">
            <h1>Random Fact Generator</h1>
            <button className="button" onClick={fetchrandomfact}>Generate a random quote</button>
            <br/>
            <br/>
            <p className="quote">{fact}</p>
            
           

        </div>
        </>
    )
}
export default randomquotegen
