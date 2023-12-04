// Exemplo de arquivo AppContext.tsx

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { User } from '../Models/User';



// Definir o tipo do contexto
interface UserContextType {
  user: User | null;
  fetchUser: (userData: User) => void;
}

// Criar o contexto
const UserContext = createContext<UserContextType | undefined>(undefined);

// Criar um componente de provedor para envolver a parte do seu aplicativo que precisa do contexto
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

// Criar um hook personalizado para consumir o contexto
const useUserContext = (): UserContextType => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error('useUserContext must be used within an AppProvider');
  }

  return context;
};

export { UserProvider, useUserContext };
