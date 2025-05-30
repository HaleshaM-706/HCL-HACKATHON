import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SignOn } from 'slayer/service-layer';

// interface LoginPageProps {
//     setIsLoggedIn: (isLoggedIn: boolean) => void;
// }

const LoginPage: React.FC = () => {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [error, setError] = useState<string>('');
    const navigate = useNavigate();


    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError('');
        const body={
            username:username,
            password:password
        }
        const res= await SignOn(body);
          if(res){
            //   navigate('/dashboard');
          }else {
            setError('Invalid username or password.');
          }
    };

    return (
        <div style={styles.loginContainer}>
            <div style={styles.loginCard}>
                <h2 style={styles.loginTitle}>Admin Login</h2>
                <form onSubmit={handleLogin}>
                    <div style={styles.formGroup}>
                        <label htmlFor="username" style={styles.label}>Username:</label>
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
                        <label htmlFor="password" style={styles.label}>Password:</label>
                        <input
                            type="password"
                            id="password"
                            style={styles.input}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    {error && <p style={styles.errorText}>{error}</p>}
                    <button type="submit" style={styles.loginButton}>Login</button>
                </form>
            </div>
        </div>
    );
};

const styles: { [key: string]: React.CSSProperties } =  {
    loginContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundColor: '#f0f2f5',
    },
    loginCard: {
        backgroundColor: 'white',
        padding: '40px',
        borderRadius: '8px',
        boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
        width: '350px',
        textAlign:"center"
    },
    loginTitle: {
        fontSize: '32px',
        marginBottom: '30px',
        color: '#333',
    },
    formGroup: {
        marginBottom: '20px',
        textAlign:"center"
    },
    label: {
        display: 'block',
        marginBottom: '8px',
        fontSize: '16px',
        color: '#555',
    },
    input: {
        width: 'calc(100% - 20px)',
        padding: '10px',
        border: '1px solid #ddd',
        borderRadius: '5px',
        fontSize: '16px',
    },
    loginButton: {
        backgroundColor: '#3498db',
        color: 'white',
        border: 'none',
        padding: '12px 25px',
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: '18px',
        marginTop: '20px',
        transition: 'background-color 0.3s ease',
        width: '100%',
    },
    errorText: {
        color: '#e74c3c',
        marginTop: '10px',
        fontSize: '14px',
    },
};

export default LoginPage;