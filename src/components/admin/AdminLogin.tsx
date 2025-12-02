import { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const AdminLogin = () => {
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Small delay to prevent brute force (optional)
    await new Promise(resolve => setTimeout(resolve, 500));

    const success = login(password);

    if (success) {
      toast.success('Login successful!', { position: 'top-center' });
      navigate('/admin/blog');
    } else {
      toast.error('Incorrect password. Please try again.', { position: 'top-center' });
      setPassword('');
    }

    setIsLoading(false);
  };

  return (
    <div className="admin-login-page">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-5 col-md-7">
            <div className="admin-login-card">
              <div className="admin-login-header">
                <h2>Admin Login</h2>
                <p>Enter your password to access the admin panel</p>
              </div>

              <form onSubmit={handleSubmit} className="admin-login-form">
                <div className="form-group mb-25">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    id="password"
                    className="td-input"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter admin password"
                    required
                    autoFocus
                  />
                </div>

                <button
                  type="submit"
                  className="td-btn td-btn-primary w-100"
                  disabled={isLoading || !password}
                >
                  {isLoading ? 'Logging in...' : 'Login'}
                </button>
              </form>

              <div className="admin-login-footer">
                <small className="text-muted">
                  Forgot your password? Contact the website administrator.
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;


