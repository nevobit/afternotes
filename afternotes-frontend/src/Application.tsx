import { Suspense, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LoadingBox } from "./components";
import Home from "./screens/Home";
import NotFound from "./screens/NotFount";
import Signin from "./screens/Signin";

const Application = () => {
  const [userData, setUserData] = useState<{
    email: string;
    password: string;
  }>();

  console.log({ userData });
  return (
    <Suspense fallback={<LoadingBox />}>
      <BrowserRouter>
        <Routes>
          {userData ? (
            <Route path="/" element={<Home email={userData.email} />} />
          ) : (
            <Route path="/" element={<Signin setUserData={setUserData} />} />
          )}
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
};

export default Application;
