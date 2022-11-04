import { useState, useEffect } from "react";
import "./Form.css";
import RadioButton from "./RadioButton";

const Form = (props) => {
  const [userInfo, setUserInfo] = useState({
    name: "",
    age: "",
    status: "",
  });

  useEffect(() => {
    if (props.adminMode) {
      setUserInfo({
        name: "",
        age: "",
        status: "",
      });
    }
  }, [props.adminMode]);

  return (
    <div className="form">
      <label>Name:</label>
      <br />
      <input
        type="text"
        onChange={(e) => {
          setUserInfo({ ...userInfo, name: e.target.value });
        }}
        value={userInfo.name}
      />
      <br />
      <label>Age:</label>
      <br />
      <input
        type="number"
        onChange={(e) => {
          setUserInfo({ ...userInfo, age: e.target.value });
        }}
        value={userInfo.age}
      />
      <p>Your status:</p>
      <div>
        <RadioButton
          year="Freshman"
          userInfo={userInfo}
          setUserInfo={setUserInfo}
        />
        <RadioButton
          year="Sophomore"
          userInfo={userInfo}
          setUserInfo={setUserInfo}
        />
        <RadioButton
          year="Junior"
          userInfo={userInfo}
          setUserInfo={setUserInfo}
        />
        <RadioButton
          year="Senior"
          userInfo={userInfo}
          setUserInfo={setUserInfo}
        />
      </div>
      <button className="submit" onClick={() => props.onBtnClick(userInfo)}>
        Click
      </button>
    </div>
  );
};

export default Form;
