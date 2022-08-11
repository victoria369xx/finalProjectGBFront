import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { ProjectRoutes } from "./routes/ProjectRoutes";
import { persistor, store } from "./store";


function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ProjectRoutes />
      </PersistGate>
    </Provider>
  );
}

export default App;
