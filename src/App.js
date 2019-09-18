import React from 'react';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';
import useLocation from './useLocation';
import Heading from './Heading';


// Create a component

const tempArr = [{
    a: 'Joe',
    b: 'cde',
    email: 123,
    wiek: 12
}];

const App = () => {

    const [lat, lng, errMsg] = useLocation();

    let content;

    if (errMsg) {
        content = <div>Error: {errMsg}</div>
    } else if (lat) {
        content = <SeasonDisplay lat = {lat} lng = {lng} />
    } else {
        content = <Spinner message="Proszę czekać..."/>
    }

    return (
        <div className="border red">
        <Heading head="head" body="body" tempArr={tempArr}/>
    </div>
    );

};



export default App;