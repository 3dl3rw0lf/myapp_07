import { product } from "../assets/producto";
import CardProd from "../components/CardProd";



const Product = () => {

    const img = product.img;
    const title = product.title;
    const descripcion = product.descripcion;
    const precio = product.precio;
    const SKU = product.SKU;
    let cantidad = product.cantidad;


    cantidad === 0 ?
        cantidad = (<span className="text-danger">SIN STOCK</span>) :
        cantidad;

    return (

        <>
            <CardProd prod={{ img, title, descripcion, precio, SKU, cantidad }} />
        </>

    )
}

export default Product;