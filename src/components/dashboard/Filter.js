import React from 'react'
import Color from './Color'
import FilterList from './FilterList'

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
  return (
    <>
      <div className="col-md-3  ">
        <div className="sidebar pt-2">
          <FilterList
            title="PRODUCT TYPE"
            target="collapseOne"
            head="headingOne"
          >
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
          </FilterList>

          <FilterList title="PRICE" target="collapseTwo" head="headingTwo">
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
          </FilterList>

          <FilterList title="SIZE" target="collapseThree" head="headingThree">
            <div className="btn-group" role="group" aria-label="First group">
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
          </FilterList>

          <FilterList title="COLOR" target="collapseFour" head="headingFour">
            <Color colors={colors} />
          </FilterList>
        </div>
      </div>
    </>
  )
}

export default Filter
