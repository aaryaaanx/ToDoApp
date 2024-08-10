import React from 'react'
import NavBar from './NavBar'


const SearchToDo = () => {
    return (
        <div>
           <NavBar/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">

                        <div></div>
                        <div className="card text-center bg-info">
                            
                            <div className="card-body">
                                <h2 className="card-text">SEARCH USER</h2>
                                <p className="card-text"></p>
                            </div>
                        </div>

                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">User ID</label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <button className="btn btn-success">Search</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchToDo