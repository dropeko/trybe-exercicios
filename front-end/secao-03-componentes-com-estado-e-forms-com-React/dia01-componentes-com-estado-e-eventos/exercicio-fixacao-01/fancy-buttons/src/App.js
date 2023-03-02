import './App.css';

function handleClickOne () {
  console.log('A vida é uma maravilha!!');
}

function handleClickTwo () {
  console.log('Work Hard Play Hard!!');
}

function handleClickThree () {
  console.log('Você pode encontrar as coisas que perdeu, mas nunca as que abandonou!');
}

function App() {
  return (
    <div className="App">
      <button onClick={ handleClickOne }>Surprise Button 01</button>
      <button onClick={ handleClickTwo }>Surprise Button 02</button>
      <button onClick={ handleClickThree }>Surprise Button 03</button>
    </div>
  );
}

export default App;
