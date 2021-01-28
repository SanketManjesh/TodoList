import logo from './logo.svg';
import './App.css';
import InputField from './Input.js';
import { ChakraProvider } from "@chakra-ui/react"
function App() {
  return (
    <div className="App">
    <ChakraProvider>
        <InputField/>
    </ChakraProvider>
    </div>
  );
}

export default App;
