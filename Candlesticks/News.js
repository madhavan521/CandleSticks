import React, { useEffect, useState } from 'react';

const News = () => {
    const [newss, setNewss] = useState([]);

    useEffect(() => {
        const getNews = async () => {
            const url = 'https://nse-market.p.rapidapi.com/stocks?symbol=itc';
            const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Host': 'nse-market.p.rapidapi.com',
                    'X-RapidAPI-Key': '879240fbbemsh2f2900a553fb120p15182cjsn685521dd097e'
                }
            };

            try {
                const response = await fetch(url, options);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const result = await response.json(); // Parse response to JSON
                // Assuming the API response is an array
                setNewss(result || []);
            } catch (error) {
                console.error('Error fetching data:', error);
                // Set newss to an empty array in case of error
                setNewss([]);
            }
        };

        getNews();
    }, []);

    return (
        <div>
            {newss.map((news) => (
                <div key={news.Symbol}>
                    <h1>{news.Symbol}</h1>
                    <img src={news.ChartTodayPath} alt="" />
                </div>
            ))}
        </div>
    );
};

export default News;
