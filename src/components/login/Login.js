import React from 'react'

function Login() {
  return (
    <div>
      <div className=" container d-flex justify-content-center">
        <div className="login-form text-center">
          <h5 className="login__text">Log in</h5>
          <p className="small px-2 mb-5">
            Lorem Ipsum is simply dummy text of the printing <br /> and
            typesetting industry.
          </p>
          <form>
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="email"
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="password"
              />
            </div>
            <div className="form-group form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              />
              <label
                className="form-check-label small text-left"
                htmlFor="exampleCheck1"
              >
                Keep me signed in
              </label>
            </div>
            <div className="mb-3">
              <button type="submit" className="btn border">
                Facebook
              </button>{' '}
              <button type="submit" className="btn border">
                Gmail
              </button>
            </div>
            <button type="submit" className="btn border">
              Sign in
            </button>
          </form>
          <small className="form-text text-muted">
            Not a member yet?
            <a href="/">Sign up</a>
          </small>
        </div>
      </div>
    </div>
  )
}

export default Login
