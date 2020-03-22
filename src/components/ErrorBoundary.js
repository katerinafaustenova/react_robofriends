import React, {Component} from 'react';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        }
    }

    componentDidCatch(error, info) {
        this.setState({hasError: true})
    }

    render() {
        // pro error
        // if (this.state.hasError) {
        //     return <h1>There is an error, we need to fix it</h1>
        // }
        return this.props.children
    }
}

export default ErrorBoundary;