import React from 'react'
import BathroomCard from '../components/BathroomCard'
import '../style/Bathrooms.css'

class Bathrooms extends React.Component {
    state = {
        bathroomArray: [],
        selectedToilet: null
    }
    
    handleBathroomClick = (bathroomObj) => {
        this.state.selectedToilet ? this.setState({selectedToilet: null}) : this.setState({selectedToilet: bathroomObj})
    }
    componentDidMount() {
            fetch("http://localhost:3001/locations", {
                headers: {
                    'accept': 'application/json',
                    Latitude: this.props.latitude,
                    Longitude: this.props.longitude
                }
            })
            .then(resp => resp.json())
            .then(data => {this.setState({ bathroomArray: data})})
    }

    takeADuty = () => {
        fetch(`http://localhost:3001/duties`, {
            method: 'POST',
            headers: {
                "accept": 'application/json',
                "content-type": 'application/json'
            },
            body: JSON.stringify({location_id: this.state.selectedToilet.id, token: localStorage.getItem('token')})
        })
        .then(json => json.json())
        .then(data => {
            const bensPrompt = prompt("Please rate your experience from 1 through 5 (5 being really crappy)")
            fetch(`http://localhost:3001/duties/${data.id}`, {
                method: 'PATCH',
                headers: {
                    "accept": 'application/json',
                    "content-type": 'application/json'
                }, 
                body: JSON.stringify({rating: parseInt(bensPrompt)})
            })
            .then(json => json.json())
            .then(data => {
                this.props.handlePromptSubmission(data.name)
                this.setState({bathroomArray: this.state.bathroomArray})})
        })
    }

    render() {

        const bathrooms = this.state.bathroomArray.map(bathroom => <BathroomCard key={bathroom.id} bathroom={bathroom} handleBathroomClick={this.handleBathroomClick} />)
        // const uniqueUserDuties = this.props.userDuties.map(duty => this.state.bathroomArray.find(bath => bath.id === duty.location_id))
        // let finalArray;
        // if (uniqueUserDuties[0]){
        //     finalArray = uniqueUserDuties.map(userDuty => <div key={userDuty.id}>{userDuty.name}<br/><br/></div>)
        // } else {
        //     finalArray = []
        // }
        const finalArray = this.props.userDuties.map(userDuty => <div>{userDuty}<br/><br/></div>)
        return (
            <div className="logged-in-container">
                <div>
                    <strong>Your Recent Duties:<br/></strong>
                {finalArray}
                </div>
                <div className="bathrooms-container">
                {this.state.selectedToilet ? <BathroomCard id="bathroomPopUp" key={this.state.selectedToilet.id} bathroom={this.state.selectedToilet} handleBathroomClick={this.handleBathroomClick } takeADuty={this.takeADuty} /> : bathrooms}
                </div>
            </div>
            )
        }
}

export default Bathrooms
