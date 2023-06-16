import FetchingDatos from "./FetchingDatos"
import { useFetch } from "../../hooks/useFetch"

const FetchingDatosContainer = () => {


    const { data } = useFetch([], "https://jsonplaceholder.typicode.com/users")
    console.log(data)

    const createUser = ()=>{
      let data = {
        name: "pepito",
        userName: "perez",
        email: "pepito@gmail.com"
      }

      const promise = fetch("https://jsonplaceholder.typicode.com/users", {
        method: "POST",
        body: JSON.stringify(data),
      })

      promise
      .then((res)=> res.json())
      .then((data)=> console.log("el usuario se creo", data))
      .catch((err)=> console.log("err", err))
    }


  return (
    <FetchingDatos data={data} createUser={createUser}/>
  )
}

export default FetchingDatosContainer