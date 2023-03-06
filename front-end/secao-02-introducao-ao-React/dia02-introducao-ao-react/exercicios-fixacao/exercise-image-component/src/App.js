import './App.css';
import Image from './Image';
import cat from './cat.jpg'

function App() {
  return (
    <>
      <h1>Hello, World</h1>
      <Image source={ cat } alternativeText="Cute cats staring"/>
    </>
  );
}

export default App;
