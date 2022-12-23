
import { useContext, createContext, useState } from "react";

// fireBase
import { app } from "./firebase/index"
import Header from "./components/pure/Header";
import Login from "./components/pure/Login";
import Home from "./components/pure/Home";
import Register from "./components/pure/Register";
import { Toaster } from "react-hot-toast";

export const AppContext = createContext();

function App() {
  const [route, setRoute] = useState("home");
  const [user, setUser] = useState(null)
  return (
    <AppContext.Provider value={{ route, setRoute, user, setUser }}>
      <Toaster />
      <Header />
      <main className="p-6">
        {route === "home" && <Home />}
        {route === "login" && <Login />}
        {route === 'register' && <Register />}
        {user && <p>Usuario logueado: {user.email}</p>} 
      </main>
    </AppContext.Provider>
  );
}

export default App;
