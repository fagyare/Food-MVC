import React from 'react'
// import { index } from '../../controllers/meatController';

function Index(props) {
    return (
        <div>
            <h1>Index View</h1>
            <ul>
                {props.meats.map((meat, index) => 
                    <li>
                        <a href={`/meats/${index}`}><strong>{meat.name}</strong></a>
                        
                        </li>
               

                    )}
            </ul>
        </div>
    )
}
export default Index;
