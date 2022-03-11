import React from "react";

const Alert = ({ error, alert }) => {
  return (
    <>
      <div
        className={`${
          alert && error === "edited" ? "opacity-1" : "opacity-0"
        } top-20 absolute transition-all duration-1000 p-4 mb-4 text-sm text-blue-700 bg-blue-100 rounded-lg dark:bg-blue-200 dark:text-blue-800`}
        role="alert"
      >
        <span className="font-medium">Edited item!</span>
      </div>
      <div
        className={`${
          alert && error === "length" ? "opacity-1" : "opacity-0"
        } top-20 absolute transition-all duration-1000 p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800`}
        role="alert"
      >
        <span className="font-medium">Alert! </span> You can only list 9 grocery
        items.
      </div>
      <div
        className={`${
          alert && error === "created" ? "opacity-1" : "opacity-0"
        } top-20 absolute transition-all duration-1000 p-4 mb-4 text-sm text-green-700 bg-green-100 rounded-lg dark:bg-green-200 dark:text-green-800`}
        role="alert"
      >
        <span className="font-medium">Item added to the list! </span>
      </div>
    </>
  );
};

export default Alert;
