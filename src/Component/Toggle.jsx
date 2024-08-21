import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

const Toggle = ({ toggleMode, setToggleMode }) => {
  return (
    <>
      <label className="inline-flex relative -translate-y-[100px] md:-translate-y-[150px] items-center cursor-pointer">
        <input type="checkbox" value="" className="sr-only peer" />
        <div
          onClick={() => setToggleMode((toggleMode) => !toggleMode)}
          className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-primary-lightCyan rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary-neonGreen"
        ></div>
        <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
          {toggleMode ? (
            <FontAwesomeIcon
              className="text-neutral-darkBlue"
              size="xl"
              icon={faSun}
            />
          ) : (
            <FontAwesomeIcon
              className="text-primary-lightCyan"
              size="xl"
              icon={faMoon}
            />
          )}
        </span>
      </label>
    </>
  );
};

export default Toggle;