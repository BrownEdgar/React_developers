import React, { useState } from "react";
import moment from "moment";
import './App.scss'

export default function App () {
  const [users, setUsers] = useState([
    {
      id: 1,
      firstName: "John",
      lastName: "Smith",
      registeredDate: moment(),
      language: "javascript"
    },
    {
      id: 2,
      firstName: "Jane",
      lastName: "Doe",
      registeredDate: moment().subtract(2, "days"),
      language: "react"
    },
    {
      id: 3,
      firstName: "David",
      lastName: "Johnson",
      registeredDate: moment().subtract(5, "hours"),
      language: "node"
    },
    {
      id: 4,
      firstName: "Emily",
      lastName: "Brown",
      registeredDate: moment().subtract(1, "week"),
      language: "HTML&CSS"
    },
    {
      id: 5,
      firstName: "Vardan",
      lastName: "Mamikonyan",
      registeredDate: moment().subtract(3, "weeks"),
      language: "javascript"
    },
    {
      id: 6,
      firstName: "Olivia",
      lastName: "Davis",
      registeredDate: moment().subtract(1, "day"),
      language: "react"
    },
    
  ]);

  const [filterLanguage, setFilterLanguage] = useState(null);
  const [sortedAsc, setSortedAsc] = useState(true);

  const sortUsers = () => {
    const sortedUsers = [...users].toSorted((a, b) =>
      a.registeredDate.isBefore(b.registeredDate) ? -1 : 1
    );
    setUsers(sortedAsc ? sortedUsers : sortedUsers.reverse());
    setSortedAsc(!sortedAsc);
  };


  const filterUsers = (language) => {
    setFilterLanguage(language);
  };

  const filteredUsers = users.filter((user) => {
    if (filterLanguage) {
      return user.language === filterLanguage;
    }
    return true;
  });

  return (
    <div className="user-container">
        <h1>Homework</h1>
        <h2>Full Stack Web Development Course</h2>
      <div className="btns">
        <button onClick={sortUsers}>Sort by Registration Date</button>
        <button onClick={() => filterUsers(null)}>All</button>
        <button onClick={() => filterUsers("javascript")}>JavaScript</button>
        <button onClick={() => filterUsers("react")}>React</button>
        <button onClick={() => filterUsers("node")}>Node</button>
        <button onClick={() => filterUsers("HTML&CSS")}>HTML&CSS</button>
      </div>
      <ul className="user-list">
        {filteredUsers.map((user) => (
          <li
            key={user.id}
            className={
              user.language === "javascript"
                ? "javascript"
                : user.language === "react"
                ? "react"
                : user.language === "node"
                ? "node"
                : "html-css"
            }
          >
            {user.firstName} {user.lastName} ({user.language})
          </li>
        ))}
      </ul>
    </div>
  );
};

