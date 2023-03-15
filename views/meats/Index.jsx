import React from 'react'
// import { index } from '../../controllers/fruitController';

function Index(props) {
    return (
        <div>
            <h1>Index View</h1>
            <ul>
                {props.meats.map((meat, index) => 
                 
                <li key={index}>
                        <a href={`/meats/${meat._id}`}><strong>{meat.name}</strong></a>
                   
                </li>
                )}
            </ul>
            <a href="/meats/new">Add...</a>
        </div>
    )
}
export default Index;
