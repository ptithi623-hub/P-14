import { useState } from "react";
import StudentForm from "./Components/StudentForm";
import StudentDetails from "./Components/StudentDetail";

function App() {
  const [student, setStudent] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-indigo-200 px-4 py-10">
      <div className="mx-auto max-w-xl rounded-2xl bg-white p-6 shadow-xl sm:p-8">
        <h1 className="mb-2 text-center text-3xl font-bold text-blue-700">
          Student Registration
        </h1>

        <p className="mb-6 text-center text-gray-500">
          Fill in your details to register
        </p>

        <StudentForm onRegister={setStudent} />

        <StudentDetails student={student} />
      </div>
    </div>
  );
}

export default App;
