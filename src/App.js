import RootLayout from "./shared/components/Layouts/RootLayout";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import StudentsPage from "./pages/Students";
import StudentPage from "./pages/Student";
import AddStudent from "./pages/AddStudent";

const App = () => {
  return (
    <RootLayout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />

        <Route path="/students" element={<StudentsPage />} />
        <Route path="/student/:id" element={<StudentPage />} />
        <Route path="/student/:id/:hello" element={<StudentPage />} />
        <Route path="/student/add" element={<AddStudent />} />
      </Routes>
    </RootLayout>
  );
};

export default App;
