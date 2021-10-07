import { useState } from "react";

const Try = () => {
    const [stuff, setStuff] = useState([
        { title: "becky", author: "ppop", id: 1 } ,
        { title: "saraj", author: "pfsgpop", id: 1 } ,
        { title: "john", author: "ppgsgdsop", id: 1 } ,
    ]);


    return (
        <div className="try">
            {stuff.map((thing) => (
                <div key={thing.id}>
                    <h2>{ thing.title }</h2>
                    <h3>{ thing.author }</h3>
                </div>
            ))}
        </div>
    );
}
 
export default Try;

