import "./App.css";

export default function App() {
  function handleClick() {
    console.log("you clicked");
  }
  return (
    <>
      <Button
        color={"blue"}
        disabled={false}
        text={"click me now, do it"}
        backgroundColor={"black"}
        height={"100px"}
        onButtonClick={handleClick}
      />
      <br></br>
      <br></br>
      <Button
        disabled={true}
        text={"cannot click me"}
        backgroundColor={"yellow"}
        height={"150px"}
        onButtonClick={handleClick}
      />
    </>
  );
}

function Button({
  color = "green",
  disabled,
  text,
  backgroundColor,
  height,
  onButtonClick,
}) {
  return (
    <button
      style={{ color: color, backgroundColor: backgroundColor, height: height }}
      disabled={disabled}
      onClick={onButtonClick}
    >
      {text}
    </button>
  );
}
