class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: '', items: []};

    this.handleChange = this.handleChange.bind(this);
    this.addItem = this.addItem.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  addItem(event) {
    event.preventDefault();
    if (this.state.value !== "") {

      this.newItem = {
        text: this.state.value,
        key: Date.now()
      };
      this.setState(prevState => ({items: prevState.items.concat(this.newItem)}));
      this.setState({value: ""});
      console.log(this.newItem);        
    }

  }
  render() {

    return (
      <div className="todoListMain">
        <div className="header">
          <form onSubmit={this.addItem}>
            <input placeholder="introduce una tarea" value={this.state.value} onChange={this.handleChange}>
            </input>
            <button type="submit">añadir</button>
          </form>
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <TodoList />,
  document.getElementById('root')
);
