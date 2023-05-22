import "./App.css";
import LoginForm from "./Pages/LoginForm";
import { Route, Routes } from "react-router-dom"
function App() {

  return (
    <Routes>
      <Route path='/' element={<LoginForm />} />
    </Routes>

  );
}

export default App;
