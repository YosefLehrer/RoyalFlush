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
        navigator.geolocation.getCurrentPosition((pos) => {
            const usersLocation = pos.coords
            const {latitude, longitude} = usersLocation
            fetch("http://localhost:3001/locations", {
                headers: {
                    'accept': 'application/json',
                    Latitude: latitude,
                    Longitude: longitude
                }
            })
            .then(resp => resp.json())
            .then(data => this.setState({ bathroomArray: data}))
        })
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
            const bensPrompt = prompt("Please rate your experience")
            fetch(`http://localhost:3001/duties/${data.id}`, {
                method: 'PATCH',
                headers: {
                    "accept": 'application/json',
                    "content-type": 'application/json'
                }, 
                body: JSON.stringify({rating: parseInt(bensPrompt)})
            })
            .then(json => json.json())
            .then(data => console.log(data))
        })
    }

    render() {

        const bathrooms = this.state.bathroomArray.map(bathroom => <BathroomCard key={bathroom.id} bathroom={bathroom} handleBathroomClick={this.handleBathroomClick}/>)
        return (
            <div className="bathrooms-container">
                {this.state.selectedToilet ? <BathroomCard id="bathroomPopUp" key={this.state.selectedToilet.id} bathroom={this.state.selectedToilet} handleBathroomClick={this.handleBathroomClick } takeADuty={this.takeADuty} /> : bathrooms}
            </div>
            )
        }
}

export default Bathrooms
