// import { BrowserRouter, Route, Routes } from "react-router-dom";
import Hero from "../components/Hero";
import BookCar from "../components/BookCar";
import PlanTrip from "../components/PlanTrip";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Hero />
      <BookCar />
      <PlanTrip />
      <Footer /> 
    </>
  );
}

export default Home;
