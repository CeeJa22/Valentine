import { useState } from "react";
import "./styles/App.css";
import Greetings from "./components/Greetings.jsx";
import Question from "./components/Question.jsx";
import Play from "./components/Play.jsx";

function App() {
  const [showQuestion, setShowQuestion] = useState(false);
  const [start, setStart] = useState(false);

  return (
    <div className="total">
      {!start ? (
        <Play onClick={() => setStart(true)} />
      ) : !showQuestion ? (
        <Greetings onFinished={() => setShowQuestion(true)} />
      ) : (
        <Question />
      )}
    </div>
  );
}

export default App;
