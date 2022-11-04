import "./Form.css";

const Return = (props) => {
  return (
    <div>
      <h1>You've signed up!</h1>
      <p>
        Your name is {props.userInfo.name}, {props.userInfo.age} years old, and
        you are a {props.userInfo.status} in UCSD
      </p>
      <button className="submit" onClick={() => props.onBtnClick()}>
        Sign up for another account
      </button>
    </div>
  );
};

export default Return;
