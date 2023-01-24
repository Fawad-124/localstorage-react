import React from 'react'
import banner from '../imgs/banner.png';
import search from '../imgs/icons/search.png';
import SearchBar from './SearchBar';
import HoverMenuButton from './DropDown';
import Dropdown  from './DropDownMenu'
import { Container } from 'reactstrap';
// import "@reach/menu-button/styles.css";

function Banner() {

    const data = async () => {
        try {
          const res = await fetch(`http://localhost:5000/api/get-categories`, {
            method: 'GET',
            headers: {
              'X-RapidAPI-Host': 'http://localhost:5000',
            },
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
            <div className="banner-content" style={{backgroundImage: `url(${banner.src})`}}>
                <div className="container">
                    <h2 className="uppercase"> Lets <span className="orange">Sort out</span> Your problems</h2>
                    <div className="nav-banner">
                        <ul className="sub-nav-banner d-flex">
                            {_categoriesList?.map((element)=>{
                                
                                return(
                                    <div>
                                    <HoverMenuButton   title={element.category} data_array={element.subCategories.map((ele)=>{ return [ele.name,ele.id] })} />
                                    {/* <Dropdown title={element.category} data_array={element.subCategories.map((ele)=>{ return ele.name})}/>  */}
                                    </div>
                                    

                                    
                                    // <li className="nav-item dropdown">
                                    //     <a aria-expanded="false" className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button">
                                       
                                    //     
                                    //     </a>

                                    // </li>
                                )

                            })}
                            {/* {a?.map((val) => {return(<li className="nav-item dropdown">
                            <a aria-expanded="false" className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button"> 
                            <HoverMenuButton   title={val} />
                            <Image src={arrowdown} alt="..." width={11} height={7}/>
                            
                            </a>
                            <ul className="dropdown-menu">
                           
                                
                            </ul>
                        </li>)}
                            
                            
                            ) } */}
                            
                            {/* <li className="nav-item dropdown">
                                <a aria-expanded="false" className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button">RESTURANTS 
                                <Image src={arrowdown} alt="..." width={11} height={7}/>

                                </a>
                                <ul className="dropdown-menu">
                                    <li>
                                        <a className="dropdown-item" href="#">Action</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a aria-expanded="false" className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button">TOP DESTINATIONS 
                                <Image src={arrowdown} alt="..." width={11} height={7}/>

                                </a>
                                <ul className="dropdown-menu">
                                    <li>
                                        <a className="dropdown-item" href="#">Action</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a aria-expanded="false" className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button">HOME SERRVICES 
                                <Image src={arrowdown} alt="..." width={11} height={7}/>

                                </a>
                                <ul className="dropdown-menu">
                                    <li>
                                        <a className="dropdown-item" href="#">Action</a>
                                    </li>
                                </ul>
                            </li> */}
                            {/* <li className="nav-item dropdown">
                                <a aria-expanded="false" className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button">more 
                                <Image src={arrowdown} alt="..." width={11} height={7}/>

                                </a>
                                <ul className="dropdown-menu">
                                    <li>
                                        <a className="dropdown-item" href="#">Action</a>
                                    </li>
                                </ul>
                            </li> */}
                        </ul>
                        {/* <form className="d-flex search-banner justify-content-center" role="search">
                            <input className="form-control me-2" type="text" placeholder="Search" aria-label="Search"/>
                            <button type="submit"><Image src={search} alt="..." width={18} height={18}/></button>
                        </form> */}
                        <SearchBar/>
                        <Container>
                        
                        </Container>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Banner