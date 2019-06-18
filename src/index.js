import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Loader from './Loader';

class App extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            lat: null,
            errorMessage: ''
        };

    }
    
    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({ lat: position.coords.latitude });
            },
            (err) => {
                this.setState({ errorMessage: err.message })
            }
        );
    }

    /*
        helper function that will remove the clutter of
        having all these ternaries in the render method of our
        class component
    */
    renderContent() {
        if (this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage}</div>
        }
        if (!this.state.errorMessage && this.state.lat){
            return <div><SeasonDisplay lat={this.state.lat}/></div>
        }
        return <Loader message="Please accept the location request."/>;
    }

    render() {
        return (
            // no matter what case/ternary we fall in, we'll have the following styling
            <div className="border red">
                {this.renderContent()}
            </div>
        );
    }
};

ReactDOM.render(
    <App />,
    document.getElementById('root')
)