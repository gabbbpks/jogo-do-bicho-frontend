
import { useState, useEffect, ReactNode } from "react";

type ToastProps = {
  id?: string;
  title?: string;
  description?: ReactNode;
  action?: ReactNode;
  variant?: "default" | "destructive";
};

type ToastContextType = {
  toasts: ToastProps[];
  toast: (props: ToastProps) => void;
  dismiss: (id: string) => void;
};

// Generate a unique ID
const generateId = (): string => {
  return Math.random().toString(36).substring(2, 9);
};

// Toast hook implementation
export function useToast(): ToastContextType {
  const [toasts, setToasts] = useState<ToastProps[]>([]);

  const toast = (props: ToastProps) => {
    const id = props.id || generateId();
    const newToast = { ...props, id };
    
    setToasts((prevToasts) => [...prevToasts, newToast]);
    
    // Auto dismiss after 5 seconds
    setTimeout(() => {
      dismiss(id);
    }, 5000);
    
    return id;
  };

  const dismiss = (id: string) => {
    setToasts((prevToasts) => prevToasts.filter((t) => t.id !== id));
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      setToasts([]);
    };
  }, []);

  return {
    toasts,
    toast,
    dismiss,
  };
}

// Singleton pattern for use outside of React components
let toastSingleton: ToastContextType;

export const toast = (props: ToastProps) => {
  if (!toastSingleton) {
    // Create a singleton instance if it doesn't exist
    toastSingleton = useToast();
  }
  return toastSingleton.toast(props);
};
