
import React, { createContext, useState } from "react";

// fireBase

import { messaging } from "./firebase";
import Header from "./components/pure/Header";
import Login from "./components/pure/Login";
import Home from "./components/pure/Home";
import Register from "./components/pure/Register";
import { Toaster, toast } from "react-hot-toast";
import { onMessage } from "firebase/messaging"

export const AppContext = createContext(null);


// Nota: OnMessage solo funciona si la ventana se encuentra abierta, en caso contrario no ejecuta

onMessage(messaging, payload => {
  console.log('Nueva notificación en directo', payload);
  toast.custom(t => (
    <div className="bg-orange-300 p-4 rounded-lg shadow-lg">
      <h1 className="text-lg text-white font-semibold">{payload.notification.title}</h1>
      <p className="text-sm text-orange-600">{payload.notification.body}</p>
    </div>
  )
  );
})

function App() {
  const [route, setRoute] = useState("home");
  const [user, setUser] = useState(null);

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
