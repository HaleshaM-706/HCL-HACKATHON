import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Dropdown from "./dropdown";

const Staff: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [role, setRole] = useState("admin");
  const [depart, setDepartment] = useState("Cardiology");

  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    if (username === "admin" && password === "password") {
      // localStorage.setItem('token', 'dummy-jwt-token');
      // setIsLoggedIn(true);
      navigate("/dashboard");
    } else {
      setError("Invalid username or password.");
    }
  };

  const roleOptions = [
    { value: "admin", label: "Admin" },
    { value: "staff", label: "Staff" },
    { value: "viewer", label: "Viewer" },
  ];

  const department = [
    { value: 'cardiology', label: 'Cardiology' },
    { value: 'neurology', label: 'Neurology' },
    { value: 'orthopedics', label: 'Orthopedics' },
    { value: 'pediatrics', label: 'Pediatrics' },
  ];

  const handleRoleChange = (newRole: string) => {
    setRole(newRole);
    console.log("Selected Role:", newRole);
  };

  const handleDepartmentChange = (department: string) => {
    console.log("Selected Role:", department);
  };

  return (
    <div style={styles.loginContainer}>
      <div style={styles.loginCard}>
        <h2 style={styles.loginTitle}>Staff</h2>
        <form onSubmit={handleLogin}>
          <div style={styles.formGroup}>
            <label htmlFor="username" style={styles.label}>
              Username:
            </label>
            <input
              type="text"
              id="username"
              style={styles.input}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div style={styles.formGroup}>
            <label htmlFor="role" style={styles.label}>
             Select Role:
            </label>
            <div>
              <Dropdown
                options={roleOptions}
                selected={role}
                onChange={handleRoleChange}
              />
            </div>
          </div>
          <div style={styles.formGroup}>
            <label htmlFor="role" style={styles.label}>
             Select Department:
            </label>
            <div>
              <Dropdown
                options={department}
                selected={depart}
                onChange={handleRoleChange}
              />
            </div>
          </div>
          <div style={styles.formGroup}>
            <label htmlFor="username" style={styles.label}>
              PhoneNo:
            </label>
            <input
              type="number"
              id="username"
              style={styles.input}
              value={username}
              max={10}
              maxLength={10}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          {error && <p style={styles.errorText}>{error}</p>}
          <button type="submit" style={styles.loginButton}>
            Add Staff
          </button>
        </form>
      </div>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  loginContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // minHeight: '100vh',
    backgroundColor: "#f0f2f5",
  },
  loginCard: {
    backgroundColor: "white",
    padding: "40px",
    borderRadius: "8px",
    boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
    width: "350px",
    textAlign: "center",
  },
  loginTitle: {
    fontSize: "32px",
    marginBottom: "30px",
    color: "#333",
  },
  formGroup: {
    marginBottom: "20px",
    textAlign: "center",
  },
  label: {
    display: "block",
    marginBottom: "8px",
    fontSize: "16px",
    color: "#555",
  },
  input: {
    width: "94%",
    padding: "10px",
    border: "1px solid #ddd",
    borderRadius: "5px",
    fontSize: "16px",
  },
  loginButton: {
    backgroundColor: "#3498db",
    color: "white",
    border: "none",
    padding: "12px 25px",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "18px",
    marginTop: "20px",
    transition: "background-color 0.3s ease",
    width: "100%",
  },
  errorText: {
    color: "#e74c3c",
    marginTop: "10px",
    fontSize: "14px",
  },
};

export default Staff;
