import "./App.css";
import { ThemeProvider } from "./context/ThemeContext";

import Home from "./pages/Home";

function App() {
  return (
    <ThemeProvider>
      <div className="overflow-hidden">
        <Home />
      </div>
    </ThemeProvider>
  );
}

export default App;
