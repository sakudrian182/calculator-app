import './App.css';
import Result from './components/Result';
import Button from './components/Button';
import MathOperations from './components/MathOperations';
import Functions from './components/Functions';

function App() {
  // Lo que ejecuta la función
  console.log("Renderización de App");

  const clickHandlerFunction = (text)=>{
    console.log("Button.ClickHandler",text)
  }



  return (
    <div className='react-calculator'>
		<Result value={"0"}></Result>
        <div className='numbers'>
         { /*Seccion para los numeros*/}
          <Button text={"1"} clickHandler={clickHandlerFunction}/>
          <Button text={"2"} clickHandler={clickHandlerFunction}/>
          <Button text={"3"} clickHandler={clickHandlerFunction}/>
          <Button text={"4"} clickHandler={clickHandlerFunction}/>
          <Button text={"5"} clickHandler={clickHandlerFunction}/>
          <Button text={"6"} clickHandler={clickHandlerFunction}/>
          <Button text={"7"} clickHandler={clickHandlerFunction}/>
          <Button text={"8"} clickHandler={clickHandlerFunction}/>
          <Button text={"9"} clickHandler={clickHandlerFunction}/>
          <Button text={"0"} clickHandler={clickHandlerFunction}/>
        </div>
        
        <Functions 
          onContentClear={(clear)=>console.log("el clear",clear)}
          onDelete={(ondelete)=>console.log("click en delete",ondelete)}
        />
       
        {/*Funciones de la calculadora*/}
        <MathOperations 
        onClickOperation={(operation)=>{
            console.log(operation)
        }}
        onClickEqual={(equal)=>{
          console.log("Equal",equal)
        }}
        />
        
        <div>
          {/*operadores*/}
        </div>
    </div>
  );
}

export default App;
