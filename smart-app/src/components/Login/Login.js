import React from 'react'

export default function Login() {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="">Email address</label>
        <input type="text"/>
      </div>
      <div className="form-group">
        <label htmlFor="">Password</label>
        <input type="password" name="" id=""/>
      </div>
      <button type="submit" className="btn purple">Submit</button>
    </form>
  )
}
