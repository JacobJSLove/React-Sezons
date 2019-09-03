import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';
import useLocation from './useLocation';

// Creat a component

const App = () => {

    const [lat, lng, errMsg] = useLocation();

    let content;

    if (errMsg) {
        content = <div>Error: {errMsg}</div>
    } else if (lat) {
        content = <SeasonDisplay lat={lat} lng={lng} />
    } else {
        content = <Spinner message="Proszę czekać..."/>
    }

    return (
        <div className="border red">
			{content}
		</div>
    );
}


// Show a component
ReactDOM.render(<App />, document.querySelector('#root'));