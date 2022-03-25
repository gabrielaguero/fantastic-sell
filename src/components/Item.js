import { Link } from "react-router-dom";

const Item = ({img, name, id})=>{
    return(
        <div style={{display:'flex', flexDirection:'column', border: 'solid blue', margin: '10px'}}>
            <img src={img} width="250px" alt='librero' />
            <h3>{name}</h3>
            <Link to={`/detail/${id}`}>Ver detalle</Link>
        </div>
        
    )
}

export default Item;