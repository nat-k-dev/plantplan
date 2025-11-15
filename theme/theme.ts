import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        mode: "light",
    
        primary: {
            main: "#2C8C6D",       // darker mint for strong contrast
            light: "#4DBB9C",      // lighter mint for highlights
            dark: "#1F5E48",       // deep mint for hover / dark elements
            contrastText: "#FFFFFF", // white text for high contrast
          },
      
          // Secondary: complementary mint/gold accent
          secondary: {
            main: "#A7D8B1",       // soft mint pastel
            light: "#C9EDD8",      // very light mint
            dark: "#7BB48A",       // deeper mint for hover
            contrastText: "#1F3B2E", // dark text for readability
          },
      
          // Backgrounds
          background: {
            default: "#F0FBF7",    // very light mint/white
            paper: "#FFFFFF",      // pure white for cards/panels
          },
      
          // Text colors
          text: {
            primary: "#1F3B2E",    // dark mint green-gray for high contrast
            secondary: "#4F6B5B",  // slightly lighter for secondary text
          },
      
          // Feedback colors
          success: {
            main: "#34A853",       // vivid green
          },
          error: {
            main: "#D93025",       // red
          },
          warning: {
            main: "#F9AB00",       // yellow/orange
          },
          info: {
            main: "#3C7DFF",       // blue
          },
      },
    
      // Optional: soften default MUI look even more
      shape: {
        borderRadius: 10,
      },
      components: {
        MuiPaper: {
          styleOverrides: {
            root: {
              borderRadius: 12,
            },
          },
        },
        MuiButton: {
          styleOverrides: {
            root: {
              textTransform: "none",
              borderRadius: 8,
            },
          },
        },
      },
});

export default theme;
