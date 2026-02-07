import PropTypes from "prop-types";
import songFile from "../assets/song.mp3";

Play.propTypes = {
  onClick: PropTypes.func.isRequired,
};

function Play({ onClick }) {
  const handleClick = () => {
    const audio = new Audio(songFile);
    audio.loop = true;

    // Play it on click
    audio.play().catch((err) => console.log("Playback failed:", err));

    // Trigger parent state to start Greetings
    onClick();
  };

  return (
    <div
      className="play-screen"
      onClick={handleClick}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
        cursor: "pointer",
        backgroundColor: "#bc96ca",
      }}
    >
      <img
        src="https://media.tenor.com/1kCUYE8JXHQAAAAm/correo-mail.webp"
        alt="Play"
        style={{ width: "8rem", height: "8rem" }}
      />
    </div>
  );
}

export default Play;
