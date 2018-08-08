class TodoList extends React.Component {
  render() {
    return (
      <div className="todoListMain">
        <div className="header">
          <form onSubmit={this.addItem}>
            <input placeholder="introduce una tarea"  onChange={this.handleChange}>
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