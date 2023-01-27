import React  from 'react'
import SearchBar from './SearchBar'
import { Link } from 'react-router-dom';


function Tabs() {

  const data = async () => {
    try {
      const res = await fetch(`https://test-wrangler.listing.workers.dev/api/get-categories`, {
        method: "GET",

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
                
                })}
                </div>
                
            </div>
        </div>
    </section>

    </>
  )
}

export default Tabs