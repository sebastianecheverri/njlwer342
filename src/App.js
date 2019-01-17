import React, { Component } from 'react';

/// Modifica el componente para que se puedan agregar tareas

class App extends Component {
  constructor() {
    super()
    this.state = {
      tasks: ['Sacar la ropa', 'Hacer la cama', 'Leer un rato'],
      newTask: ""
    }
  }

  render() {
    return (
      <div className="wrapper">
        <div className="list">
          <h3>Por hacer:</h3>
          <ul className="todo">
            {this.state.tasks.map((act) =>
              <li key={act}>{act}</li>
            )}
          </ul>
           <form onSubmit={this.handleSubmit}>
             <input type="text" id="new-task" value={this.state.newTask} onChange={this.addNewTask.bind(this)} placeholder="Ingresa una tarea y oprime Enter" />
           </form>
        </div>
      </div>
    )
  }
  addNewTask (event) {
    this.setState({
      newTask: event.target.value
    })
  }
  handleSubmit = (e) => {
    this.setState({
      tasks: this.state.tasks.concat(this.state.newTask),
      newTask: ""
    })
    e.preventDefault();
  }
}


export default App;
