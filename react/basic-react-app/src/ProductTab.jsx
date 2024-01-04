import Product from "./product";

function ProductTab() {
    let styles = {
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "center",
    };
    return (
        <div style={styles}>
            <Product title="book" idx={0}></Product>
            <Product title="pen" idx={1}></Product>
            <Product title="notecopy" idx={2}></Product>
            <Product title="pencil" idx={3}></Product>
        </div>
    );
}

export default ProductTab;
