import React from 'react'

interface WelcomeProps {
    name: string
}

class Welcome extends React.Component<WelcomeProps> {
    render() {
        return <h1>Hello, { this.props.name }</h1>
    }
}

const WelcomeFC:React.FC = () => {
    return (
        <Welcome name="CGW" />
    )
}

export default WelcomeFC