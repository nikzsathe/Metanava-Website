import { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';

interface AuthContextType {
  isAuthenticated: boolean;
  login: (password: string) => boolean;
  logout: () => void;
  isChecking: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Admin password - in production, this should be stored in environment variables
const ADMIN_PASSWORD = import.meta.env.VITE_ADMIN_PASSWORD || 'metanova2024';

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [isChecking, setIsChecking] = useState<boolean>(true);

  useEffect(() => {
    // Check if user is already authenticated on mount
    const authStatus = localStorage.getItem('admin_authenticated');
    const authTimestamp = localStorage.getItem('admin_auth_timestamp');
    
    // Check if session is still valid (24 hours)
    if (authStatus === 'true' && authTimestamp) {
      const timestamp = parseInt(authTimestamp, 10);
      const now = Date.now();
      const hoursSinceLogin = (now - timestamp) / (1000 * 60 * 60);
      
      if (hoursSinceLogin < 24) {
        setIsAuthenticated(true);
      } else {
        // Session expired
        localStorage.removeItem('admin_authenticated');
        localStorage.removeItem('admin_auth_timestamp');
      }
    }
    
    setIsChecking(false);
  }, []);

  const login = (password: string): boolean => {
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      localStorage.setItem('admin_authenticated', 'true');
      localStorage.setItem('admin_auth_timestamp', Date.now().toString());
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('admin_authenticated');
    localStorage.removeItem('admin_auth_timestamp');
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, isChecking }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

