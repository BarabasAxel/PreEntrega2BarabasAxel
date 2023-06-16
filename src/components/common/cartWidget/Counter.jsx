import { AiOutlineShoppingCart } from 'react-icons/Ai';

const Counter = ({contador, setContador}) => {
  return (
    <div className="d-flex">
        <AiOutlineShoppingCart size="25px"/>
        <h2 onClick={()=> setContador(contador + 1)}>{contador}</h2>
    </div>
  )
}

export default Counter