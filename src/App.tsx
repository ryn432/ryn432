import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import NavigationBarCamsol1 from "./pages/NavigationBarCamsol1";
import Logo from "./pages/Logo";
import NavigationBarCamsol from "./pages/NavigationBarCamsol";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/logo":
        title = "";
        metaDescription = "";
        break;
      case "/navigation-bar-camsol":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<NavigationBarCamsol1 />} />
      <Route path="/logo" element={<Logo />} />
      <Route path="/navigation-bar-camsol" element={<NavigationBarCamsol />} />
    </Routes>
  );
}
export default App;
