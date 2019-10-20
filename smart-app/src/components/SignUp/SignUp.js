import React from 'react'

export default function SignUp() {
  return (
    <form>
    <div className="form-group">
      <label htmlFor="">First Name</label>
      <input type="text"/>
    </div>
    <div className="form-group">
      <label htmlFor="">Last Name</label>
      <input type="text" name="" id=""/>
    </div>
    <button type="submit" className="btn purple">Submit</button>
  </form>
  )
}
