import Header from "./components/Header/Header";
import AppRouter from "./components/AppRouter";
import NavBar from "./components/NavBar/NavBar";
import { YMaps } from "@pbe/react-yandex-maps";

const App = () => {
  return (
    <YMaps>
      <Header />
      <NavBar />
      <AppRouter />
    </YMaps>
  );
};

export default App;
