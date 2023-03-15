
import React from 'react'

function New() {

    return(
    
        <div>
        <h1>New Meat</h1>
        <form action="/meats" method="POST">
            <label htmlFor="nme">Name:</label><br />
            <input type="text" id="nme" name="name" /><br /><br />

            <label htmlFor="ste">State:</label><br />
            <input type="text" id="ste" name="state" /><br /><br />

            <label htmlFor="rdy">Ready To Eat:</label>
            <input type="checkbox" id="rdy" name="readyToEat" /><br /><br />

            <button>Submit</button>
        </form>
    </div>
    );
}

export default New;
