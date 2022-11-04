const button = document.querySelector(".submit");
const form = document.querySelector(".container");
const afterform = document.querySelector(".after");
const backbutton = document.querySelector("button");

button.addEventListener("click", (event) => {
  event.preventDefault();
  const userName = document.querySelector("#name");
  const age = document.querySelector("#age");
  const userStatus = document.querySelector("input[name='status']:checked");
  const message = document.querySelector("#message");

  if (userName.value && age.value && userStatus) {
    form.style.display = "none";
    afterform.style.display = "block";
    message.innerHTML = `Your name is ${userName.value}, ${age.value} years old, and you are a ${userStatus.value} in UCSD`;
    userName.value = "";
    age.value = null;
    userStatus.checked = false;
  } else {
    alert("Please fill in all the information!");
  }
});

backbutton.addEventListener("click", (event) => {
  event.preventDefault();
  form.style.display = "flex";
  afterform.style.display = "none";
});
