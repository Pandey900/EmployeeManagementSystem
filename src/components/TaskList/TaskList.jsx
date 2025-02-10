import React, { useContext } from "react";
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";
import InProgress from "./InProgress";
import { AuthContext } from "../../context/AuthProvider";

const TaskList = ({ data }) => {
  const { updateTaskStatus } = useContext(AuthContext);

  const handleStatusUpdate = (taskIndex, newStatus) => {
    updateTaskStatus(data.id, taskIndex, newStatus);
  };

  return (
    <div
      id="tasklist"
      className="h-[55%] overflow-x-auto flex items-center justify-start gap-6 flex-nowrap w-full p-4 mt-10"
    >
      {data?.tasks?.map((task, index) => {
        if (task.active) {
          return (
            <AcceptTask
              key={`task-${index}`}
              task={task}
              onUpdateStatus={(newStatus) =>
                handleStatusUpdate(index, newStatus)
              }
            />
          );
        }
        if (task.newTask) {
          return (
            <NewTask
              key={`task-${index}`}
              task={task}
              onUpdateStatus={(newStatus) =>
                handleStatusUpdate(index, newStatus)
              }
            />
          );
        }
        if (task.completedTask) {
          return <CompleteTask key={`task-${index}`} task={task} />;
        }
        if (task.failedTask) {
          return <FailedTask key={`task-${index}`} task={task} />;
        }
        if (task.inProgress) {
          return (
            <InProgress
              key={`task-${index}`}
              task={task}
              onUpdateStatus={(newStatus) =>
                handleStatusUpdate(index, newStatus)
              }
            />
          );
        }
        return null;
      })}
      {(!data?.tasks || data.tasks.length === 0) && (
        <div className="w-full text-center text-gray-500">
          No tasks available
        </div>
      )}
    </div>
  );
};

export default TaskList;
