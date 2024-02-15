import React, { createContext, useContext, useState, ReactNode } from 'react';




interface orderContextType {
  order: any | null;
  fetchOrder: (orderData) => void;
  orderCardData: any | null;
  chooseOrderCard: (orderData) => void;
}


const orderContext = createContext<orderContextType | undefined>(undefined);


interface OrderProviderProps {
  children: ReactNode;
}

const OrderProvider: React.FC<OrderProviderProps> = ({ children }) => {
  const [order, setOrder] = useState<any | null>(null);
  const [orderCardData, setOrderData] = useState<object>({});

  const fetchOrder = (orderData: any) => {
    setOrder(orderData);
  };
  const chooseOrderCard = (orderData: any) => {
    setOrderData(orderData);
  };
  return (
    <orderContext.Provider value={{ order, fetchOrder, orderCardData, chooseOrderCard }}>
      {children}
    </orderContext.Provider>
  );
};


const useOrderContext = (): orderContextType => {
  const context = useContext(orderContext);

  if (!context) {
    throw new Error('useOrderContext must be used within an AppProvider');
  }

  return context;
};

export { OrderProvider, useOrderContext };
