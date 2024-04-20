import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Nav from './Component/Nav';
import Footer from './Component/Footer';
import Home from './Component/Home';
import About from './Component/About';
import Contact from './Component/Contact';
import MoveToTop from "./Component/MoveToTop";
import CircleLoader from "react-spinners/CircleLoader";
import "./App.css";

function Apps() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 1900);
  }, []);

  return (
    <div>
      {loading ? (
        <div className="loader">
          <CircleLoader
            color={"#011c38"}
            loading={true}
            size={100}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <>
          <Nav />
          <MoveToTop />

          <TransitionGroup>
            <CSSTransition key={location.key} classNames="fade" timeout={500}>
              <Routes location={location}>
                <Route path="/" element={<Home />} />
                <Route path="/About" element={<About />} />
                <Route path="/Contact" element={<Contact />} />
              </Routes>
            </CSSTransition>
          </TransitionGroup>

          <Footer />
        </>
      )}
    </div>
  );
}

export default Apps;