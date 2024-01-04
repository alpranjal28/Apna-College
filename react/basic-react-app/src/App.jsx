import "./App.css";
import ProductTab from "./ProductTab";
import Msgbox from "./MsgBox";
import Button from "./Button";
import Form from "./form";

function App() {
    return (
        <>
            <div>
                <h1>Hello World!</h1>
            </div>
            <div>
                <Msgbox Name={"Pranjal"} Color={"pink"}></Msgbox>
            </div>

            <h2>Blockbuster Deals | Shop Now</h2>
            <ProductTab></ProductTab>
            <Form></Form>
            <br />
            <Button></Button>
        </>
    );
}
export default App;
