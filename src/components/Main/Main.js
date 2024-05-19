import React, { useState, useEffect } from 'react';
import Post from './Post/Post';
import './Main.css';

const Main = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('https://cloud.codesupply.co/endpoint/react/data.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setData(data);
                setLoading(false);
            })
            .catch(error => {
                setError(error);
                setLoading(false);
            });
    }, []);

    return (
        <div className="main">
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error.message}</p>}
            {data && data.map((item, index) => (
                <Post 
                    key={index}
                    title={item.title}
                    text={item.text}
                    tags={item.tags}
                    autor={item.autor}
                    img={item.img}
                    img_2x={item.img_2x}
                    date={item.date}
                    views={item.views}
                />
            ))}
        </div>
    );
};

export default Main;
