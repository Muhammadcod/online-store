import React from 'react'
import PropTypes from 'prop-types'
import { useParams } from 'react-router-dom'

function Color(props) {
  const { id } = useParams()
  console.log('ss', id)
  return (
    <>
      <div className="btn-group" role="group" aria-label="First group">
        {props.colors.map((color) => (
          <button
            type="button"
            className="btn border px-2 color__picker__button"
            style={{
              marginRight: `${id ? 5 : 0}px`,
            }}
          >
            <div
              className="color border"
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
