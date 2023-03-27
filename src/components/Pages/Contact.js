import React from "react";

export const Contact = () => {
  return (
  
    <div class="container">
  <div class="contact-section">
    <h2 class="ct-section-head">CONTACT US</h2>
    <div class="row contact-fields">
      <div class="col-md-8 left-form">
       <form method="post" action="">
        <div class="form-group">
          <label class="sr-only" for="fname">First Name *</label>
          <input class="required form-control" id="fname" name="fname" placeholder="First Name&nbsp;*" type="text"  required></input>
        </div>
        <div class="form-group">
          <label class="sr-only" for="lname">Last Name *</label>
          <input class="required form-control" id="lname" name="lname" placeholder="Last Name&nbsp;*" type="text"  required></input>
        </div>
        <div class="form-group">
          <label class="sr-only" for="contactEmail">Email *</label>
          <input class="required form-control h5-email" id="contactEmail" name="contactEmail" placeholder="Email&nbsp;*" type="text"  required></input>
        </div>
        <div class="form-group">
          <label class="sr-only" for="contactPhone">Phone *</label>
          <input class="required form-control h5-phone" id="contactPhone" name="contactPhone" placeholder="Phone&nbsp;*" type="text"  required></input>
        </div>
        <div class="form-group">
          <label class="sr-only" for="comment">Type your message here</label>
          <textarea class="required form-control" id="comment" name="comment" placeholder="Type your message here&nbsp;*" rows="6" required></textarea>
        </div>
        <button class="btn btn-accent" type="submit">Submit</button>  
      </form>
    </div>
    
      
    </div>
  </div>
    </div>
  
  );
};
