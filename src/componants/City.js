import React from "react";
import "../style.scss"

class City extends React.Component {
    render() {
        console.log(this.props)
        return (
            <div className="col-sm align-self-center" >
                <div class="gallery">
                <img src={this.props.image} className="img-thumbnail rounded d-block" alt={this.props.name}/>
                <div className="text-center desc">{this.props.name} - {this.props.location} </div> 
                </div>
            </div>
        )
        
    }
}

export default City;