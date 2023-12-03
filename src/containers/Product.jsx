import { useState } from "react";

import Swal from "sweetalert2";

import { product } from "../assets/producto";

import CardProd from "../components/CardProd";

const Product = () => {
	const [purchased, setPurchased] = useState(false);
    const onPurchase = () => setPurchased(true);


	const img = product.img;
	const title = product.title;
	const descripcion = product.descripcion;
	const precio = product.precio;
	const SKU = product.SKU;
	let cantidad = product.cantidad;

	cantidad === 0
		? (cantidad = <span className="text-danger">SIN STOCK</span>)
		: cantidad;

	return (
		<>
			<CardProd
				prod={{ img, title, descripcion, precio, SKU, cantidad }}
				onPurchase={onPurchase}
                
                />
                {purchased &&
                    Swal.fire({
                        position: "top-center",
                        icon: "success",
                        title: "Gracias por su compra!!",
                        showConfirmButton: false,
                        timer: 1500,
                    })}
		</>
	);
};

export default Product;
