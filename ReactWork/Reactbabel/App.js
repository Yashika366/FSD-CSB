const h2=<h2>Hello</h2>;
const li1=<li>Java</li>;
const li2=<li>HTML</li>;
const ul=<ul>{li1}{li2}</ul>;
const container=(
    <>
    {h2},
    {ul}
    </>
)


root.render(container);