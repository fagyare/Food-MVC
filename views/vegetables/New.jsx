
import React from 'react'

function New() {

    return(
    
    <div>
        <h1>New Vegetable</h1>
            <form>
                <label htmlFor="nme">Name: </label><br/>
                <input type="text" id="nme" /><br/><br/>
                <label htmlFor="clr">Color:</label><br/>
                <input type="text" id="clr" /><br/><br/>
                <label htmlFor="rdy">Ready to Eat: </label>
                <input type="checkbox" id="rdy" /><br/>
                <button>Submit</button>

        </form>

  </div>
    );
}

export default New;
