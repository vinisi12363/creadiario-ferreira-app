// Exemplo de arquivo AppContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';




// Definir o tipo do contexto
interface clientContextType {
  client: any | null;
  fetchclient: (clientData) => void;
}

// Criar o contexto
const clientContext = createContext<clientContextType | undefined>(undefined);

// Criar um componente de provedor para envolver a parte do seu aplicativo que precisa do contexto
interface clientProviderProps {
  children: ReactNode;
}

const ClientProvider: React.FC<clientProviderProps> = ({ children }) => {
  const [client, setclient] = useState<any | null>(null);

  const fetchclient = (clientData: any) => {
    setclient(clientData);
  };

  return (
    <clientContext.Provider value={{ client, fetchclient, }}>
      {children}
    </clientContext.Provider>
  );
};

// Criar um hook personalizado para consumir o contexto
const useClientContext = (): clientContextType => {
  const context = useContext(clientContext);

  if (!context) {
    throw new Error('useclientContext must be used within an AppProvider');
  }

  return context;
};

export { ClientProvider, useClientContext };
