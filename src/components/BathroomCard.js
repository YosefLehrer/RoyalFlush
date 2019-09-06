import React from 'react'

class BathroomCard extends React.Component {
    render() {

        return (
            <div className="bathroom-card">
                <strong>Name: </strong>{this.props.bathroom.name}<br/>
                <strong> Address: </strong>{this.props.bathroom.address}<br/>
                <strong> Rating: </strong>{this.props.bathroom.rating}<br/>
                <strong> Price: </strong>{this.props.bathroom.price}
            </div>
            )
        }
}

export default BathroomCard