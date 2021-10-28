import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router';
import droid from '../icons/droid.png';

const Filter = props => {
    const[apiId, setApiId] = useState("");
    const[category, setCategory] = useState("");
    const data = props.passedData;
    const history = useHistory();
    const [filter, setFilter] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if(apiId === "" || apiId < 0 || category === 'fail' || category === "") {
            setFilter('fail');
        } else {
            setFilter(category);
            console.log("cat: " + category + "| api: " + apiId)
            axios.get(`https://swapi.dev/api/${category}/${apiId}`).then(resp => data.setData(resp.data))
            history.push(`/${category}/${apiId}`)
            setApiId("")
        }
    }
    const handleCancel = (e) => {
        e.preventDefault();
        console.log(category)
    }

    const Results = (e) => {
        if(filter === "people"){
            return (
                <>
                    <h1 className="mt-6 text-blue-800 font-bold text-lg">Name: {data.data.name}</h1>
                    <p>Height: {data.data.height} cm</p>
                    <p>Mass: {data.data.mass}</p>
                    <p>Hair Color: {data.data.hair_color}</p>
                    <p>Homeworld {data.data.homeworld}</p>
                </>
            )
        } else if(filter === "planets"){
            return (
                <>
                    <h1 className="mt-6 text-green-800 font-bold text-lg">Name: {data.data.name}</h1>
                    <h1>Climate: {data.data.climate}</h1>
                    <p>Terrain: {data.data.terrain} cm</p>
                    <p>Surface Water: {data.data.surface_water}</p>
                    <p>Population: {data.data.population}</p>
                </>
            )
        } else if(filter === "fail"){
            console.log(`%c ERROR: Bad request`, "color:red ; font-size: 15px" );
            return (
                <>
                    <h1 className="mt-6 text-gray-400 font-bold text-lg">These are not the droids you're looking for</h1>
                    <img src={droid} alt="droid" width="400" />
                </>
            )
        } else {
            return null;
        }
    }

    return (
        <>
        <form className="max-w-sm" onSubmit={handleSubmit}>
            <div className="flex items-center border-b border-yellow-500 py-2 bg-gray-50 rounded p-2">
                <select onChange={e => setCategory(e.target.value)} value={category} className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none border-2 border-gray-200 bg-gray-200 rounded" name="" id="">
                    <option value="fail" className="text-gray-600" defaultValue>Select an option </option>
                    <option value="people">Person</option>
                    <option value="planets">World</option>
                </select>
                <label> ID: </label>
                <input onChange={e => setApiId(e.target.value)} value={apiId} type="number" name="id" id="id" className="w-12 text-center rounded bg-gray-200 mx-2 px-2" />
                <button className="flex-shrink-0 bg-yellow-300 hover:bg-yellow-600 border-yellow-400 hover:border-yellow-700 text-sm border-2 text-white py-1 px-2 rounded" type="submit" >
                    Search
                </button>
                <button onClick={handleCancel} className="flex-shrink-0 border-transparent border-4 text-yellow-500 hover:text-yellow-800 text-sm py-1 px-2 rounded" type="button">
                    Cancel
                </button>
            </div>
        </form>
        <Results/>
        </>
    )
}



export default Filter;