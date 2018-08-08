class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true, error: false};

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
  	try{
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
	}
	catch(error){
		this.setState({error:true});
	}
  }

  render() {
  	if(this.state.error){
  		return(
  			<h1>error</h1>
  		)
  	}
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}

ReactDOM.render(
  <Toggle />,
  document.getElementById('root')
);