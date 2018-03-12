import React from 'react';

class LoginPage extends React.Component {
  render() {
    return (
      <div>
        <h2>Log in</h2>
        <form >
          <input type='email'  placeholder='Email'/><br/>
          <input  type='password' placeholder='Password' /><br/>
          <input type='submit' value='Login' /> <span > this.state.loginMessage </span>
        </form>
      </div>
    );
  }
}


export default LoginPage;
