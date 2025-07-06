import { Route, Routes } from "react-router-dom";

import Layout from "./layout/Layout";
import Home from "./pages/Home";

const Router = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  )
}

export default Router