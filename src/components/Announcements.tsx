const Announcements = () => {
  return (
    <div className='bg-white p-6 rounded-md'>
     <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">Announcements</h1>
        <span className="text-xs font-gray-400">View all</span>
     </div>
     <div className="flex flex-col gap-4 mt-4">


     <div className="bg-assumDevsLight rounded-md p-4">
        <div className="flex items-center justify-between">
            <h2 className="font-medium">New student enrollment</h2>
            <span className="text-xs text-gray-400 bg-white rounded-md px-2 py-2">2026-12-5</span>
        </div>
        <p className="text-sm text-gray-500 mt-2">
          We are excited to announce that enrollment for the upcoming semester is now open. Please visit the admissions office for more information and to submit your application.
        </p>
     </div>
      <div className="bg-assumDevsPurpleLight rounded-md p-4">
        <div className="flex items-center justify-between">
            <h2 className="font-medium"> Student Orientation </h2>
            <span className="text-xs text-gray-400 bg-white rounded-md px-2 py-2">2026-12-5</span>
        </div>
        <p className="text-sm text-gray-500 mt-2">
          Join us for an orientation session to get familiar with the campus and your courses.
        </p>
     </div>
      <div className="bg-assumDevsYellowLight rounded-md p-4">
        <div className="flex items-center justify-between">
            <h2 className="font-medium"> Beginning of Semester </h2>
            <span className="text-xs text-gray-400 bg-white rounded-md px-2 py-2">2026-12-5</span>
        </div>
        <p className="text-sm text-gray-500 mt-2">
          Welcome to the new semester! Please review the course syllabi and ensure all required documents are submitted.
        </p>
     </div>
    </div>
     </div>

  );
};

export default Announcements;