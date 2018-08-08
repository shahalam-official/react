function FancyBorder(props) {
  return (
    <div style={{borderColor: "blue", borderWidth: "5px", borderStyle: "solid"}}>
      {props.children}
    </div>
  );
}

function WelcomeDialog() {
  return (
    <FancyBorder>
      <h1>
        Welcome
      </h1>
      <p>
        Thank you for visiting our spacecraft!
      </p>
    </FancyBorder>
  );
}

ReactDOM.render(
  <WelcomeDialog />,
  document.getElementById('root')
);