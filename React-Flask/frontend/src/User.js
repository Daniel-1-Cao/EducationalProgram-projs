import "./User.css";

const User = (props) => {
  return (
    <div className="user">
      <p>{props.userInfo.name}</p>
      <p>{props.userInfo.age}</p>
      <p>{props.userInfo.status}</p>
      <div>
        {props.adminMode && (
          <button
            className="deleteButton"
            onClick={() => {
              props.deleteUser(props.index);
            }}
          >
            delete
          </button>
        )}
      </div>
    </div>
  );
};

export default User;
