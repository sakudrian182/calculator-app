import './App.css';
import Button from './components/Button';
import Result from './components/Result';

function App() {
  console.log("App JS");
  const clickHandlerFunction = (text) =>{
	console.log("clik desde app",text)
  }

  return (
    <div className='react-calculator'>
      	<Result value={"0"}/>
        <div className='numbers'>
			<Button text="1" clickHandler={clickHandlerFunction} />
			<Button text="2" clickHandler={clickHandlerFunction} />
			<Button text="3" clickHandler={clickHandlerFunction} />
			<Button text="4" clickHandler={clickHandlerFunction} />
			<Button text="5" clickHandler={clickHandlerFunction} />
			<Button text="6" clickHandler={clickHandlerFunction} />
			<Button text="7" clickHandler={clickHandlerFunction} />
			<Button text="8" clickHandler={clickHandlerFunction} />
			<Button text="9" clickHandler={clickHandlerFunction} />
			<Button text="0" clickHandler={clickHandlerFunction} />
        </div>
        <div>
           
        </div>
        <div>
         
        </div>
    </div>
  );
}

export default App;
