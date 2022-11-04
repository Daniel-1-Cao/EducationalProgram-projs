import "./App.css";
import Form from "./Form";
import Return from "./Return";
import UserList from "./UserList";
import { useState } from "react";

function App() {
  const [page, setPage] = useState("Home");
  const [userInfos, setUserInfos] = useState([]);
  const [adminMode, setAdminMode] = useState(false);

  const onHomeBtnClick = (val) => {
    if (val.name && val.age && val.status) {
      if (
        val.name === "admin" &&
        val.age === "123456" &&
        val.status === "Senior"
      ) {
        setAdminMode(true);
      } else {
        setUserInfos([...userInfos, val]);
        setPage("Return");
      }
    } else {
      alert("Please fill in all the information!");
    }
  };

  const onReturnBtnClick = () => {
    setPage("Home");
  };

  const deleteUser = (index) => {
    let newUserInfos = [...userInfos];

    newUserInfos.splice(index, 1);
    setUserInfos(newUserInfos);
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
