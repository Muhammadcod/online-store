import React from 'react'

function Filter() {
  return (
    <>
      <div className="col-md-3  ">
        <div className="sidebar">
          <div className="accordion mb-3" id="accordionExample">
            <div className="card">
              <div className="card-header" id="headingOne">
                <h6 className="mb-0 d-flex justify-content-between">
                  <span>PRODUCT TYPE</span>
                  <span
                    className="btn  p-0"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    #1
                  </span>
                </h6>
              </div>

              <div
                id="collapseOne"
                className="collapse "
                aria-labelledby="headingOne"
                data-parent="#accordionExample"
              >
                <div className="card-body">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="defaultCheck1"
                    />
                    <label className="form-check-label" htmlFor="defaultCheck1">
                      T-Shirt
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="defaultCheck2"
                    />
                    <label className="form-check-label" htmlFor="defaultCheck2">
                      Trouser
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="accordion" id="accordionExample">
            <div className="card">
              <div className="card-header" id="headingOne">
                <h6 className="mb-0 d-flex justify-content-between">
                  <span>PRODUCT TYPE</span>
                  <span
                    className="btn  p-0"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseTwo"
                    aria-expanded="true"
                    aria-controls="collapseTwo"
                  >
                    #1
                  </span>
                </h6>
              </div>

              <div
                id="collapseTwo"
                className="collapse "
                aria-labelledby="headingOne"
                data-parent="#accordionExample"
              >
                <div className="card-body">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="defaultCheck1"
                    />
                    <label className="form-check-label" htmlFor="defaultCheck1">
                      T-Shirt
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="defaultCheck2"
                    />
                    <label className="form-check-label" htmlFor="defaultCheck2">
                      Trouser
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Filter
