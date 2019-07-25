import React, { Component } from "react"

<form className="messageForm">
<div className="form-group">
  <input
    type="text"
    required
    className="form-control"
    onChange={this.handleFieldChange}
    id="message"
    value = {this.state.message}
  />
</div>

<button
  type="submit"
  onClick={this.editMessage}
  className="btn btn-primary"
>
  Submit
</button>
</form>