import "./User.css";
import User from "./User";

const UserList = (props) => {
  return (
    <div>
      <div className="user">
        <p>Name</p>
        <p>Age</p>
        <p>Year</p>
        <p>{props.adminMode && "Operation"}</p>
      </div>
      {props.userInfos.map((value, index) => {
        return (
          <div key={index}>
            <User
              userInfo={value}
              adminMode={props.adminMode}
              deleteUser={props.deleteUser}
              index={index}
            />
          </div>
        );
      })}
    </div>
  );
};

export default UserList;
