const { useState } = React;
const { BrowserRouter, Routes, Route, Link, Navigate } = window.ReactRouterDOM;

const Login = ({ setUserType }) => (
    <div>
        <h2>Login</h2>
        <button onclick={() => setUserType("student")}>Login as Student</button>
        <button onclick={() => setUserType("staff")}>Login as Staff</button>
    </div>
);

const StudentDashboard = () => (
    <div>
        <h2>Student Dashboard</h2>
        <nav>
            <Link to="announcements">Announcements</Link> | 
            <Link to="deptyear">Dept/Year</Link> | 
            <Link to="notes">Notes</Link> | 
            <Link to="events">Events</Link>
        </nav>
        <Routes>
            <Route path="announcements" element={<div>Announcements Page</div>} />
            <Route path="deptyear" element={<div>Department & Year Page</div>} />
            <Route path="notes" element={<div>Notes Page</div>} />
            <Route path="events" element={<div>Events Page</div>} />
        </Routes>
    </div>
);

const StaffDashboard = () => (
    <div>
        <h2>Staff Dashboard</h2>
        <nav>
            <Link to="markentry">Mark Entry</Link> | 
            <Link to="attendance">Daily Attendance</Link> | 
            <Link to="feedback">Feedback</Link> | 
            <Link to="uploadnotes">Upload Notes</Link>
        </nav>
        <Routes>
            <Route path="markentry" element={<div>Mark Entry Page</div>} />
            <Route path="attendance" element={<div>Daily Attendance Page</div>} />
            <Route path="feedback" element={<div>Feedback Page</div>} />
            <Route path="uploadnotes" element={<div>Upload Notes Page</div>} />
        </Routes>
    </div>
);

const Footer = () => (
    <footer>
        <p>Contact: support@example.com | Address: XYZ College, City</p>
    </footer>
);

const App = () => {
    const [userType, setUserType] = useState(null);

    return (
        <BrowserRouter>
            <div>
                {!userType ? (
                    <Login setUserType={setUserType} />
                ) : userType === "student" ? (
                    <StudentDashboard />
                ) : (
                    <StaffDashboard />
                )}
                <Footer />
            </div>
        </BrowserRouter>
    );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);


