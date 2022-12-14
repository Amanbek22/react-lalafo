import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import HomePage from "./pages/homePage/HomePage";
import ProductPage from "./pages/productPage/ProductPage";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ErrorBlock from "./components/errorBlock/ErrorBlock";
import LoginPage from "./pages/loginPage/LoginPage";
import DashboardPage from "./pages/dashboardPage/DashboardPage";
import { useEffect } from "react";
import CreateAdPage from "./pages/createAdPage/CreateAdPage";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import PublicRoute from "./components/routes/PublicRoute";
import PrivateRoute from "./components/routes/PrivateRoute";
import {useDispatch} from "react-redux"
import { fetchHouses } from "./redux/housesSlice";
import { fetchCars } from "./redux/carsSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchHouses())
    dispatch(fetchCars())  
  }, []);

  return (
    <div className="App">
      <Header text="Hello" />
      <Routes>
        <Route
          path="/"
          element={<HomePage />}
        />
        <Route path="/product/:product_id" element={<ProductPage />} />
        <Route path="/login" element={
          <PublicRoute>
            <LoginPage />
          </PublicRoute>
        } />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <DashboardPage />
            </PrivateRoute>
          }
        />
        <Route path="/create-ad" element={
          <PrivateRoute>
            <CreateAdPage /> 
          </PrivateRoute>
        }/>
        <Route path="*" element={<ErrorBlock text="Page not found" />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
