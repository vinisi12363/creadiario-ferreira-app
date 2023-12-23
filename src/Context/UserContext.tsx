

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { User } from '../Models/User';




interface UserContextType {
  user: User | null;
  fetchUser: (userData: User) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

interface UserProviderProps {
  children: ReactNode;
}

const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const fetchUser = (userData: User) => {
    setUser(userData);
  };

  return (
    <UserContext.Provider value={{ user, fetchUser, }}>
      {children}
    </UserContext.Provider>
  );
};

const useUserContext = (): UserContextType => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error('useUserContext must be used within an AppProvider');
  }

  return context;
};

export { UserProvider, useUserContext };
