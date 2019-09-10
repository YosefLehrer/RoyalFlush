import React from 'react'

class BathroomCard extends React.Component {
    render() {

        return (
            <div id={ this.props.id ? "bathroomPopUp" : null } className="bathroom-card" onClick={() => this.props.handleBathroomClick(this.props.bathroom)}>
                <strong>Name: </strong>{this.props.bathroom.name}<br/>
                <strong> Address: </strong>{this.props.bathroom.address}<br/>
                <strong> Rating: </strong>{'💩'.repeat(this.props.bathroom.rating)}<br/>
                <strong> Price: </strong>{this.props.bathroom.price}
                <img src={this.props.bathroom.image} alt="" />
                {this.props.id ? <button onClick={this.props.takeADuty}>Take A Dump</button> : null}
            </div>
            )
        }
}

export default BathroomCard