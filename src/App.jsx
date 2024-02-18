import WelcomePage from "@pages/WelcomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="home" element={<WelcomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
