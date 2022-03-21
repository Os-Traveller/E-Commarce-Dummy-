// * Independent Functions
const getData = () => JSON.parse(localStorage.getItem("users"));
const sendData = (data) => localStorage.setItem("users", JSON.stringify(data));

// * Dependent functions
const ispassMatched = (pass, confirmPass) => pass === confirmPass;
const isUserNameUnique = (userName, allData) => {
  for (const data of allData) {
    if (data.userName === userName) {
      return false;
    }
    return true;
  }
};

const isEmailUnique = (email, allData) => {
  for (const data of allData) {
    if (data.email === email) {
      return false;
    }
  }
  return true;
};

// * Creating New Account
const signUpDataToDb = (userInformaition) => {
  const { userName, email, password, confirmPass } = userInformaition;

  // * loding all data from local storage
  let allData = getData();
  const response = {
    passMatch: ispassMatched(password, confirmPass),
    uniqueUsername: true,
    uniqueEmail: true,
  };

  if (response.passMatch) {
    if (!allData) {
      // * if no data is in local storage
      allData = [userInformaition];
      sendData(allData);
      return response;
    }
    response.uniqueEmail = isEmailUnique(email, allData);
    response.uniqueUsername = isUserNameUnique(userName, allData);
    if (response.uniqueEmail && response.uniqueUsername) {
      allData.push(userInformaition);
      sendData(allData);
      return response;
    }
  } else {
    response.passMatch = false;
  }
  return response;
};
export { getData, signUpDataToDb, sendData };
