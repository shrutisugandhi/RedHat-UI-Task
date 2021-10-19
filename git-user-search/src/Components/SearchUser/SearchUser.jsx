import React, { useState, useEffect, useCallback, useMemo } from "react";
import debounce from "lodash.debounce";
import "./SearchUser.css";
const SearchUser = React.memo(({ userName }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [foundUser, setFoundUser] = useState([]);

  console.log("userName>>", userName);

  const handleUserInput = (e) => {
    const searchTerm = e.target.value;
    setSearchTerm(searchTerm);
    getUser(searchTerm);
  };
  console.log("search>>", searchTerm);
  const debouncedChangeHandler = useCallback(
    debounce(handleUserInput, 3000),
    []
  );
  const getUser = (searchTerm) => {
    console.log("search1>>", searchTerm);

    if (searchTerm.length > 0) {
      fetch("https://api.github.com/users/" + searchTerm + "/repos")
        .then((res) => res.json())
        .then((data) => {
          console.log("data", data);
          setFoundUser(data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  //   if (searchTerm !== "") {
  //     filteredNames = RepoList.filter((name) => {
  //       return name.toLowerCase().includes(searchTerm.toLowerCase());
  //     });
  //   }
  return (
    <React.Fragment>
      <div className="search_block">
        <input
          type="text"
          placeholder="Search User"
          onChange={debouncedChangeHandler}
        />
      </div>
      {/* {renderFruitList()} */}
      <h4>
        {searchTerm ? <p>{searchTerm}-RepoList</p> : " All User Repos List"}
      </h4>
      <div style={{ overflowX: "auto" }}>
        <table className="Repo_List">
          <thead>
            <tr>
              <th>Owner Name</th>
              <th>Repo Name</th>
              <th>Repos Url</th>
              <th>Description</th>
              <th>Stars</th>
              <th>Open Issue Count</th>
              <th>Watchers</th>
            </tr>
          </thead>
          <tbody>
            {searchTerm.length > 0
              ? React.Children.toArray(
                  foundUser.map((i) => {
                    console.log(i);
                    return (
                      <tr>
                        <td className="owner_details">
                          <img
                            src={i.owner.avatar_url}
                            alt="owner_img"
                            className="owner_img"
                          ></img>
                          <span className="owner_name"> {i.owner.login}</span>
                        </td>
                        <td>
                          {" "}
                          <span className="owner_name"> {i.name}</span>
                        </td>
                        <td>
                          <a href={i.url}>{i.url}</a>
                        </td>
                        <td>
                          {" "}
                          <span className="owner_name"> {i.description}</span>
                        </td>
                        <td>{i.stargazers_count}</td>
                        <td>{i.open_issues_count}</td>
                        <td>{i.watchers_count}</td>
                      </tr>
                    );
                  })
                )
              : React.Children.toArray(
                  userName.map((i) => {
                    return (
                      <tr>
                        <td>
                          <span className="owner_name"> {i.login}</span>
                        </td>
                        <td>
                          <a href={i.url}>{i.url}</a>
                        </td>
                        <td>
                          <a href={i.repos_url}>{i.repos_url}</a>
                        </td>
                        <td>NA</td>
                        <td>NA</td>
                        <td>NA</td>
                        <td>NA</td>
                      </tr>
                    );
                  })
                )}

            {/* {searchTerm.length > 0
            ? foundUser.map((i) => {
                return (
                  <tr>
                    <td>{i.name}</td>
                    <td>
                      <a href={i.full_name}>{i.full_name}</a>
                    </td>
                  </tr>
                );
              })
            : RepoList.map((i) => {
                return (
                  <tr>
                    <td>{i.login}</td>
                    <td>
                      <a href={i.repos_url}>{i.repos_url}</a>
                    </td>
                  </tr>
                );
              })} */}
          </tbody>
        </table>
      </div>
    </React.Fragment>
  );
});
export default SearchUser;
