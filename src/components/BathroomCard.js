import React from 'react'

class BathroomCard extends React.Component {
    render() {
        return (
            <div id={ this.props.id ? "bathroomPopUp" : null } className="bathroom-card" onClick={() => this.props.handleBathroomClick(this.props.bathroom)}>
                <div className="bathroom-card-info">
                    <strong>Name: </strong>{this.props.bathroom.name}<br/>
                    <strong> Address: </strong>{this.props.bathroom.address}<br/>
                    <strong> Rating: </strong>{'💩'.repeat(this.props.bathroom.rating)}<br/>
                    <strong> Price: </strong>{this.props.bathroom.price}
                </div>
                {/* <div><iframe src={this.props.map} /></div> */}
                <div className="bathroom-card-img"><img src={this.props.bathroom.image} alt="" /></div>
                {this.props.id ? <button onClick={this.props.takeADuty}>Take A Dump</button> : null}
            </div>
            )
        }
}

export default BathroomCard