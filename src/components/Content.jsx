import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../styles/content.css';
import Loader from './loader';
import TimeAgo from './TimeAgo';

const Content = ({ endpoint, title }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/${endpoint}`);
        setData(response.data);
      } catch (err) {
        setError(err.message || 'Error fetching stories');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [endpoint]);

  if (loading) return <Loader />;
  if (error) return <div className='error'>{error}</div>;

  return (
    <div className="content">
      <div className="content-header">
        <h1>Top 10 Hacker {title}</h1>
      </div>
      <div className="content-list">
        {data?.map((item, index) => (
          <div className='content-item' key={index}>
            <Link to={item.url} target="_blank" rel="noopener noreferrer">
              {item.title + ' '} {'( ' + item.author + ' )'}
            </Link>
            <div className='content-info'>
              <span className='score'>{item.score} Points &nbsp;</span>
              <span className='author'>by {item.author}&nbsp;</span>
              <span className='time'>{TimeAgo(item.time)}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Content