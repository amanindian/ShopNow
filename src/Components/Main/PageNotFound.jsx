import React from 'react'
import { Link } from 'react-router-dom'
import './PageNotFound.css'
import PropTypes from "prop-types";
export default function PageNotFound({ Page_Type }) {
    return (
        <section className='not-found-page'>
            <div className="not-found-box">
                <h1>404</h1>
                <h2>{Page_Type} Not Found</h2>
                <p>Sorry the page you are looking for could not be found <br />if you think something is broken report a problem.</p>
                <div className="report-btns">
                    <Link to='/'>Go to Home Page</Link>
                    <Link to='/contact'>Contact With Us</Link>
                </div>
            </div>
        </section>
    )
}

PageNotFound.defaultProps = {
    Page_Type: `Page`,
};

PageNotFound.propType = {
    Page_Type: PropTypes.string,
};