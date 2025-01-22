import Counter from "./components/Counter";
import Header from "./components/Header";
import UserProfile from "./components/UserProfile";
import Auth from "./components/Auth";

import { useSelector } from "react-redux";
import { RootState } from "./store/index";

function App() {
  const isLogin = useSelector((state: RootState) => state.auth.isLogin);

  return (
    <>
      <Header />
      {isLogin ? <UserProfile /> : <Auth />}
      <Counter />
    </>
  );
}

export default App;
