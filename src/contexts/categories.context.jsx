
 import { createContext , useState , useEffect} from "react";
import { addCollectionAndDocuments } from "../utils/firebase/firebase.utils.js";
//import SHOP_DATA from "../shop-data.js";
 //cimport SHOP_DATA from '../shop-data.js';
 import {getCategoriesAndDocuments} from '../utils/firebase/firebase.utils.js'

 export const CategoriesContext = createContext({
   categoriesMap: {},
 });

 export const CategoriesProvider = ({ children }) => {
   const [categoriesMap, setCategoriesMap] = useState({});

   useEffect(() => {
     const getCategoriesMap = async () => {
       const categoryMap = await getCategoriesAndDocuments('categories');
       setCategoriesMap(categoryMap);
     };

     getCategoriesMap();
   }, []);

   const value = { categoriesMap };
   return (
     <CategoriesContext.Provider value={value}>
       {children}
     </CategoriesContext.Provider>
   );
 };