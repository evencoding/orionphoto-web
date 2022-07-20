import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./Pages/About";
import Gallery from "./Pages/Gallery";
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import { ApolloProvider, useReactiveVar } from "@apollo/client";
import GlobalStyles, { darkTheme, lightTheme } from "./GlobalStyles";
import { ThemeProvider } from "styled-components";
import { client, darkModeVar } from "./apollo";

function App() {
  const darkMode = useReactiveVar(darkModeVar);
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <GlobalStyles />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/products" element={<Products />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default App;
