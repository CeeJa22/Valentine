import { useEffect } from "react";
import { useState } from "react";
import axolotl from "../assets/axolotl.png";
import teamo from "../assets/teamo.png";

const greetings = [
  {
    message: "Hola, Mi Amorcito!!!",
    gif: axolotl,
    id: 1,
  },
  { message: "you know that I love you,", gif: teamo, id: 2 },
  {
    message: "and I miss you everyday,",
    gif: "https://media1.tenor.com/m/l-TVGqxlKCgAAAAC/cute-cat.gif",
    id: 3,
  },
  { message: "but I have a question to ask......", gif: "", id: 4 },
];

function Greetings() {
  const [currGreeting, setCurrGreeting] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrGreeting(() => {
        if (currGreeting + 1 === greetings.length) {
          clearInterval(timer);
          return null;
        } else {
          return currGreeting + 1;
        }
      }, []);
    }, 5000);

    return () => {
      clearInterval(timer);
    };
  });

  return (
    <div>
      <div className="greeting_container">
        <p className="message">{greetings[currGreeting].message}</p>
        <img
          src={greetings[currGreeting].gif}
          className="greeting_images"
        ></img>
      </div>
    </div>
  );
}

export default Greetings;
