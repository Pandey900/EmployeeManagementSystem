import React, { useContext } from "react";
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";
import InProgress from "./InProgress";
import { AuthContext } from "../../context/AuthProvider";

const TaskList = ({ data }) => {
  const { updateTaskStatus, loggedInUser } = useContext(AuthContext);

  // Check if the current user is an admin
  const isAdmin = loggedInUser?.role === "admin";

  // Check if the logged-in user owns these tasks
  const isTaskOwner =
    !isAdmin &&
    (loggedInUser?.email === data.email ||
      loggedInUser?.data?.email === data.email);

  const handleStatusUpdate = (taskIndex, newStatus) => {
    // Allow status updates only for task owners (not admin)
    if (isTaskOwner) {
      updateTaskStatus(data.id, taskIndex, newStatus);
    }
  };

  const renderTask = (task, index) => {
    // Show action buttons only for task owners (not admin)
    const showActions = isTaskOwner;

    if (task.active) {
      return (
        <AcceptTask
          key={`task-${index}`}
          task={task}
          onUpdateStatus={
            showActions
              ? (newStatus) => handleStatusUpdate(index, newStatus)
              : null
          }
          isAdminView={isAdmin}
        />
      );
    }
    if (task.newTask) {
      return (
        <NewTask
          key={`task-${index}`}
          task={task}
          onUpdateStatus={
            showActions
              ? (newStatus) => handleStatusUpdate(index, newStatus)
              : null
          }
          isAdminView={isAdmin}
        />
      );
    }
    if (task.completedTask) {
      return (
        <CompleteTask key={`task-${index}`} task={task} isAdminView={isAdmin} />
      );
    }
    if (task.failedTask) {
      return (
        <FailedTask key={`task-${index}`} task={task} isAdminView={isAdmin} />
      );
    }
    if (task.inProgress) {
      return (
        <InProgress
          key={`task-${index}`}
          task={task}
          onUpdateStatus={
            showActions
              ? (newStatus) => handleStatusUpdate(index, newStatus)
              : null
          }
          isAdminView={isAdmin}
        />
      );
    }
    return null;
  };

  return (
    <div
      id="tasklist"
      className="h-[55%] overflow-x-auto flex items-center justify-start gap-6 flex-nowrap w-full p-4 mt-10"
    >
      {data?.tasks?.map((task, index) => renderTask(task, index))}
      {(!data?.tasks || data.tasks.length === 0) && (
        <div className="w-full text-center text-gray-500">
          No tasks available
        </div>
      )}
    </div>
  );
};

export default TaskList;
