import React from "react";
import { Route, Routes } from "react-router";
import * as view from "../pages";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<view.HomePage />} />
      <Route path="*" element={<view.NotFound />} />
    </Routes>
  );
};

export default AppRouter;
