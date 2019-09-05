import React from 'react'

class BathroomCard extends React.Component {
    render() {

        return (
            <div>
                <strong>Name: </strong>{this.props.bathroom.name} 
                <strong> Address: </strong>{this.props.bathroom.address} 
                <strong> Rating: </strong>{this.props.bathroom.rating} 
                <strong> Price: </strong>{this.props.bathroom.price}
            </div>
            )
        }
}

export default BathroomCard