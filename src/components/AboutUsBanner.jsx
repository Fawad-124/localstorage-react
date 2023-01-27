import React from 'react'
import AboutBanner from '../imgs/AboutBanner.png';
import DropDownMenu from './DropDownMenu';
import SearchBar from './SearchBar';

function AboutUsBanner() {
    const data = async () => {
        try {
          const res = await fetch(`https://test-wrangler.listing.workers.dev/api/get-categories`, {
            method: "GET",
            // headers: {
            //   "X-RapidAPI-Host": "http://localhost:5000",
            // },
          });
          const result = await res.json();
          setCategoriesList(result);
          return result;
        } catch (err) {
          console.log(err.message);
        }
      };
      const [_categoriesList, setCategoriesList] = React.useState([]);
      React.useEffect(() => {
        data();
      }, []);
  return (
    <>
        <section class="banner about-banner">
        <div class="banner-content about-banner-content" style={{backgroundImage: `url(${AboutBanner})`}}>
            <div class="container">
                <h3 class="uppercase orange">about us</h3>
                <p class="uppercase">WE <span class="orange">connects people </span>with great local businesses.</p>
                <div className="nav-banner">
              <ul className="sub-nav-banner d-flex">
                {_categoriesList?.map((element) => {
                  return (
                    <div>
                      <DropDownMenu
                        title={element?.category}
                        data_array={element?.subCategories.map((ele) => {
                          return [ele?.name, ele?.id];
                        })}
                      />
                    </div>
                  );
                })}
              </ul>
              <SearchBar />
            </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default AboutUsBanner