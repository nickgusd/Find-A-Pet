import { Routes, Route } from "react-router-dom";

import { Home } from "../Home/Home";
import { Cats } from "../Breeds/Cats";
import { Dogs } from "../Breeds/Dogs";

export const Main = () => {
  const notFound = <div>404 Not Found</div>;
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cat-breeds" element={<Cats />} />
        <Route path="/dog-breeds" element={<Dogs />} />
        <Route path="/cat-breeds/*" element={null} />
        <Route path="/dog-breeds/*" element={null} />
        <Route path="/dog/:id/*" element={null} />
        <Route path="/cat/:id/*" element={null} />
        <Route path="/rabbit/:id/*" element={null} />
        <Route path="*" element={notFound} />
      </Routes>
    </div>
  );
};
