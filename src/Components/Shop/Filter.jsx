import React from "react";
import "./Filter.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";


export default function Filter({ CatagValue, setCatagValue, InputFilter, setInputFilter }) {
  return (
    <section id="filter" >
      <div className="filter-box">
        <input type="text" placeholder="Filter Text" className="filter-input" value={InputFilter} onChange={(e) => {
           setInputFilter(e.target.value) 
           }} />

        <select name="category" value={CatagValue} onChange={(e) => {
          setCatagValue(e.target.value)
        }} className="filter-category">
          <option placeholder="Select Category" >Select Category</option>
          <option value="new">New</option>
          <option value="old">Old</option>
          <option value="men">Men</option>
          <option value="women">Women</option>
        </select>
        <FontAwesomeIcon className="filter-button" icon={faMagnifyingGlass} />
      </div>
    </section>
  );
}
