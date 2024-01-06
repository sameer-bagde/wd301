import TaskCard from "./TaskCard";

const App = () => {
  return (
    <div>
      <h1>Smarter Task</h1>
      <div className="TaskItem">
        <h2>Pending</h2>
        <TaskCard
          title="Build the website with Dynamic content"
          dueDate="17-08-2023"
          assigneeName="sameer..."
        />
        <TaskCard
          title="Add Blog"
          dueDate="17-08-2023"
          assigneeName="name..."
        />
        <a href="#!">New Task</a>
      </div>
      <div className="TaskItem">
        <h2>Done</h2>
        <TaskCard
          title="Build the website with static content"
          completedAtDate="17-08-2002"
          assigneeName="name..."
        />
      </div>
    </div>
  );
};
export default App;
