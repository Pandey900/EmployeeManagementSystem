import React from "react";

const TaskList = ({ data }) => {
  return (
    <div
      id="tasklist"
      className="h-[55%] overflow-x-auto flex items-center justify-start gap-6 flex-nowrap w-full p-4 mt-10"
    >
      <div className="flex-shrink-0 h-full w-[300px] bg-red-400 rounded-lg p-5 ">
        <div className="flex items-center justify-between">
          <h2 className="mt-4 p-4 bg-red-600 rounded-lg font-semibold text-xl">
            High
          </h2>
          <h4 className="mt-4 p-4 bg-red-600 rounded-lg font-semibold text-l">
            07-Feb-2025
          </h4>
        </div>
        <h2 className="text-2xl mt-4 font-semibold">Make A React Project</h2>
        <p className="text-sm mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In molestiae
          rerum excepturi porro, fugit quisquam ducimus praesentium minus dolor
          quia necessitatibus ut voluptas iure natus saepe maxime reiciendis
          incidunt? Vitae?
        </p>
      </div>
      <div className="flex-shrink-0 h-full w-[300px] bg-blue-400 rounded-lg p-5 ">
        <div className="flex items-center justify-between">
          <h2 className="mt-4 p-4 bg-red-600 rounded-lg font-semibold text-xl">
            High
          </h2>
          <h4 className="mt-4 p-4 bg-red-600 rounded-lg font-semibold text-l">
            07-Feb-2025
          </h4>
        </div>
        <h2 className="text-2xl mt-4 font-semibold">Make A React Project</h2>
        <p className="text-sm mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In molestiae
          rerum excepturi porro, fugit quisquam ducimus praesentium minus dolor
          quia necessitatibus ut voluptas iure natus saepe maxime reiciendis
          incidunt? Vitae?
        </p>
      </div>
      <div className="flex-shrink-0 h-full w-[300px] bg-green-400 rounded-lg p-5 ">
        <div className="flex items-center justify-between">
          <h2 className="mt-4 p-4 bg-red-600 rounded-lg font-semibold text-xl">
            High
          </h2>
          <h4 className="mt-4 p-4 bg-red-600 rounded-lg font-semibold text-l">
            07-Feb-2025
          </h4>
        </div>
        <h2 className="text-2xl mt-4 font-semibold">Make A React Project</h2>
        <p className="text-sm mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In molestiae
          rerum excepturi porro, fugit quisquam ducimus praesentium minus dolor
          quia necessitatibus ut voluptas iure natus saepe maxime reiciendis
          incidunt? Vitae?
        </p>
      </div>
      <div className="flex-shrink-0 h-full w-[300px] bg-yellow-400 rounded-lg p-5 ">
        <div className="flex items-center justify-between">
          <h2 className="mt-4 p-4 bg-red-600 rounded-lg font-semibold text-xl">
            High
          </h2>
          <h4 className="mt-4 p-4 bg-red-600 rounded-lg font-semibold text-l">
            07-Feb-2025
          </h4>
        </div>
        <h2 className="text-2xl mt-4 font-semibold">Make A React Project</h2>
        <p className="text-sm mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In molestiae
          rerum excepturi porro, fugit quisquam ducimus praesentium minus dolor
          quia necessitatibus ut voluptas iure natus saepe maxime reiciendis
          incidunt? Vitae?
        </p>
      </div>
      <div className="flex-shrink-0 h-full w-[300px] bg-pink-400 rounded-lg p-5 ">
        <div className="flex items-center justify-between">
          <h2 className="mt-4 p-4 bg-red-600 rounded-lg font-semibold text-xl">
            High
          </h2>
          <h4 className="mt-4 p-4 bg-red-600 rounded-lg font-semibold text-l">
            07-Feb-2025
          </h4>
        </div>
        <h2 className="text-2xl mt-4 font-semibold">Make A React Project</h2>
        <p className="text-sm mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In molestiae
          rerum excepturi porro, fugit quisquam ducimus praesentium minus dolor
          quia necessitatibus ut voluptas iure natus saepe maxime reiciendis
          incidunt? Vitae?
        </p>
      </div>
    </div>
  );
};

export default TaskList;
