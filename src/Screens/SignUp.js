import React from 'react'
import "./signup.css"
function SignUp() {
  return (
    <div>
         <form>
        <div className="container sigin-up mt-5">
          <h1>Sign Up</h1>
          <p>Please fill in this form to create an account.</p>
      
              <label for="email"><b>Username</b></label>
            <input type="text" name="username" placeholder="Enter Username" required/>
          <label for="email"><b>Email</b></label>
          <input type="text" placeholder="Enter Email" name="email" required/>
          
          <label for="psw"><b>Password</b></label>
          <input type="password" placeholder="Enter Password" name="psw" required/>
      
                  <label for="email"><b>Phone Number</b></label>
            <br/>
           <select name="phoneCode" required>
            <option selected hidden value="">Code</option>
            <option value="66">+98</option>
            <option value="66">+99</option>
            <option value="66">+90</option>
            <option value="66">+66</option>
           </select>
           <input type="phone" name="phone" placeholder="812345678" required/>
      
          <p>By creating an account you agree to our <a href="#" >Terms & Privacy</a>.</p>
      
          <div className="clearfix">
      
            <button type="submit" className=" w-100">Sign Up</button>
          </div>
        </div>
        
      </form>
    </div>
  )
}

export default SignUp