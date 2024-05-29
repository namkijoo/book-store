import Layout from "./components/layout/Layout";
import Detail from "./pages/Detail";
import Home from "./pages/Home";
import { GlobalStyle } from "./style/global";
import { ThemeProvider } from "styled-components";
import { light } from "./style/theme";
import ThemeSwitcher from "./components/header/ThemeSwitcher";

function App() {
  return (
    <ThemeProvider theme={light}>
      <GlobalStyle themeName="dark" />
      <ThemeSwitcher />
      <Layout>
        <Home />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
