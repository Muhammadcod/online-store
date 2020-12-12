import React from 'react'
function Signup() {
  return (
    <div>
      <div>
        <div className="container d-flex justify-content-center">
          <div className="signup-form text-center">
            <h5 className="login__text">Log in</h5>
            <p className="small px-2 mb-5">
              Lorem Ipsum is simply dummy text of the printing <br /> and
              typesetting industry.
            </p>
            <form>
              <div className="form-group">
                <input
                  type="firstname"
                  className="form-control form-control__custom"
                  id="exampleInputFirstname1"
                  placeholder="firstname"
                />
              </div>
              <div className="form-group">
                <input
                  type="lastname"
                  className="form-control form-control__custom"
                  id="exampleInputLastname1"
                  placeholder="lastname"
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control form-control__custom"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="email"
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  className="form-control form-control__custom small"
                  id="exampleInputPassword1"
                  placeholder="password"
                />
              </div>
              <div className="form-group form-check">
                <input
                  type="checkbox"
                  className="form-check-input form-control__custom"
                  id="exampleCheck1"
                />
                <label
                  className="form-check-label small text-left"
                  htmlFor="exampleCheck1"
                >
                  Keep me signed in
                </label>
              </div>
              <button type="submit" className="btn border btn__submit">
                Sign in
              </button>
            </form>
            <small className="form-text text-muted">
              Are you already a member?
            </small>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup
