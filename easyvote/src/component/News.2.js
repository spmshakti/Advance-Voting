import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';

function News2() {

    const [data, setData] = useState([]);
    useEffect(() => {
        fetch("https://newsapi.org/v2/everything?q=keyword&apiKey=de8a823678984ee2af1c550fdd1cec75")
        .then((result) => {
            result.json().then((res) => {
            setData(res.articles);
            });
        });
    }, []);

  return (
    <div className="container">
      <h1 className="text-center mt-5">News Section</h1>
      <div className="row justify-content-center mt-5">
        <div className="col-8">
          <Carousel>
            {data.map((item, index) => (
              <Carousel.Item key={index}>
                <img
                  className="d-block w-100"
                  src={item.urlToImage}
                  alt="Slide"
                />
                <Carousel.Caption>
                  {/* <h3>{item.author}</h3> */}
                  {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default News2;
