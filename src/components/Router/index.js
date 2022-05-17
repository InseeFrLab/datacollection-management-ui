import React from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/portail"
          element={
            <>
              <h1>Header</h1>
              <Outlet></Outlet>
            </>
          }
        >
          <Route path="mes-enquetes" element={<h1>Mes enquetes</h1>} />
          <Route path="mon-compte" element={<h1>mon compte</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
