import { useContext } from "react";
import {AppProvider} from "./Component/Context";
import Modal from "./Component/Modal";
import Sidebar from "./Component/Sidebar";
import Home from "./Component/Home";
function App() {
  return (
    <>
      <div className="container">
        <AppProvider>
          <Home />
          <Modal />
          <Sidebar />
        </AppProvider>
      </div>
    </>
  );
}

export default App;
