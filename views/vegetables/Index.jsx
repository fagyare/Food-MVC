import React from 'react'
// import { index } from '../../controllers/vegetableController';

function Index(props) {
    return (
        <div>
            <h1>Index View</h1>
            <ul>
                {props.vegetables.map((vegetable, index) => 
                    <li key={index}>
                        <a href={`/vegetables/${vegetable._id}`}><strong>{vegetable.name}</strong></a>
                        
                        </li>
                  )}
            </ul>
            <a href="/vegetables/new">Add a veggie</a>

        </div>
    )
}
export default Index;
