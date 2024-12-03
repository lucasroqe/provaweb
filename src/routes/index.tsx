import { BrowserRouter, Route, Routes } from "react-router-dom";
import { BookPage, HomePage } from "../pages";
import Menu from "../components/Menu";

export default function BookRoute() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/books" element={<BookPage />} />
      </Routes>
    </BrowserRouter>
  );
}
