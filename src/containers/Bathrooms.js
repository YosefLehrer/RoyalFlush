import React from 'react'
import BathroomCard from '../components/BathroomCard'


class Bathrooms extends React.Component {
    state = {
        bathroomArray: []
    }
    componentDidMount() {
        fetch("http://localhost:3001/locations")
        .then(resp=>resp.json())
        .then(data => this.setState({ bathroomArray: data}))
    }
    render() {

        const bathrooms = this.state.bathroomArray.map(bathroom => <BathroomCard key={bathroom.id} bathroom={bathroom} />)
        return (
            <div>
                {bathrooms}
            </div>
            )
        }
}

export default Bathrooms
