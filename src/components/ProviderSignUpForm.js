import React from 'react'

const ProviderSignupForm = (props) => {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <label>name</label>
                <input onChange={props.handleChange} value={props.providerForm.name} name="name" type="text" placeholder="Name"/>
                <label>address</label>
                <input onChange={props.handleChange} value={props.providerForm.address} name="address" type="text" placeholder="Address"/>
                <label>capacity</label>
                <input onChange={props.handleChange} value={props.providerForm.capacity} name="capacity" type="number" placeholder="Capacity"/>
                <label>price</label>
                <input onChange={props.handleChange} value={props.providerForm.price} name="price" type="number" placeholder="Price"/>
                <label>image</label>
                <input onChange={props.handleChange} name="image" type="file" />
                <input type="submit" value="Enroll" />
            </form>
        </div>
    )
}

export default ProviderSignupForm