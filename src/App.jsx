import { useState } from "react";
import route from "./components/route";
import { RouterProvider } from "react-router-dom";
import { UserContext } from "./components/context/user";
import SmoothScroll from "./components/layout/SmoothScroll";

function App() {
  const [menu, setMenu] = useState(false);

  return (
    <UserContext.Provider value={{ menu, setMenu }}>
      <SmoothScroll>
        <RouterProvider router={route} />;
      </SmoothScroll>
    </UserContext.Provider>
  );
}

export default App;
