import { useState } from "react";
import route from "./components/route";
import { RouterProvider } from "react-router-dom";
import { UserContext } from "./components/context/user";

function App() {
  const [menu, setMenu] = useState(false);

  return (
    <UserContext.Provider value={{ menu, setMenu }}>
      <RouterProvider router={route} />;
    </UserContext.Provider>
  );
}

export default App;
