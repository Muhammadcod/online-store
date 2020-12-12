import React from 'react'

function Login() {
  return (
    <div>
      <div className="border container d-flex justify-content-center">
        <div className="border text-center">
          <h5>Log in</h5>
          <p className="small">
            Lorem Ipsum is simply dummy text of the printing <br /> and
            typesetting industry. Lorem Ipsum has been the <br />{' '}
            industry&apos;s standard dummy text ever since the 1500s
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
            <div className="">
              <button type="submit" className="btn btn-primary">
                Facebook
              </button>{' '}
              <button type="submit" className="btn btn-primary">
                Gmail
              </button>
            </div>
            <button type="submit" className="btn btn-primary">
              Sign in
            </button>
          </form>
          <small className="form-text text-muted">
            Not a member yet?
            <a href="/">Sign in</a>
          </small>
        </div>
      </div>
    </div>
  )
}

export default Login
