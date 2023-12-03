import PropTypes from 'prop-types';

import ButtonBuy from "./ButtonBuy";

const CardProd = ({ prod, onPurchase }) => {



    return (
        <div className="card mb-3">
            <div className="row g-0">
                <div className="col-md-4">
                    <img className="img-fluid rounded-start" src={prod.img} />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h4 className="card-title">{prod.title}</h4>
                        <h5>Descripción</h5>
                        <p className="card-text">{prod.descripcion}</p>
                        <p className="card-text">Precio: $ <small className="text-body-secondary">{prod.precio}</small></p>
                        <p className="card-text">SKU: <small className="text-body-secondary">{prod.SKU}</small></p>
                        <p className="card-text">Cantidad disponible: <small className="text-body-secondary">{prod.cantidad}</small></p>
                        <p className="card-text"><small className="text-body-secondary">ültima actualización hace 3 minutos</small></p>
                        {typeof prod.cantidad === 'number' && prod.cantidad > 0 && <ButtonBuy onClick={onPurchase}/>}
                    </div>
                </div>
            </div>
        </div>

    )

}

CardProd.propTypes = {
    prod: PropTypes.shape({
        img: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        descripcion: PropTypes.string.isRequired,
        precio: PropTypes.string.isRequired,
        SKU: PropTypes.string.isRequired,
        cantidad: PropTypes.any.isRequired,
    }).isRequired,
};

export default CardProd;