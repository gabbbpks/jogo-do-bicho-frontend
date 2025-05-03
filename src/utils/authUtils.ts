
import { User } from '../types/auth';
import axios from 'axios';

// Set token in axios default headers
export const setAxiosAuthToken = (token: string | null) => {
  if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common['Authorization'];
  }
};

// Store user data in localStorage
export const storeUserData = (token: string, user: User) => {
  localStorage.setItem('auth_token', token);
  localStorage.setItem('user', JSON.stringify(user));
  setAxiosAuthToken(token);
  console.log('User data stored in localStorage:', { token: token.substring(0, 10) + '...', user });
};

// Clear user data from localStorage
export const clearUserData = () => {
  localStorage.removeItem('auth_token');
  localStorage.removeItem('user');
  setAxiosAuthToken(null);
  console.log('User data cleared from localStorage');
};

// Get stored user data from localStorage
export const getStoredUserData = () => {
  const token = localStorage.getItem('auth_token');
  const userStr = localStorage.getItem('user');
  
  if (!token || !userStr) {
    return null;
  }
  
  try {
    const user = JSON.parse(userStr);
    return { token, user };
  } catch (error) {
    console.error('Error parsing stored user data:', error);
    return null;
  }
};

// Check if a CPF is valid using basic validation
export const validateCPF = (cpf: string): boolean => {
  // Remove non-numeric characters
  const cleanCPF = cpf.replace(/\D/g, '');
  
  // Check if it has 11 digits
  if (cleanCPF.length !== 11) {
    return false;
  }
  
  // Check if all digits are the same (invalid case)
  if (/^(\d)\1+$/.test(cleanCPF)) {
    return false;
  }
  
  // Calculate first verification digit
  let sum = 0;
  for (let i = 0; i < 9; i++) {
    sum += parseInt(cleanCPF.charAt(i)) * (10 - i);
  }
  let remainder = 11 - (sum % 11);
  const firstDigit = remainder >= 10 ? 0 : remainder;
  
  // Calculate second verification digit
  sum = 0;
  for (let i = 0; i < 10; i++) {
    sum += parseInt(cleanCPF.charAt(i)) * (11 - i);
  }
  remainder = 11 - (sum % 11);
  const secondDigit = remainder >= 10 ? 0 : remainder;
  
  // Check if the verification digits match
  return (
    parseInt(cleanCPF.charAt(9)) === firstDigit &&
    parseInt(cleanCPF.charAt(10)) === secondDigit
  );
};

// Format a CPF string for display
export const formatCPF = (cpf: string): string => {
  const digits = cpf.replace(/\D/g, '');
  let formattedValue = digits;
  
  if (digits.length > 3) {
    formattedValue = digits.replace(/(\d{3})(\d)/, '$1.$2');
  }
  if (digits.length > 6) {
    formattedValue = formattedValue.replace(/(\d{3})\.(\d{3})(\d)/, '$1.$2.$3');
  }
  if (digits.length > 9) {
    formattedValue = formattedValue.replace(/(\d{3})\.(\d{3})\.(\d{3})(\d)/, '$1.$2.$3-$4');
  }
  
  return formattedValue;
};
