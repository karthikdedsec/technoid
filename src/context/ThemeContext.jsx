import { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [state, setState] = useState(false);
  const [language, setLanguage] = useState(false);
  const [audio, setAudio] = useState(false);

  return (
    <ThemeContext.Provider
      value={{ state, setState, language, setLanguage, audio, setAudio }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
