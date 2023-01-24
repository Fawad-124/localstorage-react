import Image from 'next/image';
import React from 'react';
import Map from './Map';
import filter from '/public/imgs/icons/filter.png';
import listingOne from '/public/imgs/listingOne.png';
import review from '/public/imgs/review.png';
import verify from '/public/imgs/verify.png';
import service from '/public/imgs/service.png';
import discount from '/public/imgs/discount.png';
import message from '/public/imgs/icons/message.png';
import graph from '/public/imgs/icons/search.png';
import Paginaton from './Paginaton';
import { useState } from 'react';

function ListingBody({id}) {
  // const [flag,setFlag] = useState(false)
  const data = async () => {
    console.log(id,'iiidd')
    try {
      const res = await fetch(`http://localhost:5000/api/get-category-data/5`, {
        method: 'GET',
        headers: {
          'X-RapidAPI-Host': 'http://localhost:5000',
        },
      });
      const result = await res.json();
      // setCategoriesList(result);
      console.log("result", result)
      // setFlag(true)
      return result;
    } catch (err) {
      console.log(err.message);
    }
  };


  const [_categoriesList, setCategoriesList] = React.useState([]);
  // console.log(_categoriesList)
  React.useEffect(() => {
    const result = data();
    console.log("usefect result", result)
    setCategoriesList(result)
  }, []);

  React.useEffect(() => {
    console.log("here",_categoriesList)
  }, [_categoriesList]);
  
  
  // console.log(_categoriesList)
  return (
    <>
      <section className="listings">
        <div className="custom-listing-container">
          <div className="listing-content">
            <div className="row">
              <div className="col-md-8">
                <div className="filters-listing d-flex">
                  <p>Over 1,000 homes</p>
                  <button className="ms-auto">
                    <Image src={filter} alt="..." width={14} height={14} />
                    Filters
                  </button>
                </div>
                {_categoriesList.length > 0 && _categoriesList?.map((val) => {
                  // eslint-disable-next-line react/jsx-key
                  return (<div className="list-box d-flex">
                      <div className="list-box-thumb">
                        <Image
                          src={listingOne}
                          alt="..."
                          width={150}
                          height={150}
                        />
                      </div>
                      <div className="list-text">
                        <div className="d-flex title-address">
                          <div className="title-review-status">
                            <h5>{val.name}</h5>
                            <div className="review-total">
                              <p>
                                <Image
                                  src={review}
                                  alt="..."
                                  width="14"
                                  height={14}
                                />{' '}
                                {val.rating} ·&nbsp;
                                <span>{val.rating_count} reviews</span>
                              </p>
                              <label className="d-inline-block">
                                {val.menu_type}
                              </label>
                            </div>
                          </div>
                          <p className="ms-auto">
                            1070 Quesada Ave Bayview-Hunters Point
                          </p>
                        </div>
                        <div className="list-services mt-2 d-flex">
                          <div className="d-flex align-items-center service-box">
                            <Image
                              src={verify}
                              alt="..."
                              width={14}
                              height={14}
                            />
                            <p>Verified License</p>
                          </div>
                          <div className="d-flex align-items-center service-box">
                            <Image
                              src={service}
                              alt="..."
                              width={14}
                              height={14}
                            />
                            <p>Emergency services</p>
                          </div>
                          <div className="d-flex align-items-center service-box">
                            <Image
                              src={discount}
                              alt="..."
                              width={14}
                              height={14}
                            />
                            <p>Discounts available</p>
                          </div>
                        </div>
                        <div className="list-info d-flex">
                          <Image
                            src={message}
                            alt="..."
                            width="16"
                            height="16"
                          />
                          <p>{val.description}</p>
                        </div>
                        <div className="respond-request d-flex align-items-center">
                          <div className="respond-text">
                            <p>
                              Responds in about<span>10 minutes</span>
                            </p>
                            <span>
                              <Image
                                className="me-1"
                                src={graph}
                                alt="..."
                                width="16"
                                height="16"
                              />
                              1,255 locals recently requested a quote
                            </span>
                          </div>
                          <button className="ms-auto">Request a Quote</button>
                        </div>
                      </div>
                    </div>
                  );
                })}
                <Paginaton />
              </div>
              <Map />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ListingBody;
