import { useState } from "react";
import { evaluate } from "mathjs";
import { Button } from "../components/Button";
import { Output } from "../components/Output";
export const Calpage=()=>{
    
const [count, setCount] = useState(""); 
const [result, setResult] = useState(0); 

const updateCount = (val) => {
  if (val === "AC") {
    setCount("");
    setResult(0);
  } else if (val === "=") {
    try {
      const value = evaluate(count); 
      setResult(value);
      setCount(value.toString());
    } catch (error) {
      setResult("Error");
    }

    setCount(""); 
  } else {
    if (result===0){
    setCount(count + val);
    }
    else{  setCount(count+result+val);
        setResult(0);}
    
  }
};
const clearLastInput = () => {
    if (count.length > 0) {
      const newCount = count.slice(0, -1); 
      setCount(newCount);
    }
};
    return(
        <div class="container text-center ">
            <h1 className="mt-4">CALCULATOR</h1>
            <Output classname="alert alert-info col-6 me-2" content={count !== "" ? count : result}/>
            <Button val="=" classname="col-2 btn btn-warning " fn={updateCount}/>
            <div class="container">
            <center>   
            <div>
            <Button val="1" classname=" col-2 btn btn-primary me-2" fn={updateCount}/>
            <Button val="2" classname=" col-2 btn btn-primary me-2" fn={updateCount}/>
            <Button val="3" classname=" col-2 btn btn-primary me-2" fn={updateCount}/>
            <Button val="Clear" classname="btn btn-danger col-2" fn={clearLastInput} />
            </div>
            <dir></dir>
            <div>
            
            <Button val="4" classname=" col-2 btn btn-primary me-2" fn={updateCount}/>
            <Button val="5" classname=" col-2 btn btn-primary me-2" fn={updateCount}/>
            <Button val="6" classname=" col-2 btn btn-primary me-2" fn={updateCount}/>
            <Button val="AC" classname="col-2  btn btn-dark me-2" fn={updateCount}/>
            </div>
            <dir></dir>
            <div>
            <Button val="7" classname=" col-2 btn btn-primary me-2" fn={updateCount}/>
            <Button val="8" classname=" col-2 btn btn-primary me-2" fn={updateCount}/>
            <Button val="9" classname=" col-2 btn btn-primary me-2" fn={updateCount}/>
            <Button val="*" classname="col-2 btn btn-primary me-2" fn={updateCount}/>
            
            </div>
            <dir></dir>
            <div>
            <Button val="0" classname="col-2 btn btn-primary me-2" fn={updateCount}/>
            <Button val="+" classname=" col-2 btn btn-primary me-2" fn={updateCount}/>
            <Button val="-" classname="col-2 btn btn-primary me-2" fn={updateCount}/>
            <Button val="/" classname="col-2 btn btn-primary me-2" fn={updateCount}/>
            
            </div>
            </center> 
            </div>

        </div>
    );
}
