import React from "react";
import City from "./City";

class Container extends React.Component {
    render() {
        return (
            <div className="jumbotron">
                <div className="row">
                    <div className="col-sm-5 offset-md-3">
                        <form className="form-inline" id="search-bar" method="post" >
                            <input 
                            type="text"
                            className="form-control form-control-sm ml-3 w-7" 
                            name="search-input" 
                            ref="search-input"
                            aria-label="Search"
                            placeholder="City"
                            /> 
                            <button className="btn btn-outline-warning btn-rounded btn-sm my-0" type="submit">Search</button>
                        </form>
                    </div>
                </div>
                <div className="row">
                    <h3>Favorite City</h3>
                </div>
                <div className="row">
                    <div className="col-sm">
                        <City />
                    </div>
                    <div className="col-sm">
                        <City />
                    </div>
                    <div className="col-sm">
                        <City />
                    </div>
                    <div className="col-sm">
                        <City />
                    </div>
                    <div className="col-sm">
                        <City />
                    </div>
                </div>
            </div>
        )
    }
}

export default Container;