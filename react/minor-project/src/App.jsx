import "./App.css";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import SearchBox from "./SearchBox";

function App() {
    let btnclick = () => {
        console.log("button was clicked");
    };
    return (
        <>
            <h1>Material UI</h1>
            <SearchBox></SearchBox>

            <br />
            <br />
            <br />
            <Button
                onClick={btnclick}
                color="error"
                size="small"
                variant="contained"
            >
                <DeleteIcon></DeleteIcon>
                Hey Button!
            </Button>
        </>
    );
}

export default App;
