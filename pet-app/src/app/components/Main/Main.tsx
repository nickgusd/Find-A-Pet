import { Routes, Route } from "react-router-dom";

import { Layout } from "../Layout/Layout";
import { Home } from "../../pages/Home";
import { Cats } from "../../pages/Cats";
import { Dogs } from "../../pages/Dogs";
import { Search } from "../../pages/Search";

export const Main = () => {
  const notFound = <div>404 Not Found</div>;
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/breeds" element={null} />
        <Route path="/organizations" element={null} />
        <Route path="/cat-breeds" element={<Cats />} />
        <Route path="/dog-breeds" element={<Dogs />} />
        <Route path="/cat-breeds/*" element={null} />
        <Route path="/dog-breeds/*" element={null} />
        <Route path="/dog/:id/*" element={null} />
        <Route path="/cat/:id/*" element={null} />
        <Route path="/rabbit/:id/*" element={null} />
        <Route path="*" element={notFound} />
      </Routes>
    </Layout>
  );
};
