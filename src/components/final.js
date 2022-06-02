import { useContext, useEffect } from "react";
import { MyContext } from "../context";
import { toast } from "react-toastify";

//using useEffect to load the component ONLY ONCE
const Final=()=>{

    const context=useContext(MyContext);

    useEffect(()=>{
        context.result();
        toast.success('There is your answer',{
            toastId: '007'
        })
    },[]) //the empty brackets are to avoid infinite loop and load the component only once

    return(
        <div>
            <h3>Your answer is:</h3>
            <div className="viewer">
                {context.state.result}
            </div>

            <div className="animate__animated animate__bounceIn animate__delay-1s">
                <hr/>
                <button className="btn" onClick={context.reset}>
                    Start Over
                </button>

                <button className="btn" onClick={context.result}>
                    Decide Again
                </button>
            </div>
        </div>
    )

}

export default Final;