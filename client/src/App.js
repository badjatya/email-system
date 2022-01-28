// IMPORTING Redux and root reducer
import { Provider } from "react-redux";
import store from "./App/redux/store";

// Importing Components
import Router from "./App/routes/router";
import Navbar from "./App/layout/Navbar";

// Importing Styles
import GlobalStyle from "./App/styles/globalStyles";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <GlobalStyle />
        <Navbar />
        <Router />
      </Provider>
    </div>
  );
}

export default App;
