import React, { useState, useEffect, useCallback, useMemo } from "react";
import debounce from "lodash.debounce";
import "./App.css";
import SearchUser from "./Components/SearchUser/SearchUser";

function App() {
  const [RepoList, setRepoList] = useState([]);
  useEffect(() => {
    fetch("https://api.github.com/users")
      .then((res) => res.json())
      .then((data) => {
        setRepoList(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  // const getRepoName = () => {
  //   // const response = await fetch("https://api.github.com/users");
  //   // const Repos = await response.json();
  //   // console.log("Lst of users", Repos);
  //   // setRepoList({
  //   //   ...RepoList,
  //   //   Repos,
  //   // });
  //   // console.log("RepoList of", RepoList);
  //   //   return Repos;

  //   fetch("https://api.github.com/users")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setRepoList(data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  return (
    <div className="App">
      <h5 style={{ color: "blue" }}>
        Toggle Between All User Repo and searched Repo list based on Search
      </h5>
      <SearchUser userName={RepoList}></SearchUser>
    </div>
  );
}

export default App;
