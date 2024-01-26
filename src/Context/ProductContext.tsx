import React, { createContext, useContext, useState, ReactNode } from 'react';




interface productContextType {
  product: any | null;
  fetchProduct: (productData) => void;
  selectedProduct: any | null;
  setSelectedProduct: (productData) => void;
}


const productContext = createContext<productContextType | undefined>(undefined);

interface ProductProviderProps {
  children: ReactNode;
}

const ProductProvider: React.FC<ProductProviderProps> = ({ children }) => {
  const [product, setProduct] = useState<any | null>(null);

  const [selectedProduct, setSelectedProduct] = useState({
    nome: "",
    valor: "",
    docId: "",
  });

  const fetchProduct = (productData: any) => {
    setProduct(productData);
  };

  return (
    <productContext.Provider value={{ product, fetchProduct,  selectedProduct , setSelectedProduct }}>
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
