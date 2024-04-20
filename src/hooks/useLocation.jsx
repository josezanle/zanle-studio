"use client"

import { useState, useEffect } from 'react';
import axios from 'axios';

const useLocation = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("https://geoip.api-144.zanle.studio/");
                setData(response?.data);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [url]);

    const countryCode = data?.country

    return { data, countryCode, loading, error };
};

export default useLocation;
