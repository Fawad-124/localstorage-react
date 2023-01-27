import React  from 'react'
import SearchBar from './SearchBar'
import Button from 'react-bootstrap/Button'
import ListingBody from './ListingBody';
import { Link } from 'react-router-dom';


function Tabs() {
  const [subId, setSubId] = React.useState(null);

  const data = async () => {
    try {
      const res = await fetch(`https://test-wrangler.listing.workers.dev/api/get-categories`, {
        method: "GET",
        // headers: {
        //   "content-type":"application/json",
        //   "X-RapidAPI-Host": "https://test-wrangler.listing.workers.dev",
        // },
      });
      const result = await res.json();
      setCategoriesList(result);
      return result;
    } catch (err) {
      console.log(err.message);
    };
  }
  
 const [_categoriesList, setCategoriesList] = React.useState([]);
  React.useEffect(() => {
    data();
  }, []);



//   const data1 = async (id) => {
    
//     try {
//       const res = await fetch(
//         `https://test-wrangler.listing.workers.dev/api/get-category-data/${id}`,
//         {
//           method: "GET",
//           // headers: {
//           //   "X-RapidAPI-Host": "http://localhost:5000",
//           // },
//         }
//       );
//       const result = await res.json();
//       setCategoriesList(result);
//       console.log("result", result);
//       return result;
//     } catch (err) {
//       console.log(err.message);
//     }
//   };
// const [_categoriesList, setCategoriesList] = React.useState([]);
//   React.useEffect(() => {
//     data();
//   }, []);
  return (
    <>
        <section className="tags p-t-90">
        <div className="custom-listing-container">
            <div className="tag-search-content">
                <SearchBar/>
                <div className="d-flex tags-content">
                {_categoriesList?.map((cat)=>{
                  return(
                  cat?.subCategories.map((subCat)=>{
                    console.log(subCat.name);
                    const url = `/listing/${subCat.id}`;
                    return(
                 
                   <Link to={url} > {subCat.name}</Link>
                       
                    )
                  }))
                //   return(
                //   cat.subCategories.map((subCat)=>{
                //     console.log(subCat.name);
                //     <div className="d-flex tags-content">
                //       <a href="#">{subCat.name}</a>
                //        </div>
                //   })
                // )
                })}
                </div>
                {/* <div className="d-flex tags-content">
                    <a href="#">All</a>
                    <a href="#">shopping</a>
                    <a href="#">Bars</a>
                    <a href="#">Massage</a>
                    <a href="#">Vintage</a>
                    <a href="#">with gym</a>
                    <a href="#">Kid Friendly</a>
                    <a href="#">Beaches</a>
                    <a href="#">Delivery</a>
                    <a href="#">Contractors</a>
                    <a href="#">Home Cleaner</a>
                    <a href="#">Plumbers</a>
                    <a href="#">Locksmiths</a>
                </div> */}
            </div>
        </div>
    </section>

    </>
  )
}

export default Tabs