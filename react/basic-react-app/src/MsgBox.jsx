function Hello({ Name, Color }) {
    let styles = { color: Color };
    return (
        <>
            <h3 style={styles}>Hello {Name}</h3>
        </>
    );
}

export default Hello;
