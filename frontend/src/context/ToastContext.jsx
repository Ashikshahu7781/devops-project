import { createContext, useContext, useState } from "react";

import ToastContainer from "../components/ui/ToastContainer";

const ToastContext = createContext();

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  const removeToast = (id) => {
    setToasts((prev) =>
      prev.filter((toast) => toast.id !== id)
    );
  };

  const addToast = (message, type = "success") => {
    const id =
      typeof crypto !== "undefined" &&
      crypto.randomUUID
        ? crypto.randomUUID()
        : `${Date.now()}-${Math.random()}`;

    setToasts((prev) => [
      ...prev,
      {
        id,
        message,
        type,
      },
    ]);

    setTimeout(() => {
      removeToast(id);
    }, 4000);
  };

  return (
    <ToastContext.Provider
      value={{
        success: (msg) =>
          addToast(msg, "success"),

        error: (msg) =>
          addToast(msg, "error"),

        warning: (msg) =>
          addToast(msg, "warning"),

        info: (msg) =>
          addToast(msg, "info"),
      }}
    >
      {children}

      <ToastContainer
        toasts={toasts}
        removeToast={removeToast}
      />
    </ToastContext.Provider>
  );
}

export function useToast() {
  return useContext(ToastContext);
}