import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Error } from "./pages";
import { AppProvider } from "./context";

const App = () => {
  return (
    <AppProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </AppProvider>
  );
};

export default App;
