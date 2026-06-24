import React, { createContext, useState, useEffect } from 'react';
import { products as defaultProducts } from '../data/products';
import { db } from '../firebase';
import { collection, onSnapshot, doc, addDoc, updateDoc, deleteDoc, getDocs, setDoc } from 'firebase/firestore';

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const productsCollection = collection(db, 'products');
    
    // Check if empty and seed
    const seedDatabase = async () => {
      try {
        const snapshot = await getDocs(productsCollection);
        if (snapshot.empty) {
          for (const product of defaultProducts) {
            await setDoc(doc(db, 'products', product.id), product);
          }
        }
      } catch (error) {
        console.error("Error seeding database:", error);
      }
    };
    
    seedDatabase().then(() => {
      const unsubscribe = onSnapshot(productsCollection, (snapshot) => {
        const productsData = snapshot.docs.map(doc => ({
          ...doc.data(),
          id: doc.id
        }));
        setProducts(productsData);
        setLoading(false);
      }, (error) => {
        console.error("Error fetching products:", error);
      });

      return () => unsubscribe();
    });
  }, []);

  const addProduct = async (newProduct) => {
    try {
      const productsCollection = collection(db, 'products');
      await addDoc(productsCollection, { ...newProduct, rating: 5, reviews: 0 });
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  const updateProduct = async (updatedProduct) => {
    try {
      const productRef = doc(db, 'products', updatedProduct.id);
      const dataToUpdate = { ...updatedProduct };
      delete dataToUpdate.id; // don't update the id field
      await updateDoc(productRef, dataToUpdate);
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  const deleteProduct = async (id) => {
    try {
      const productRef = doc(db, 'products', id);
      await deleteDoc(productRef);
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  return (
    <ProductContext.Provider value={{ products, addProduct, updateProduct, deleteProduct, loading }}>
      {children}
    </ProductContext.Provider>
  );
};
