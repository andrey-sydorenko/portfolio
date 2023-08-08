import React, { useEffect, useState } from "react";
import "./App.scss";
import Hero from "./components/hero/Hero";
import Experience from "./components/experience/Experience";
import About from "./components/about/About";
import { NotificationContainer } from "react-notifications";
import "react-notifications/lib/notifications.css";

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      const { screenY, screenX } = e;
      setMousePosition({ x: screenX, y: screenY });
    };

    document.addEventListener("mousemove", handleMove);

    return () => {
      document.removeEventListener("mousemove", handleMove);
    };
  }, []);

  // const gradient = useMemo(() => {
  //   return `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`;
  // }, [mousePosition]);

  return (
    <div className="App">
      {/* <div className="App__background" style={{ background: gradient }} /> */}
      <Hero />
      <Experience />
      <About />
      <NotificationContainer />
    </div>
  );
}

export default App;
