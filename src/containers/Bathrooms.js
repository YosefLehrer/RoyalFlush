import React from 'react'
import BathroomCard from '../components/BathroomCard'
import '../style/Bathrooms.css'




class Bathrooms extends React.Component {
    state = {
        bathroomArray: []
    }
    componentDidMount() {
        fetch("https://evening-reef-72357.herokuapp.com/locations")
        .then(resp=>resp.json())
        .then(data => this.setState({ bathroomArray: data}))
    }
    render() {

        const bathrooms = this.state.bathroomArray.slice(0, 6).map(bathroom => <BathroomCard key={bathroom.id} bathroom={bathroom} />)
        return (
            <div className="bathrooms-container">
                {bathrooms}
            </div>
            )
        }
}

export default Bathrooms
