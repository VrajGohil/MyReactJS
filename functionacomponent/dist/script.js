function Hello(props) {
  return React.createElement("h1", null, "Hey! ", props.message);
}

ReactDOM.render(
React.createElement(Hello, { message: "new message" }),
document.getElementById("root"));