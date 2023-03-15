import React from 'react'

function Show(props) {


    return (
        <div>
        <h1>Show View</h1>
        <p>The <strong>{props.vegetable.name}</strong> {props.vegetable.readyToEat ? 'is ready to eat' : 'is NOT ready to eat'}</p>
        <p>Its color is <span style={{ color: props.vegetable.color }}>{props.vegetable.color}</span></p>


        <a href={`/vegetables/${props.vegetable._id}/edit`}>Edit</a>
        
        <br /><br />


        <form action={`/vegetables/${props.vegetable.name}?_method=DELETE`} method="POST">
            <button>Delete</button>
        </form>

        <br />

        

        <a href="/vegetables">Back</a>
    </div>
    )
}
export default Show;
