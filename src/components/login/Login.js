import React from 'react'

function Login() {
  return (
    <div>
      <div className="border container d-flex justify-content-center">
        <div className="border text-center">
          <h5>Log in</h5>
          <p className="small align-center">
            Lorem Ipsum is simply dummy text of the printing <br /> and
            typesetting industry. Lorem Ipsum has been the <br />{' '}
            industry&apos;s standard dummy text ever since the 1500s
          </p>
          <form>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="email"
              />
              <small id="emailHelp" className="form-text text-muted">
                We&apos;ll never share your email with anyone else.
              </small>
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Password</label>
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
              <label className="form-check-label" htmlFor="exampleCheck1">
                Check me out
              </label>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
