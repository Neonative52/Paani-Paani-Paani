import Output from "./components/Output";
import Input from "./components/Input";
import Header from "./components/Header";
import { useState } from "react";

function App() {
  const [justifyContent,setJustifyContent] = useState('');
  const [alignItems,setAlignItems] = useState('');
  return (
    <div className="app">
      <Header></Header>
      <Input
        justifyContent={justifyContent}
        setJustifyContent = {setJustifyContent}
        alignItems = {alignItems}
        setAlignItems = {setAlignItems}
      ></Input>
      <Output
        justifyContent={justifyContent}
        alignItems = {alignItems}
      >
      </Output>
    </div>
  );
}

export default App;
