import "./Product.css";
import Price from "./Price";

function Product({ title, idx }) {
    let oldPrices = ["300", "20", "50", "5"];
    let newPrices = ["295", "18", "45", "4"];
    let description = [["good read","literature"], ["good write","even flow"], ["50 pages","recycled"], ["2B","erasable"]];

    return (
        <div className="product">
            <p>{title}</p>
            <p>{description[idx][0]}</p>
            <p>{description[idx][1]}</p>
            <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]} />
        </div>
    );
}

export default Product;
