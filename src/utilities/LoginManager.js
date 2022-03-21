import { getData } from "./signupManager";

const setActiveUser = (userInfo) => {
  localStorage.setItem("activeUser", userInfo);
};

const logInDb = (userInformation) => {
  const { email, password } = userInformation;
  const allData = getData();
  const sendData = {
    isEmailFound: false,
    isPasswordMatched: false,
  };

  for (const data of allData) {
    if (data.email === email) {
      sendData.isEmailFound = true;
      if (data.password === password) {
        sendData.isPasswordMatched = true;
        setActiveUser(data.userName);
      }
      break;
    }
  }
  return sendData;
};

export { logInDb };
