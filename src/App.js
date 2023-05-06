import React, { useState } from "react";

export default function Gallery() {

  const [FormData,setFormData] = useState({FirstName:"",LastName:"",email:"",country:"India",StreetAddress:"",city:"",state:"",zip:"",comments:false,candidates:false,offers:false,PushNotification:""});
  function changeHandler(event) {
    const {name , value, checked, type} = event.target;
    setFormData(prev=> ({...prev,[name]:type==="checkbox" ? checked:value}));
  }
  function submitHandler(event){
    event.preventDefault();
    console.log(FormData);
  }
  return (
    <div>
      <form onSubmit={submitHandler}>
        <label htmlFor="FirstName">First Name</label>
        <br/>
        <input type="text" name="FirstName"
        id="FirstName"
        placeholder="Enter First Name"
        onChange={changeHandler}
        value={FormData.FirstName}
        ></input>
        <br/>
        <label htmlFor="LastName">Last Name</label>
        <br/>
        <input type="text" name="LastName"
        id="LastName"
        placeholder="Enter Last Name"
        onChange={changeHandler}
        value={FormData.LastName}
        ></input>
        <br/>
        <label htmlFor="email">Email</label>
        <br/>
        <input type="text" name="email"
        id="email"
        placeholder="Enter Email"
        onChange={changeHandler}
        value={FormData.email}
        ></input>
        <br/>
        <label htmlFor="country">Country</label>
        <br/>
        <select name="country" value={FormData.country} id="country" onChange={changeHandler}>
          <option>India</option>
          <option>Canada</option>
          <option>United States</option>
          <option>Mexico</option>
        </select>
        <br/>
        <label htmlFor="StreetAddress">Street Address</label>
        <br/>
        <input type="text" name="StreetAddress"
        id="StreetAddress"
        placeholder="Enter Street Address"
        onChange={changeHandler}
        value={FormData.StreetAddress}
        ></input>
        <br/>
        <label htmlFor="city">Enter City</label>
        <br/>
        <input type="text" name="city"
        id="city"
        placeholder="Enter Street Address"
        onChange={changeHandler}
        value={FormData.city}
        ></input>
        <br/>
        <label htmlFor="state">State/Province</label>
        <br/>
        <input type="text" name="state"
        id="state"
        placeholder="Enter Street Address"
        onChange={changeHandler}
        value={FormData.state}
        ></input>
        <br/>
        <label htmlFor="zip">ZIP/Postal Code</label>
        <br/>
        <input type="text" name="zip"
        id="zip"
        placeholder="West Bengal"
        onChange={changeHandler}
        value={FormData.zip}
        ></input>
        <br/>
        <fieldset>
          <legend>By Email</legend>
          <div className="flex">
          <input id="comments" name="comments" type="checkbox" checked={FormData.comments} onChange={changeHandler}/>
          <div>
            <label htmlFor="comments">Comments</label>
            <p>Get notified when someones posts a comment on a posting.</p>
          </div>
          </div>

          <div className="candidates">
          <input id="candidates" name="candidates" type="checkbox" checked={FormData.candidates} onChange={changeHandler}>
          </input>
          <div>
            <label htmlFor="candidates">Candidates</label>
            <p>Get notified when candidate applies for a job.</p>
          </div>
          </div>

          <div className="flex">
          <input id="offers" name="offers" type="checkbox" checked={FormData.offers} onChange={changeHandler}>
          </input>
          <div>
            <label htmlFor="offers">Offers</label>
            <p>Get notified when candidate accepts or reject an offer.</p>
          </div>
          </div>
        </fieldset>

        <fieldset>
          <legend>Push Notification</legend>
          <p>These are delivered via SMS to your mobile phone</p>
          <input type="radio" id="everything" name="PushNotification" value="Everything" onChange={changeHandler}/>
          <label htmlFor="everything">Everything</label>
          <br/>
          <input type="radio" id="Email" name="PushNotification" value="Email" onChange={changeHandler}/>
          <label htmlFor="Email">Email</label>
          <br/>
          <input type="radio" id="Nothing" name="PushNotification" value="Nothing" onChange={changeHandler}/>
          <label htmlFor="Nothing">Nothing</label>
        </fieldset>
        <button >Save</button>
      </form>
    </div>
  );
}
