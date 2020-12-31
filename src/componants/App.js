import React from "react";
import Container from "./Container"

class App extends React.Component {
    render() {
        return (
            <div className="offset-md-2 container justify-content-md-center">
                <div className="row">
                    <div className="col-sm-2">
                        <div className="jumbotron">
                            
                        </div>
                    </div>
                    <div className="col-sm-10">
                        <Container />
                    </div>
                    </div>
            </div>
        )
    }
}

export default App;
