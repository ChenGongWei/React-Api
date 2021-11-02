import React from 'react'

class JsxComponent extends React.Component {
    render() {
        return (
            <div className="box">
                <div className="title">生命周期</div>
                <React.Fragment>Flagment</React.Fragment>
                文本
            </div>
        )
    }
}

function createElement() {
    return React.createElement("div", { className: "box" },
        React.createElement("div", { className: "title" }, "\u751F\u547D\u5468\u671F"),
        React.createElement(React.Fragment, null, "Flagment"),
        "\u6587\u672C")
}

class Index extends React.Component {
    render() {
        return (
            <div>
                <div>JSX实现：</div>
                <JsxComponent />
                <br /><br />
                <div>createElement实现：</div>
                {createElement()}
            </div>
        )
    }
}

export default Index