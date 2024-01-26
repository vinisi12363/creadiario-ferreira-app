import { Picker } from "@react-native-picker/picker";
import { useProductContext } from "../../../Context/ProductContext";
import { useState } from "react";

export const ProductPicker = () => {
    const { product , setSelectedProduct , selectedProduct} = useProductContext();

  
    return(
        <Picker
        selectedValue={selectedProduct}
        onValueChange={(itemValue) => setSelectedProduct(itemValue)}
      >
        <Picker.Item
          label="Selecione o produto"
          enabled={false}
        ></Picker.Item>
        {product._j.map((p) => (
          <Picker.Item
            key={p.docId}
            label={` ${p.nome} - R$ ${p.valor},00`}
            value={p}
          />
        ))}
      </Picker>
    );

}