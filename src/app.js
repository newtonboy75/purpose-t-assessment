import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./Pages/HomePage";
import FormBuilder from "./Pages/FormBuilder";
import Header from "./components/header";
import FormPage from "./Pages/FormPage";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<HomePage />} />
        <Route path="/form-builder" element={<FormBuilder />} />
        <Route path="/form-builder/view/:formid" element={<FormPage />} />
      </>
    )
  );
  // };

  return (
    <div className="App">
      <Header />
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
