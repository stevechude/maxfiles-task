import { useState } from "react";
import Layout from "./components/layout/Layout";
import { Route, Routes } from "react-router-dom";
import {
  Assigned,
  CheckedOut,
  Dashboard,
  Document,
  FavoriteFiles,
  Unindexed,
} from "./pages/index";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/document" element={<Document />} />
          <Route path="/favorite" element={<FavoriteFiles />} />
          <Route path="/assigned-to" element={<Assigned />} />
          <Route path="/checked-out" element={<CheckedOut />} />
          <Route path="/unindex" element={<Unindexed />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
