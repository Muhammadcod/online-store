import React from 'react'
import PropTypes from 'prop-types'

function Color(props) {
  return (
    <>
      <div className="btn-group" role="group" aria-label="First group">
        {props.colors.map((color) => (
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
    </>
  )
}

Color.propTypes = {
  colors: PropTypes.array,
}
export default Color
