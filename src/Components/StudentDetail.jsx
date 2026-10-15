
function StudentDetails({ student }) {
  if (!student) return null;

  const details = [
    ["Full Name", student.name],
    ["Email", student.email],
    ["Phone", student.phone],
    ["Gender", student.gender],
    ["Course", student.course],
    ["Address", student.address],
  ];

  return (
    <div className="mt-6 rounded-xl border border-green-200 bg-green-50 p-5">
      <h2 className="mb-4 text-xl font-bold text-green-800">
        Registration Successful!
      </h2>

      <div className="space-y-3">
        {details.map(([label, value]) => (
          <div
            key={label}
            className="grid grid-cols-[110px_1fr] gap-3 border-b border-green-100 pb-2"
          >
            <span className="font-semibold text-gray-700">
              {label}
            </span>
            <span className="break-words text-gray-800">
              {value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StudentDetails;
