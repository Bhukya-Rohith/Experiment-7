import './Card.css';

const Card = ({ productName, price, Status}) => {
    return (
        <div className="card">
            <h3>{productName}</h3>
            <p>Price: ${price}</p>
            <p>Status: {Status}</p>
        </div>
    );
};

export default Card;