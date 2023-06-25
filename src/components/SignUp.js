import React from 'react'

const SignUp = () => {
  return (
    <form>
      <h2 className="">Sign Up</h2>
      <label htmlFor="name" >
        Name:
        <input
          type="text"
          // id="name"
          // name="name"
          // value={credentials.name}
        />
      </label>
      <br />
      <label htmlFor="email">
        Email:
        <input
          type="email"
          // id="email"
          // name="email"
          // value ={credentials.email}
        />
      </label>
      <br />
      <label htmlFor="password">
        Password:
        <input
          type="password"
          id="password" 
          name="password"
          minLength={5} required
        />
      </label>
      <br />
      <label htmlFor="cpassword" >
        Confirm Password:
        <input
          type="password"
          minLength={5} required
        />
      </label>
      <br />
    </form>
  )
}

export default SignUp
