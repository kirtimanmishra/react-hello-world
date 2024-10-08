import "./App.css";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import Message from "./components/Message";
import Counter from "./components/MyCounter";
import FunctionClick from "./components/FunctionClick";
import ClassClick from "./components/ClassClick";
import ParentComponent from "./components/ParentComponent";
import NameList from "./components/NameList";
import StyleSheet from "./components/StyleSheet";
import Inline from "./components/Inline";
import LifeCycleA from "./components/LifeCycleA";
import ParentComponent_1 from "./components/ParentComponent_1";

function App() {
  return (
    <div className="App">
      {/* <Welcome name="kirti">
        <p>this is Welcome children props</p>
      </Welcome> */}
      {/* <Greet name="Kirti">
        <p>This is children props</p>
      </Greet> */}
      {/* <Message> </Message> */}
      {/* <Counter /> */}
      {/* <FunctionClick /> */}
      {/* <ClassClick /> */}
      {/* <ParentComponent /> */}
      <ParentComponent_1 />
      {/* <NameList /> */}
      {/* <StyleSheet primary={true} /> */}
      {/* <Inline /> */}
      {/* <LifeCycleA /> */}
    </div>
  );
}

export default App;
