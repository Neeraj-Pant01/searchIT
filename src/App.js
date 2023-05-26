import { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import Homepage from "./pages/homepage/Homepage";
import {Routes, Route} from "react-router-dom"
import UserProfile from "./pages/profile/UserProfile";


function App() {
  const [showmenu, setShowmenu] = useState(false)
  return (
    <div className="App">
      <Navbar setShowmenu={setShowmenu} showmenu={showmenu}/>
      <Routes>
        <Route path="/" element={<Homepage setShowmenu={setShowmenu} showmenu={showmenu}/>}></Route>
        <Route path="/profile" element={<UserProfile setShowmenu={setShowmenu} showmenu={showmenu}/>} />
      </Routes>
    </div>
  );
}

export default App;