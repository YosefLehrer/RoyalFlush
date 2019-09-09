import React from 'react'

const ProviderSignupForm = (props) => {
    return (
        <div className="ProviderSignupForm">
            <form onSubmit={props.handleSubmit}>
                <label>Name </label>
                <input onChange={props.handleChange} value={props.providerForm.name} name="name" type="text" placeholder="Name"/> <br/>
                <label>Address </label>
                <input onChange={props.handleChange} value={props.providerForm.address} name="address" type="text" placeholder="Address"/><br/>
                <label>Capacity </label>
                <input onChange={props.handleChange} value={props.providerForm.capacity} name="capacity" type="number" placeholder="Capacity"/><br/>
                <label>Price </label>
                <input onChange={props.handleChange} value={props.providerForm.price} name="price" type="number" placeholder="Price"/><br/>
                <label>Image </label>
                <input onChange={props.handleChange} name="image" type="text" value={props.providerForm.image} placeholder="Image URL"/><br/>
                <input type="submit" value="Enroll" />
            </form>
        </div>
    )
}

export default ProviderSignupForm