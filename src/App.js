import './App.css';
import Greeting from './components/Greeting';
import Message from './components/Message';
const name = "Іван"
function App() {
  return (
    <div >
      <Greeting name={name} />
      <Message  text="Як справи ?" 
      newText="Яка погода у вас?"
      />
    </div>
  );
}

export default App;
