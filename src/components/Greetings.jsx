import { useEffect } from "react";
import { useState } from "react";
import axolotl from "../assets/axolotl.png";
import teamo from "../assets/teamo.png";

const greetings = [
  {
    a: "Hola, Mi Amorcito!!!",
    gif: axolotl,
    id: 1,
  },
  { a: "you know that I love you,", gif: teamo, id: 2 },
  { a: "and I miss you everyday,", gif: "", id: 3 },
  { a: "but I have a question to ask......", gif: "", id: 4 },
];

function Greetings() {
  const [currGreeting, setCurrGreeting] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrGreeting(() => {
        if (currGreeting + 1 === greetings.length) {
          clearInterval(timer);
        } else {
          return currGreeting + 1;
        }
      });
    }, 5000);

    return () => {
      clearInterval(timer);
    };
  }, [currGreeting]);

  return (
    <div className="message">
      <div>
        {{}}
        <img src={greetings[currGreeting].gif}></img>
      </div>
      <div className="message">{greetings[currGreeting].a}</div>
    </div>
  );
}

export default Greetings;
