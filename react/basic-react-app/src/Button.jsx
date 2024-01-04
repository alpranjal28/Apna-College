function clickOne() {
    console.log("on single click");
}

function clickDouble() {
    console.log("double click");
}

function btnHover() {
    console.log("Isko button ko dabao");
}

function Button() {
    return (
        <div>
            <button
                onClick={clickOne}
                onDoubleClick={clickDouble}
                onMouseOver={btnHover}
            >
                Button dabao
            </button>
        </div>
    );
}

export default Button;
