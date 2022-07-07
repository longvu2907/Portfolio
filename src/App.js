import { AnimatePresence } from "framer-motion";
import { useContext, useEffect, useRef, useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import PreLoader from "./components/PreLoader";
import Projects from "./components/Projects";
import SideBar from "./components/SideBar";
import { NavItemsContext } from "./context/NavItemsProvider";
import "./index.css";

function App() {
  const wrapperRef = useRef(null);
  const { setNavItems } = useContext(NavItemsContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const Scroll = () => {
      if (wrapperRef.current) {
        const elements = [...wrapperRef.current.children];
        const rects = elements.map(el => ({
          y: el.offsetTop,
          h: el.offsetHeight,
        }));
        const currentIndex = rects.findIndex(
          rect =>
            rect.y <= window.scrollY + window.innerHeight / 2 &&
            rect.y + rect.h >= window.scrollY + window.innerHeight / 2,
        );
        const currentEl = [...elements][currentIndex === -1 ? 0 : currentIndex];
        setNavItems(prev =>
          prev.map(item => {
            item.name.toLowerCase() === currentEl.id
              ? (item.active = true)
              : (item.active = false);
            return item;
          }),
        );
      }
    };
    Scroll();

    document.addEventListener("scroll", Scroll);
    return () => document.removeEventListener("wheel", Scroll);
  }, [setNavItems]);

  return (
    <>
      <AnimatePresence initial={true}>
        {isLoading && <PreLoader setIsLoading={setIsLoading} />}
      </AnimatePresence>
      {!isLoading && (
        <>
          <Header />
          <div
            className='font-["Open_Sans"] flex flex-col gap-8 px-4 lg:px-32 overflow-hidden'
            ref={wrapperRef}
          >
            <Home />
            <About />
            <Projects />
            <Contact />
            <SideBar />
            <NavBar />
          </div>
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
