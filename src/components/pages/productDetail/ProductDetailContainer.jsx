import { useEffect, useState } from "react"
import ProductDetail from "./ProductDetail"
import { products } from "../../../productsMock"
import { useParams } from "react-router-dom"



const ProductDetailContainer = () => {

    const [productSelected, setProductSelected] = useState([])

    const {id} = useParams()

    useEffect(()=>{

        let productFind = products.find((product)=> product.id === Number(id))

        const getProduct = new Promise((res)=>{
            res(productFind)
        })

        getProduct
        .then((res)=> setProductSelected(res))
        .catch((err)=> console.log("err", err))
        
    }, [id])

    

  return (
    <ProductDetail productSelected={productSelected}/>
  )
}

export default ProductDetailContainer