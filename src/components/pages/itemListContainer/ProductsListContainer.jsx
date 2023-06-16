import { useEffect, useState } from 'react'
import ProductsListPresentacional from './ProductsListPresentacional';
import { products } from '../../../productsMock';
import { useParams } from 'react-router-dom';


const ProductsListContainer = () => {

  const [items, setItems] = useState([]); // como trabajamos con arreglos entonces deberiamos de inicializar el useState con arreglos -> []
  const {categoryName} = useParams()

  useEffect(()=>{

    let productosFiltrados = products.filter(e => e.category === categoryName)

    const tarea = new Promise((resolve)=>{
        resolve(categoryName ? productosFiltrados : products)
    });
  
    tarea
      .then((respuesta)=> setItems(respuesta))
      .catch((rechazo)=>{
        console.log(rechazo)
    });

  }, [categoryName]);

  return <ProductsListPresentacional items={items}/>
}

export default ProductsListContainer;