import "./App.css";
import Form from "./Form";
import Return from "./Return";
import UserList from "./UserList";
import { useState, useEffect } from "react";

function App() {
  const [page, setPage] = useState("Home");
  const [userInfos, setUserInfos] = useState([]);
  const [adminMode, setAdminMode] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:5000/getusers`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((result) => {
        setUserInfos(result);
      })
      .catch((error) => console.log(error));
  }, []);

  const onHomeBtnClick = (val) => {
    if (val.name && val.age && val.status) {
      if (
        val.name === "admin" &&
        val.age === "123456" &&
        val.status === "Senior"
      ) {
        setAdminMode(true);
      } else {
        fetch(`http://localhost:5000/addppl`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: val.name,
            age: val.age,
            status: val.status,
          }),
        })
          .then((response) => response.json())
          .then((result) => {
            setUserInfos(result);
            setPage("Return");
          })
          .catch((error) => console.log(error));
      }
    } else {
      alert("Please fill in all the information!");
    }
  };

  const onReturnBtnClick = () => {
    setPage("Home");
  };

  const deleteUser = (index) => {
    fetch(`http://localhost:5000/deluser/${index}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((result) => {
        setUserInfos(result);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      {page === "Home" ? (
        <div className="container">
          <h1 className="header">User signup form</h1>
          <Form onBtnClick={onHomeBtnClick} adminMode={adminMode} />
          {adminMode && (
            <button
              onClick={() => {
                setAdminMode(false);
              }}
            >
              Exit Admin Mode
            </button>
          )}
          <hr />
          <div className="userlist">
            {userInfos.length !== 0 && (
              <UserList
                userInfos={userInfos}
                adminMode={adminMode}
                deleteUser={deleteUser}
              />
            )}
          </div>
        </div>
      ) : (
        <div>
          <Return
            userInfo={userInfos[userInfos.length - 1]}
            onBtnClick={onReturnBtnClick}
          />
        </div>
      )}
    </div>
  );
}

export default App;
