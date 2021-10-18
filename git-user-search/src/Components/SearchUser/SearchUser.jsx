import React, { useState, useEffect, useCallback } from "react";
import debounce from "lodash.debounce";
import "./SearchUser.css";
const SearchUser = React.memo(() => {
  const [items, setRepoList] = useState([]);
  const [userInput, setUserInput] = useState("");

  useEffect(() => {
    getRepoName();
  }, []);
  const getRepoName = async () => {
    // const response = await fetch("https://api.github.com/users");
    // const Repos = await response.json();
    // console.log("Lst of users", Repos);
    // setRepoList({
    //   ...RepoList,
    //   Repos,
    // });
    // console.log("RepoList of", RepoList);
    //   return Repos;

    fetch("https://api.github.com/users")
      .then((res) => res.json())
      .then((data) => {
        setRepoList(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //console.log("RepoList>>", items);

  const handleUserInput = (e) => {
    console.log("user>>", e.target.value);
    setUserInput(e.target.value);
  };

  const debouncedChangeHandler = useCallback(
    debounce(handleUserInput, 3000),
    []
  );

  //   if (userInput !== "") {
  //     listToDisplay = fruits.filter((fruit) => {
  //       return fruit.includes(userInput);
  //     });
  //   }

  return (
    <React.Fragment>
      <input
        type="text"
        placeholder="Search User"
        onChange={debouncedChangeHandler}
      />
      {/* {renderFruitList()} */}
      <table className="Repo_List">
        <thead>
          <tr>
            <th>Login User</th>
            <th>Repos Url</th>
          </tr>
        </thead>
        <tbody>
          {/* {Repos.map((i) => {
            console.log(i);
            return (
              <tr>
                <td>{i.login}</td>{" "}
                <td>
                  <a href={i.repos_url}>{i.repos_url}</a>
                </td>
              </tr>
            );
          })} */}
          {items && items.length > 0
            ? React.Children.toArray(
                items.map((i) => {
                  return (
                    <tr>
                      <td>{i.login}</td>
                      <td>
                        <a href={i.repos_url}>{i.repos_url}</a>
                      </td>
                    </tr>
                  );
                })
              )
            : "Loading..."}
        </tbody>
      </table>
    </React.Fragment>
  );
});
export default SearchUser;
