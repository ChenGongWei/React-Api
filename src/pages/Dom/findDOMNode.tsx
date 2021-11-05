import React from 'react'
import ReactDOM from 'react-dom'

class Index extends React.Component {
    componentDidMount() {
        console.log(ReactDOM.findDOMNode(this))
    }

    render() {
        return (
            <div>hello, world</div>
        )
    }
}

export default Index