import { Fragment, useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([
    {
      text: 'My simple task',
    },
    {
      text: 'Your simple task',
    },
  ]);

  return (
    <Fragment>
      <div className="container mt-5">
        <h1 className="text-white bg-secondary p-3">Simple To-Do App</h1>

        <div className="container mt-5">
          <h2 className="m-5">Tasks</h2>
          <div className="form-check">
            {tasks.map((task) => (
              <p>
                <input className="form-check-input" type="checkbox" />
                {task.text}
              </p>
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
