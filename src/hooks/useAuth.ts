import { useRouter } from "@tanstack/react-router";
import { useSyncExternalStore } from "react";

const AUTH_STORAGE_KEY = "isAuthenticated";

type Listener = () => void;

const listeners = new Set<Listener>();

const readSnapshot = () => localStorage.getItem(AUTH_STORAGE_KEY) === "true";

const subscribe = (listener: Listener) => {
  listeners.add(listener);
  window.addEventListener("storage", listener);
  return () => {
    listeners.delete(listener);
    window.removeEventListener("storage", listener);
  };
};

const writeSnapshot = (isAuthenticated: boolean) => {
  if (isAuthenticated) {
    localStorage.setItem(AUTH_STORAGE_KEY, "true");
  } else {
    localStorage.removeItem(AUTH_STORAGE_KEY);
  }
  listeners.forEach((listener) => listener());
};

export const useAuth = () => {
  const router = useRouter();
  const isLogged = useSyncExternalStore(subscribe, readSnapshot, readSnapshot);

  const signIn = () => {
    writeSnapshot(true);
    router.invalidate();
  };

  const signOut = () => {
    writeSnapshot(false);
    router.invalidate();
    router.navigate({ to: "/login", replace: true });
  };

  return { signIn, signOut, isLogged: () => isLogged };
};

export type AuthContext = ReturnType<typeof useAuth>;
