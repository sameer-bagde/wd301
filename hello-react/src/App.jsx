import TaskCard from "./TaskCard";

const App = () => {
  return (
    <div>
      <div>
        <h1>Pending</h1>
        <TaskCard title="Build the website with static content" />
        <TaskCard title="Add Blog" />

        <a href="#!">New Task</a>
      </div>
      <div>
        <h1>Done</h1>
        <TaskCard title="Build the website with static content" />
      </div>
    </div>
  );
}
export default App;