
const FetchingDatos = ({data, createUser}) => {
  
    return (
    <div>
        {
            data.map((data)=>{
                return (
                    <div key={data.id}>
                        <h2>{data.name}</h2>

                    </div>
                )
            })
        }
        <button onClick={createUser}>Crear Usuario</button>
    </div>
  )
}

export default FetchingDatos