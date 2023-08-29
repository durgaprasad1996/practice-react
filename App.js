// nested elements

const parent = React.createElement("div",
    { id: "prarent" },
    React.createElement("div", { id: "child" }, React.createElement("h1", {}, "Nested elemets examples"))
)



// const heading = React.createElement(
//     "h1", { id: "heading" }, "hello from React!"
// );

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);