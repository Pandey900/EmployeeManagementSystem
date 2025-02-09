import React from "react";
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";
import InProgress from "./InProgress";

const TaskList = ({ data }) => {
  console.log(data);
  return (
    <div
      id="tasklist"
      className="h-[55%] overflow-x-auto flex items-center justify-start gap-6 flex-nowrap w-full p-4 mt-10"
    >
      {data?.tasks?.map((task, index) => {
        if (task.active) {
          return <AcceptTask key={`task-${index}`} task={task} />;
        }
        if (task.newTask) {
          return <NewTask key={`task-${index}`} task={task} />;
        }
        if (task.completedTask) {
          return <CompleteTask key={`task-${index}`} task={task} />;
        }
        if (task.failedTask) {
          return <FailedTask key={`task-${index}`} task={task} />;
        }
        if (task.inProgress) {
          return <InProgress key={`task-${index}`} task={task} />;
        }
        return null;
      })}
    </div>
  );
};

export default TaskList;
