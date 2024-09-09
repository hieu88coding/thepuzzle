import "./styles.css";
import LandingPage from "./pages/landing/LandingPage";
import { ParallaxProvider } from "react-scroll-parallax";
export default function App() {
  return (
    <ParallaxProvider>
      <div className="App">
        <LandingPage />
      </div>
    </ParallaxProvider>

  );
}
