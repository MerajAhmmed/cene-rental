import { useState } from "react";
import MovieList from "./cine/MovieList";
import { MovieContext } from "./context";
import Footer from "./Footer";
import Header from "./Header";
import SideBar from "./SideBar";

export default function App() {
  const [cartData, setCartData] = useState([]);
  return (
    <>
      <MovieContext.Provider value={{ cartData, setCartData }}>
        <Header />
        <main>
          <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
            <SideBar />
            <MovieList />
          </div>
        </main>
        <Footer />
      </MovieContext.Provider>
    </>
  );
}
