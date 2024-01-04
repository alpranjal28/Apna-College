export default function Price({ oldPrice, newPrice }) {
    let oldStyles = {
        textDecorationLine: "line-through",
    };
    let newStyles = {
        fontWeight: "700",
    };
    let styles = {
        backgroundColor: "#ffd814",
        height: "30px",
        width:"auto",
        borderRadius:"5px"
    };
    return (
        <div style={styles}>
            <span style={oldStyles}>{oldPrice}</span>
            &nbsp; &nbsp; &nbsp; &nbsp; 
            <span style={newStyles}>{newPrice}</span>
        </div>
    );
}
