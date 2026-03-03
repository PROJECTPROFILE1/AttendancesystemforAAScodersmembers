import axios from "axios";

function Dashboard() {
  const markAttendance = async (status) => {
    await axios.post("http://localhost:5000/api/attendance/mark", {
      userId: "USER_ID",
      status: status,
    });
    alert("Attendance Marked");
  };

  return (
    <div>
      <h1>Smart Attendance</h1>
      <button onClick={() => markAttendance("Present")}>
        Mark Present
      </button>
      <button onClick={() => markAttendance("Absent")}>
        Mark Absent
      </button>
    </div>
  );
}

export default Dashboard;
