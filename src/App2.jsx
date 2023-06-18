import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  sortByPower,
  sortByTime,
  findHighestPower,
  addObject,
} from "./app/features/userList/userListSlice";
import "./App2.scss"; 

export default function App2() {
  const dispatch = useDispatch();
  const objects = useSelector((state) => state.objects) || [];

  const handleSortByPower = () => {
    dispatch(sortByPower());
  };

  const handleSortByTime = () => {
    dispatch(sortByTime());
  };

  const handleFindHighestPower = () => {
    dispatch(findHighestPower());
  };

  const handleAddObject = () => {
    const newObject = {
      id: 5,
      action: "execute",
      power: 15,
      time: "0,2s",
    };
    dispatch(addObject(newObject));
  };

  return (
    <div className="button">
      <button onClick={handleSortByPower} className="button sort-by-power">Sort by Power</button>
      <button onClick={handleSortByTime}className="button sort-by-time">Sort by Time</button>
      <button onClick={handleFindHighestPower} className="button find-highest-power">Find Highest Power</button>
      <button onClick={handleAddObject} className="button add-object">Add Object</button>
      
      <h2>Objects:</h2>
      {objects.length > 0 ? (
        <ul className="object-list"> 
          {objects.map((obj) => (
            <li key={obj.id} className="object-item">
              <strong>ID:</strong> {obj.id}, <strong>Action:</strong> {obj.action},{" "}
              <strong>Power:</strong> {obj.power}, <strong>Time:</strong> {obj.time}
            </li>
          ))}
        </ul>
      ) : (
        <p>No objects found.</p>
      )}
    </div>
  );
}
