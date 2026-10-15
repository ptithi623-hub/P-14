
import { useState } from "react";

function StudentForm({ onRegister }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    gender: "",
    course: "",
    address: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onRegister(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="mb-1 block font-medium text-gray-700">
          Full Name
        </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your full name"
          required
          className="w-full rounded-lg border border-gray-300 px-4 py-2 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
        />
      </div>

      <div>
        <label className="mb-1 block font-medium text-gray-700">
          Email
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
          required
          className="w-full rounded-lg border border-gray-300 px-4 py-2 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
        />
      </div>

      <div>
        <label className="mb-1 block font-medium text-gray-700">
          Phone Number
        </label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Enter your phone number"
          pattern="[0-9]{10}"
          title="Enter a 10-digit phone number"
          required
          className="w-full rounded-lg border border-gray-300 px-4 py-2 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
        />
      </div>

      <div>
        <label className="mb-1 block font-medium text-gray-700">
          Gender
        </label>
        <select
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          required
          className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2"
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div>
        <label className="mb-1 block font-medium text-gray-700">
          Course
        </label>
        <select
          name="course"
          value={formData.course}
          onChange={handleChange}
          required
          className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2"
        >
          <option value="">Select Course</option>
          <option value="BCA">BCA</option>
          <option value="BBA">BBA</option>
          <option value="B.Com">B.Com</option>
          <option value="B.Sc IT">B.Sc IT</option>
          <option value="MCA">MCA</option>
        </select>
      </div>

      <div>
        <label className="mb-1 block font-medium text-gray-700">
          Address
        </label>
        <textarea
          name="address"
          value={formData.address}
          onChange={handleChange}
          placeholder="Enter your address"
          required
          rows="3"
          className="w-full rounded-lg border border-gray-300 px-4 py-2 outline-none focus:border-blue-500"
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700"
      >
        Register Student
      </button>
    </form>
  );
}

export default StudentForm;
