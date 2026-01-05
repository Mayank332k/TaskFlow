import Login from "./Component/Login";
import Dashboard from "./Component/Dashboard";
import AddData from "./Component/Add-data.jsx";
import { useState } from "react";
import "./App.css";
import { useContext } from "react";
import { AuthContext } from "./Store/Auth-store";
import { TaskProvider } from "./Store/Data-Context.jsx";

function App() {
  const { isAuth } = useContext(AuthContext);
  const [showAddData, setshowAddData] = useState(null);

  return (
    <>
      {!isAuth && <Login />}
      {isAuth && (
        <TaskProvider>
          {!showAddData && <Dashboard setshowAddData={setshowAddData} />}

          {showAddData && (
            <div className="addDataContainer">
              <AddData
                showAddData={showAddData}
                setshowAddData={setshowAddData}
              />
            </div>
          )}
        </TaskProvider>
      )}
    </>
  );
}

export default App;
