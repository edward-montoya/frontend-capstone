import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Layout from "./layout/Layout";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import Booking from "./pages/Booking/Booking";
import { ReservationProvider } from "./context/ReservationContext";

function App() {
  return (
    <>
      <Layout>
        <ReservationProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/reservation" element={<Booking />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </ReservationProvider>
      </Layout>
    </>
  );
}

export default App;
