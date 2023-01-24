import React from 'react'
import SearchBar from './SearchBar'

function Tabs() {
  return (
    <>
        <section className="tags p-t-90">
        <div className="custom-listing-container">
            <div className="tag-search-content">
                <SearchBar/>
                <div className="d-flex tags-content">
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
                </div>
            </div>
        </div>
    </section>

    </>
  )
}

export default Tabs