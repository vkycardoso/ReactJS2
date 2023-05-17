import ItemCard from "../../components/itemCard/itemCard"
import { withProductsData } from "./withProductsData"



const ItemList2 = ( {productos, loading, hola} ) => {
    console.log(hola)

    return (
        <div className="container my-5 row">
            {
                loading
                    ? <h2>Cargando</h2>
                    : productos.map((item) => <ItemCard item={item} key={item.id}/>)
            }
        </div>
    )
}

export default withProductsData(ItemList2)