import React from 'react'

function Show(props) {


    return (
        <div>
        <h1>Show View</h1>
        <p>The <strong>{props.meat.name}</strong> {props.meat.readyToEat ? 'is ready to eat' : 'is NOT ready to eat'}</p>
        <p>Its state is <span style={{ state: props.meat.state }}>{props.meat.state}</span></p>


        <a href={`/meats/${props.meat._id}/edit`}>Edit</a>
        
        <br /><br />


        <form action={`/meats/${props.meat.name}?_method=DELETE`} method="POST">
            <button>Delete</button>
        </form>

        <br />

        

        <a href="/meats">Back</a>
    </div>
    )
}
export default Show;
