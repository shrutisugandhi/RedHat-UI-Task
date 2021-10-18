import React, { useState, useEffect, useCallback, useMemo } from "react";
import debounce from "lodash.debounce";
import "./SearchUser.css";
const SearchUser = React.memo(() => {
  const [items, setRepoList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [foundUser, setFoundUser] = useState([]);
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
        setFoundUser(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //console.log("RepoList>>", items);

  const handleUserInput = (e) => {
    const keyword = e.target.value;
    if (keyword !== "") {
      console.log("keyword>>", keyword);
      const result = items.filter((item, index) => {
        console.log("items>>", index, ">>>", item);
        return item.login.toLowerCase().startsWith(keyword.toLowerCase());
      });
      console.log("result", result);
      setFoundUser(result);
      console.log("foundUser>.", foundUser);
    } else {
      setFoundUser(items);
    }
    setSearchTerm(keyword);
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
          {foundUser && foundUser.length > 0
            ? React.Children.toArray(
                foundUser.map((i) => {
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
