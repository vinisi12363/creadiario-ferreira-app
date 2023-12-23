// Exemplo de arquivo AppContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';




interface productContextType {
  product: any | null;
  fetchProduct: (productData) => void;
}


const productContext = createContext<productContextType | undefined>(undefined);

interface ProductProviderProps {
  children: ReactNode;
}

const ProductProvider: React.FC<ProductProviderProps> = ({ children }) => {
  const [product, setproduct] = useState<any | null>(null);

  const fetchProduct = (productData: any) => {
    setproduct(productData);
  };

  return (
    <productContext.Provider value={{ product, fetchProduct, }}>
      {children}
    </productContext.Provider>
  );
};


const useProductContext = (): productContextType => {
  const context = useContext(productContext);

  if (!context) {
    throw new Error('useProductContext must be used within an AppProvider');
  }

  return context;
};

export { ProductProvider, useProductContext };
