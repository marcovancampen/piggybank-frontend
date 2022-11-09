import './Login.css';
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();

    const loginAsUser = (userId) => {
        if (userId === 1) {
            localStorage.setItem('userData', JSON.stringify({ userId: 1 }));
        } else if (userId === 2) {
            localStorage.setItem('userData', JSON.stringify({ userId: 2 }));
        } else if (userId === 3) {
            localStorage.setItem('userData', JSON.stringify({ userId: 3 }));
        } else if (userId === 4) {
            localStorage.setItem('userData', JSON.stringify({ userId: 4 }));
        }
        navigate(`/`);
    }


    return (
        <>
            <h1>Login</h1>
            <div className="container">
                <h2>Kies een account</h2>
                <div className="login__account-selector">
                    <button onClick={() => loginAsUser(1)} className="login__account">
                        <div>
                            <img src="/images/melvin.png" alt="Melvin avatar" />
                        </div>
                        <div>
                            Melvin
                        </div>
                    </button>
                    <button onClick={() => loginAsUser(2)} className="login__account">
                        <div>
                            <img src="/images/sara.png" alt="Sara avatar" />
                        </div>
                        <div>
                            Sara
                        </div>
                    </button>
                    <button onClick={() => loginAsUser(3)} className="login__account">
                        <div>
                            <img src="/images/cem.png" alt="Cem avatar" />
                        </div>
                        <div>
                            Cem
                        </div>
                    </button>
                    <button onClick={() => loginAsUser(4)} className="login__account">
                        <div>
                            <img src="/images/sophie.png" alt="Sophie avatar" />
                        </div>
                        <div>
                            Sophie
                        </div>
                    </button>

                </div>
            </div>
        </>
    );
}

export default Login;