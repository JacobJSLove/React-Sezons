import { useEffect, useState } from 'react';
import axios from 'axios';

const useLocation = () => {
    const [lat, setLat] = useState(null);
    const [errMsg, setErrMsg] = useState('');

    useEffect(() => {
        axios.get('https://api.ipify.org?format=json')
            .then(function({ data }) {
                axios.get(`https://www.maxmind.com/geoip/v2.1/city/${data.ip}?demo=1`)
                    .then(function({ data }) {
                        setLat(data.location.latitude);
                    })
                    .catch(function(error) {
                        setErrMsg(error);
                    });
            })
            .catch(function(error) {
                setErrMsg(error);
            });
    }, []);

    return [lat, errMsg];
};

export default useLocation;