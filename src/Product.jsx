import "./Product.css"

function Product(props) {
    console.log(props.title);
    return (
    <div className="Product">
        <h3>Product title</h3>
        <h5>Product Description</h5>
    </div>
    );
}
 export default Product;