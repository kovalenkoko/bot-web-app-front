import "./App.css";
import { Route, Routes } from "react-router";
import { ROUTES } from "./routes";

function App() {
  return (
    <>
      <Routes>
        {ROUTES.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Routes>
    </>
  );
}

export default App;
