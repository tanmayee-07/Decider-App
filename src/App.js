import { useContext } from 'react';
import { MyContext } from './context';
import { SwitchTransition, CSSTransition} from 'react-transition-group';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import 'animate.css';
import './assets/App.css';
import Initial from './components/initial';
import Second from './components/second';
import Final from './components/final';

const App=()=> {

  const context=useContext(MyContext);

  const handleComponent=()=>{
    const screen=context.state.screen;
    if(screen===0) return <Initial/>
    if(screen===1) return <Second/>
    if(screen===2) return <Final/>
  }

  return (
    <div>
      <div className='container'>

        <SwitchTransition mode="out-in">
          <CSSTransition
          key={context.state.screen}
          timeout={500}
          classNames="fade"
          >

            {handleComponent()}

          </CSSTransition>
        </SwitchTransition>
          
      </div>
      <ToastContainer/>
    </div>
    
  );
}

export default App;
