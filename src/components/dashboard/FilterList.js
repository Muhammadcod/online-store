import React from 'react'
import PropTypes from 'prop-types'
import { MdKeyboardArrowUp } from 'react-icons/md'

const FilterList = ({ title, head, target, children }) => (
  <>
    <div className="accordion mb-3" id="accordionExample">
      <div className="card">
        <div className="card-header" id={head}>
          <h6 className="mb-0 d-flex justify-content-between align-items-center">
            <span>{title}</span>
            <span
              className="btn  p-0 icon"
              type="button"
              data-toggle="collapse"
              data-target={`#${target}`}
              aria-expanded="true"
              aria-controls={target}
            >
              <MdKeyboardArrowUp />
            </span>
          </h6>
        </div>

        <div
          id={target}
          className="collapse show"
          aria-labelledby={head}
          data-parent="#accordionExample"
        >
          <div className="card-body">{children}</div>
        </div>
      </div>
    </div>
  </>
)

FilterList.propTypes = {
  title: PropTypes.string.isRequired,
  head: PropTypes.string.isRequired,
  target: PropTypes.string.isRequired,
  children: PropTypes.string,
}

export default FilterList
