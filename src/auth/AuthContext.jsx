import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

const LOCAL_USERS_KEY = "talentel_users";
const LOCAL_CURRENT_USER_KEY = "talentel_current_user";

const DEFAULT_USERS = [
  {
    id: 1,
    email: "talent@example.com",
    password: "password123",
    role: "USER",
    user_profile: {
      first_name: "Luca",
      last_name: "Rossi",
      title: "Product Designer",
      bio: "Creo esperienze digitali che funzionano per persone e business.",
      skills: "Design, Figma, User Research",
      portfolio_url: "https://behance.net/lucarossi",
      github_url: "https://github.com/lucarossi",
      figma_url: "https://www.figma.com/@luca",
    },
    company_profile: {},
  },
];

const loadUsers = () => {
  const raw = localStorage.getItem(LOCAL_USERS_KEY);
  if (!raw) {
    localStorage.setItem(LOCAL_USERS_KEY, JSON.stringify(DEFAULT_USERS));
    return DEFAULT_USERS;
  }

  try {
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed) || parsed.length === 0) {
      localStorage.setItem(LOCAL_USERS_KEY, JSON.stringify(DEFAULT_USERS));
      return DEFAULT_USERS;
    }
    return parsed;
  } catch {
    localStorage.setItem(LOCAL_USERS_KEY, JSON.stringify(DEFAULT_USERS));
    return DEFAULT_USERS;
  }
};

const saveUsers = (users) => {
  localStorage.setItem(LOCAL_USERS_KEY, JSON.stringify(users));
};

const loadCurrentUser = () => {
  try {
    const raw = localStorage.getItem(LOCAL_CURRENT_USER_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
};

const saveCurrentUser = (user) => {
  localStorage.setItem(LOCAL_CURRENT_USER_KEY, JSON.stringify(user));
};

const sanitizeUser = (user) => {
  if (!user) return null;
  const { password, ...rest } = user;
  return rest;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const users = loadUsers();
    const current = loadCurrentUser();
    if (current) {
      const found = users.find((item) => item.email === current.email);
      setUser(sanitizeUser(found || current));
    }
    setLoading(false);
  }, []);

  const login = async (email, password) => {
    const users = loadUsers();
    const found = users.find(
      (item) =>
        item.email.toLowerCase() === email.toLowerCase() &&
        item.password === password
    );

    if (!found) {
      return { success: false, error: "Email o password non corretti." };
    }

    const publicUser = sanitizeUser(found);
    setUser(publicUser);
    saveCurrentUser(publicUser);
    return { success: true, user: publicUser };
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem(LOCAL_CURRENT_USER_KEY);
  };

  const register = async (payload) => {
    const users = loadUsers();
    const exists = users.some(
      (item) => item.email.toLowerCase() === payload.email.toLowerCase()
    );
    if (exists) {
      return { success: false, error: "Email già registrata." };
    }

    const newUser = {
      id: Date.now(),
      email: payload.email,
      password: payload.password,
      role: payload.role,
      user_profile: {
        first_name: payload.first_name || "",
        last_name: payload.last_name || "",
        title: payload.title || "",
        bio: payload.bio || "",
        skills: payload.skills || "",
        portfolio_url: payload.portfolio_url || "",
        github_url: payload.github_url || "",
        figma_url: payload.figma_url || "",
      },
      company_profile: {
        company_name: payload.company_name || "",
        industry: payload.industry || "",
        position: payload.position || "",
        company_size: payload.company_size || "",
        description: payload.description || "",
        website: payload.website || "",
      },
    };

    users.push(newUser);
    saveUsers(users);

    const publicUser = sanitizeUser(newUser);
    setUser(publicUser);
    saveCurrentUser(publicUser);

    return { success: true, user: publicUser };
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, register, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
