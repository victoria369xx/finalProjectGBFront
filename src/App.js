import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import SignUp from "./components/SignUp";
import { persistor, store } from "./store";

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
       <SignUp/>
      </PersistGate>
    </Provider>
  );
}

export default App;
