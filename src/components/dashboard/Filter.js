import React from 'react'
import { MdKeyboardArrowUp } from 'react-icons/md'

const colors = [
  '#B80000',
  '#DB3E00',
  '#FCCB00',
  '#008B02',
  '#006B76',
  '#000000',
]
const sizes = ['XS', ' S ', ' M ', ' L ', 'XL', 'XXL']

function Filter() {
  // const { icon, setIcon } = useState(false)

  return (
    <>
      <div className="col-md-3  ">
        <div className="sidebar pt-2">
          <div className="accordion mb-3" id="accordionExample">
            <div className="card">
              <div className="card-header" id="headingOne">
                <h6 className="mb-0 d-flex justify-content-between align-items-center">
                  <span>PRODUCT TYPE</span>
                  <span
                    className="btn  p-0 icon"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    <MdKeyboardArrowUp />
                  </span>
                </h6>
              </div>

              <div
                id="collapseOne"
                className="collapse show"
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

          <div className="accordion mb-3" id="accordionExample">
            <div className="card">
              <div className="card-header" id="headingTwo">
                <h6 className="mb-0 d-flex justify-content-between align-items-center">
                  <span>PRICE</span>
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
                className="collapse show"
                aria-labelledby="headingTwo"
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

          <div className="accordion mb-3" id="accordionExample">
            <div className="card">
              <div className="card-header" id="headingThree">
                <h6 className="mb-0 d-flex justify-content-between align-items-center">
                  <span>SIZE</span>
                  <span
                    className="btn  p-0"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseThree"
                    aria-expanded="true"
                    aria-controls="collapseThree"
                  >
                    #1
                  </span>
                </h6>
              </div>

              <div
                id="collapseThree"
                className="collapse show"
                aria-labelledby="headingThree"
                data-parent="#accordionExample"
              >
                <div className="card-body">
                  <div
                    className="btn-group"
                    role="group"
                    aria-label="First group"
                  >
                    {sizes.map((size, index) => (
                      <button
                        type="button"
                        className="btn border px-2 color__picker__button"
                      >
                        {index === 1 || index === 2 || index === 3 ? (
                          <span
                            style={{
                              padding: '0 2.7px',
                            }}
                          >
                            {size}
                          </span>
                        ) : (
                          <span>{size}</span>
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="accordion mb-3" id="accordionExample">
            <div className="card">
              <div className="card-header" id="headingFour">
                <h6 className="mb-0 d-flex justify-content-between align-items-center">
                  <span>COLOR</span>
                  <span
                    className="btn  p-0"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseFour"
                    aria-expanded="true"
                    aria-controls="collapseFour"
                  >
                    #1
                  </span>
                </h6>
              </div>

              <div
                id="collapseFour"
                className="collapse show"
                aria-labelledby="headingFour"
                data-parent="#accordionExample"
              >
                <div className="card-body">
                  <div
                    className="btn-group"
                    role="group"
                    aria-label="First group"
                  >
                    {colors.map((color) => (
                      <button
                        type="button"
                        className="btn border px-2 color__picker__button"
                      >
                        <div
                          className="color"
                          style={{
                            backgroundColor: `${color}`,
                            width: '18px',
                            height: '18px',
                          }}
                        ></div>
                      </button>
                    ))}
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
