const RadioButton = (props) => {
  return (
    <div>
      <input
        type="radio"
        value={props.year}
        name="status"
        checked={props.userInfo.status === props.year}
        onChange={(e) => {
          props.setUserInfo({ ...props.userInfo, status: e.target.value });
        }}
      />
      <label>{props.year}</label>
    </div>
  );
};

export default RadioButton;
