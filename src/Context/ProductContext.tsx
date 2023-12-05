// Exemplo de arquivo AppContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';




// Definir o tipo do contexto
interface productContextType {
  product: any | null;
  fetchproduct: (productData) => void;
}

// Criar o contexto
const productContext = createContext<productContextType | undefined>(undefined);

// Criar um componente de provedor para envolver a parte do seu aplicativo que precisa do contexto
interface productProviderProps {
  children: ReactNode;
}

const productProvider: React.FC<productProviderProps> = ({ children }) => {
  const [product, setproduct] = useState<any | null>(null);

  const fetchproduct = (productData: any) => {
    setproduct(productData);
  };

  return (
    <productContext.Provider value={{ product, fetchproduct, }}>
      {children}
    </productContext.Provider>
  );
};

// Criar um hook personalizado para consumir o contexto
const useProductContext = (): productContextType => {
  const context = useContext(productContext);

  if (!context) {
    throw new Error('useProductContext must be used within an AppProvider');
  }

  return context;
};

export { productProvider, useProductContext };
