class TodoItems extends React.Component {
  constructor(props) {
    super(props);
    this.createTasks = this.createTasks.bind(this);
  }

  createTasks(item) {
    return <li key={item.key}>{item.text}</li>
  }
  render() {
    this.listItems = this.props.entries.map(this.createTasks);
    
    return (
      <ul className="theList">
          {this.listItems}
      </ul>
    );
  }
};

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
        <TodoItems entries={this.state.items}/>
      </div>
    );
  }
}

ReactDOM.render(
  <TodoList />,
  document.getElementById('root')
);