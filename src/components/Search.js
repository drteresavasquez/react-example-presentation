import React from 'react';

export default function Search({ setQuery }) {
  const onSubmit = (e) => {
    e.preventDefault();
    setQuery(e.target[0].value);
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
      <div className="row g-3 align-items-center">
        <div className="col-auto">
          <label htmlFor="search-input" className="col-form-label" ></label>
        </div>
        <div className="col-auto">
          <input type="text" id="search-input" placeholder="Search for Images" className="form-control"/>
        </div>
        <button className="btn btn-success">Submit</button>
      </div>
      </form>
    </div>
  )
}
