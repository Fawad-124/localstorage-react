import React from "react";
import banner from "../imgs/banner.png";
import SearchBar from "./SearchBar";
import DropDownMenu from "./DropDownMenu";
function Banner() {
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
      <section className="banner">
        <div
          className="banner-content"
          style={{ backgroundImage: `url(${banner})` }}
        >
          <div className="container">
            <h2 className="uppercase">
              {" "}
              Lets <span className="orange">Sort out</span> Your problems
            </h2>
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
  );
}

export default Banner;
