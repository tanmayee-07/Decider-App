import React, {Component} from 'react';

const list=['Yes', 'No', 'Maybe', 'Not sure...try again', 'Ask a friend', 'Call the police!']

const MyContext=React.createContext();
class MyProvider extends Component{

    state={
        screen:0,
        question:'',
        result:''
    }

    handleGoTo=(value)=>{
        this.setState({screen:value})
    }

    handleQuestion=(value)=>{
        this.setState({question:value})
    }

    random_value=()=>{
        return list[Math.floor(Math.random()*list.length)]
    }

    handleResult=()=>{
        let rand=this.random_value()

        if(this.state.result!==''){

            while(rand===this.state.result){
                rand=this.random_value()//to avoid getting the same value as previous one e.g. Yes and Yes
            }
        }

        this.setState({result:rand})
    }

    handleReset=()=>{
        this.setState({
            screen:0,
            question:'',
            result:''
        })
    }

    render(){
        return(
            <>
            <MyContext.Provider value={{
                state:this.state,
                goTo:this.handleGoTo,
                question:this.handleQuestion,
                result:this.handleResult,
                reset:this.handleReset
            }}
            >
                {this.props.children}
            </MyContext.Provider>
            
            </>

        )
    }

}

export{
    MyProvider,
    MyContext
}