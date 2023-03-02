import { Routes, Route } from "react-router-dom";

import { Layout } from "../Layout/Layout";
import { Home } from "../../pages/Home";
import { Cats } from "../../pages/Cats";
import { Dogs } from "../../pages/Dogs";
import { Search } from "../../pages/Search";
// import { Breeds } from "../../pages/Breeds";
import { Animal } from "../../pages/Animal";
import { Organizations } from "../../pages/Organizations";
import { NotFound } from "../../pages/NotFounds";
import { Favorites } from "../../pages/Favorites";
import { ProtectedRoute } from "../ProtectedRoute/ProtectedRoute";

export const Main = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={null} />
        <Route path="/login" element={null} />
        <Route path="/search" element={<Search />} />
        {/* <Route path="/breeds" element={<Breeds />} /> */}
        <Route path="/organizations" element={<Organizations />} />
        <Route
          path="/favorites"
          element={
            <ProtectedRoute>
              <Favorites />
            </ProtectedRoute>
          }
        />
        <Route path="/cat-breeds" element={<Cats />} />
        <Route path="/dog-breeds" element={<Dogs />} />
        <Route path="/cat-breeds/*" element={null} />
        <Route path="/dog-breeds/*" element={null} />
        <Route path="/dog/:id/*" element={<Animal />} />
        <Route path="/cat/:id/*" element={<Animal />} />
        <Route path="/rabbit/:id/*" element={<Animal />} />
        <Route path="/parrot/:id/*" element={<Animal />} />
        <Route path="/bird/:id/*" element={<Animal />} />
        <Route path="/barnyard/:id/*" element={<Animal />} />
        <Route path="/horse/:id/*" element={<Animal />} />
        <Route path="/goat/:id/*" element={<Animal />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
};
