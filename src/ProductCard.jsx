import './ProductCard.css';
import Card from './Card.jsx';

const ProductCard = () => {
    return (
        <div className="box">
            <h2>Products List</h2>
            <div className="flex-box">
                <Card productName="Wireless Mouse" price={25.99} Status="In Stock" />
                <Card productName="Keyboard" price={45.5} Status="Out of Stock" />
                <Card productName="Monitor" price={199.99} Status="In Stock" />
            </div>
        </div>
    );
};

export default ProductCard;