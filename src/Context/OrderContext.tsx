// Exemplo de arquivo AppContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';




// Definir o tipo do contexto
interface orderContextType {
  order: any | null;
  fetchOrder: (orderData) => void;
}

// Criar o contexto
const orderContext = createContext<orderContextType | undefined>(undefined);

// Criar um componente de provedor para envolver a parte do seu aplicativo que precisa do contexto
interface OrderProviderProps {
  children: ReactNode;
}

const OrderProvider: React.FC<OrderProviderProps> = ({ children }) => {
  const [order, setOrder] = useState<any | null>(null);

  const fetchOrder = (orderData: any) => {
    setOrder(orderData);
  };

  return (
    <orderContext.Provider value={{ order, fetchOrder, }}>
      {children}
    </orderContext.Provider>
  );
};

// Criar um hook personalizado para consumir o contexto
const useOrderContext = (): orderContextType => {
  const context = useContext(orderContext);

  if (!context) {
    throw new Error('useOrderContext must be used within an AppProvider');
  }

  return context;
};

export { OrderProvider, useOrderContext };
