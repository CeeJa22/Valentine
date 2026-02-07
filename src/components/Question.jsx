import React, { useState } from "react";
import Button from "@mui/material/Button";
import { motion, AnimatePresence } from "framer-motion";
import { v4 as uuidv4 } from "uuid";

const FloatingHeart = ({ x, y, onComplete }) => (
  <motion.span
    initial={{ opacity: 1, scale: 0, top: y, left: x }}
    animate={{
      opacity: 0,
      scale: 1.5,
      y: -200,
      x: (Math.random() - 0.5) * 200,
      rotate: Math.random() * 45,
    }}
    transition={{ duration: 1.5, ease: "easeOut" }}
    onAnimationComplete={onComplete}
    style={{
      position: "fixed",
      pointerEvents: "none",
      fontSize: "2rem",
      zIndex: 9999,
      marginTop: "-20px",
      marginLeft: "-20px",
    }}
  >
    ❤️
  </motion.span>
);

function Question() {
  const [hearts, setHearts] = useState([]);
  const [isAccepted, setIsAccepted] = useState(false);
  const [noButtonPos, setNoButtonPos] = useState({ position: "static" });

  const handleYesClick = (e) => {
    const newHearts = Array.from({ length: 50 }).map(() => ({
      id: uuidv4(),
      x: e.clientX,
      y: e.clientY,
    }));
    setHearts((prev) => [...prev, ...newHearts]);
    setIsAccepted(true);
  };

  const moveButton = () => {
    const randomX = Math.random() * 80;
    const randomY = Math.random() * 80;
    setNoButtonPos({
      position: "fixed",
      top: `${randomY}%`,
      left: `${randomX}%`,
      zIndex: 1000,
      transition: "all 0.2s ease",
    });
  };

  const removeHeart = (id) => {
    setHearts((prev) => prev.filter((h) => h.id !== id));
  };

  return (
    <div
      className="question_container"
      style={{ textAlign: "center", marginTop: "50px" }}
    >
      <AnimatePresence>
        {hearts.map((heart) => (
          <FloatingHeart
            key={heart.id}
            x={heart.x}
            y={heart.y}
            onComplete={() => removeHeart(heart.id)}
          />
        ))}
      </AnimatePresence>

      {isAccepted ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          className="accepted_container"
        >
          <h1>I love you more than anything mi amorcito!!! ❤️</h1>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "20px",
            }}
          >
            <img
              src="https://media.tenor.com/WH3UGKxkCsQAAAAM/zidane-kiev.gif"
              alt="Celebration"
              style={{
                borderRadius: "10px",
                maxWidth: "90vw",
                height: "auto",
                boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
              }}
            />
            <img
              src="https://media.tenor.com/SLglGuVqz4oAAAAm/cat-jumping-catjump.webp"
              alt="Jumping Cat"
            />
          </div>
        </motion.div>
      ) : (
        <div className="container">
          <p className="valentine">
            Will you be my Valentine?{" "}
            <img
              className="heart_img"
              alt="heart"
              src="https://em-content.zobj.net/source/apple/81/heavy-black-heart_2764.png"
              style={{ width: "30px", verticalAlign: "middle" }}
            />
            <img
              src="https://media.tenor.com/SLglGuVqz4oAAAAm/cat-jumping-catjump.webp"
              alt="Jumping Cat"
            />
          </p>
          <div
            className="question"
            style={{ display: "flex", justifyContent: "center", gap: "20px" }}
          >
            <Button
              variant="contained"
              color="success"
              onClick={handleYesClick}
            >
              Yes
            </Button>
            <Button
              variant="contained"
              color="error"
              style={noButtonPos}
              onMouseEnter={moveButton}
              onClick={moveButton}
            >
              No
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Question;
