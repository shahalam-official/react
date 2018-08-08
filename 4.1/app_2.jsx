function FancyBorder(props) {
  return (
    <div style={{borderColor: "blue", borderWidth: "5px", borderStyle: "solid"}}>
      {props.children}
    </div>
  );
}
function Dialog(props) {
  return (
    <FancyBorder>
      <h1 className="Dialog-title">
        {props.title}
      </h1>
      <p className="Dialog-message">
        {props.message}
      </p>
    </FancyBorder>
  );
}

function WelcomeDialog() {
  return (
    <Dialog
      title="Welcome"
      message="Thank you for visiting our spacecraft!" />

  );
}
ReactDOM.render(
  <WelcomeDialog />,
  document.getElementById('root')
);