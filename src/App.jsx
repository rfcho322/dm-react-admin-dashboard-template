import {
  Route,
  BrowserRouter,
  Routes,
} from "react-router-dom";
import Home from "./pages/home/Home";
import List from "./pages/list/List";
import Login from "./pages/login/Login";
import New from "./pages/new/New";
import Single from "./pages/single/Single";
import { DarkModeContext } from "./context/darkModeContext";
import { useContext } from "react";

function App() {

  const {darkMode} = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "dark" : ""}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />}/>
            <Route path="login" element={<Login />}/>
            <Route path="/:users">
              <Route index element={<List />} />
              <Route path=":userId" element={<Single />}/>
              <Route path="new" element={<New />}/>
            </Route>
            <Route path="/:products">
              <Route index element={<List />} />
              <Route path=":productId" element={<Single />}/>
              <Route path="new" element={<New />}/>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
