
import React, { createContext, useState, useEffect, ReactNode } from 'react';
import { authAPI } from '../services/api';
import { User, AuthContextType, RegisterUserData } from '../types/auth';
import { setAxiosAuthToken, storeUserData, clearUserData, getStoredUserData } from '../utils/authUtils';

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if user is already logged in
    const userData = getStoredUserData();
    if (userData) {
      console.log('Found stored user data, setting user and verifying with backend');
      setUser(userData.user);
      setAxiosAuthToken(userData.token);
      
      // Verify user with the backend
      authAPI.getUser()
        .then(response => {
          console.log('User verified with backend:', response.data);
          setUser(response.data);
        })
        .catch((error) => {
          // If verification fails, log out
          console.error('User verification failed:', error);
          clearUserData();
          setUser(null);
        })
        .finally(() => {
          setIsLoading(false);
        });
    } else {
      console.log('No stored user data found');
      setIsLoading(false);
    }
  }, []);

  const login = async (cpf: string, senha: string) => {
    try {
      setIsLoading(true);
      console.log('Attempting login with CPF:', cpf);
      const response = await authAPI.login({ cpf, senha });
      const { token, user } = response.data;
      
      console.log('Login successful, storing user data');
      storeUserData(token, user);
      setUser(user);
      return user;
    } catch (error) {
      console.error("Login failed:", error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const verifyCPF = async (cpf: string) => {
    try {
      console.log('Verifying CPF:', cpf);
      const response = await authAPI.verifyCPF(cpf);
      
      // Try to get user info if exists
      if (response.data.userExists) {
        try {
          console.log('User exists, fetching additional info');
          const userInfo = await authAPI.getUserInfo(cpf);
          return {
            ...response.data,
            ...userInfo.data
          };
        } catch (error) {
          console.error("Failed to fetch user info:", error);
          return response.data;
        }
      }
      
      return response.data;
    } catch (error) {
      console.error("CPF verification failed:", error);
      throw error;
    }
  };

  const register = async (userData: RegisterUserData) => {
    try {
      setIsLoading(true);
      console.log('Registering new user with data:', { 
        ...userData, 
        senha: '[REDACTED]' 
      });
      
      const response = await authAPI.register(userData);
      const { token, user } = response.data;
      
      console.log('Registration successful, storing user data');
      storeUserData(token, user);
      setUser(user);
      return user;
    } catch (error) {
      console.error("Registration failed:", error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = async () => {
    try {
      console.log('Logging out user');
      await authAPI.logout();
    } catch (error) {
      console.error("Logout request failed:", error);
    } finally {
      clearUserData();
      setUser(null);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        isLoading,
        login,
        register,
        logout,
        verifyCPF,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = React.useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
