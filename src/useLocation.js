import { useEffect, useState } from 'react';
import { setCookie, getCookie } from './menageCookies';
import axios from 'axios';


const useLocation = () => {
    const [lat, setLat] = useState(null);
    const [lng, setLng] = useState(null);
    const [errMsg, setErrMsg] = useState('');

    const setLocCache = ({ latitude, longitude }) => {
        setLng(longitude);
        setCookie('lng', longitude, 1);
        setLat(latitude);
        setCookie('lat', latitude, 1);
    }

    useEffect(() => {
        if (getCookie('lng') && getCookie('lat')) {
            setLng(getCookie('lng'));
            setLat(getCookie('lat'));
        } else {
            if (navigator.geolocation) {
                axios.get('https://api.ipify.org?format=json')
                    .then(({ data }) => {
                        axios.get(`https://www.maxmind.com/geoip/v2.1/city/${data.ip}?demo=1`)
                            .then(({ data }) => {
                                setLocCache(data.location);
                            })
                            .catch(error => {
                                setErrMsg(error.message);
                            });
                    })
                    .catch(error => {
                        setErrMsg(error.message);
                    });
            } else {
                setErrMsg('Geolokacja niedostepna');
            }
        }

    }, []);

    return [lat, lng, errMsg];
};

export default useLocation;