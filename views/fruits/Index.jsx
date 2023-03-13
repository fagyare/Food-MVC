import React from 'react'
// import { index } from '../../controllers/fruitController';

function Index(props) {
    return (
        <div>
            <h1>Index View</h1>
            <ul>
                {props.fruits.map((fruit, index) => 
                 
                <li key={index}>
                        <a href={`/fruits/${index}`}><strong>{fruit.name}</strong></a>
                   
                </li>
                )}
            </ul>
            <a href="/fruits/new">Add...</a>
        </div>
    )
}
export default Index;
