import "./App.css";
import { Input } from "./components/Input/Input.tsx";
import { Card } from "./components/Card/Card.tsx";

function App() {
  return (
    <>
      <button>oh</button>
      <Card onClick={() => {}}>{"foo bar"}</Card>
      <Input value={"ss"} onChange={() => {}} placeholder={"test"} multiline />
    </>
  );
}

export default App;
