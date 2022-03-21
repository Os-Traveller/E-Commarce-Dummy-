import "./App.css";
import Header from "./Components/header/Header";

function App() {
  // * User data
  const allusers = {
    users: {
      faisal: {
        email: "faisal@gmail.com",
        password: "fuck_you",
        cart: ["product_1"],
      },
    },
  };
  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
