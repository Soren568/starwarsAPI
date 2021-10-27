import './App.css';
import Filter from './components/Filter';
import React, {useState} from 'react';

import {
    BrowserRouter,
    Switch,
    Route,
} from "react-router-dom";

function App() {
    const[data, setData] = useState("");

    return (
    <div className="App grid place-items-center pt-5" >
        <BrowserRouter>
            <Switch>
                <Route path="/">
                    <Filter passedData={{data: data, setData:setData}}/>
                </Route>
                <Route path="/:category/:id">
                    <Filter passedData={data, setData}/>
                </Route>
            </Switch>
        </BrowserRouter>
    </div>
);
}
export default App;