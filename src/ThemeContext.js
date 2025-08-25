// src/ThemeContext.js
import { createContext, useContext, useState, useMemo } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const ThemeContext = createContext();

export const useThemeContext = () => useContext(ThemeContext);

export function ThemeContextProvider({ children }) {
  const [themeName, setThemeName] = useState("light");

  // define multiple themes
  const themes = {
    light: createTheme({
      palette: {
        mode: "light",
        primary: { main: "#1976d2" },
        background: { default: "#f5f5f5" },
      },
    }),
    dark: createTheme({
      palette: {
        mode: "dark",
        primary: { main: "#90caf9" },
        background: { default: "#121212" },
      },
    }),
    corporate: createTheme({
      palette: {
        mode: "light",
        primary: { main: "#0d47a1" },
        secondary: { main: "#546e7a" },
        background: { default: "#fafafa" },
      },
      typography: {
        fontFamily: "Roboto, sans-serif",
      },
    }),
    fun: createTheme({
      palette: {
        mode: "light",
        primary: { main: "#ff4081" },
        secondary: { main: "#7c4dff" },
        background: { default: "#fff3e0" },
      },
      typography: {
        fontFamily: "Comic Sans MS, cursive, sans-serif",
      },
    }),
  };

  const theme = useMemo(() => themes[themeName] || themes.light, [themeName]);

  return (
    <ThemeContext.Provider value={{ themeName, setThemeName }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
}
