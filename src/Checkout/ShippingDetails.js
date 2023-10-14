import React, { Component } from 'react';
import './PersonalDetails.css'; // Create a CSS file for styling

class ShippingDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Adresssline1: '',
      Adressline2: '',
      City: '',
      Pincode: '',
      State:'',
      Country:'',
    };
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="personal-details-box1">
      <h2>Shipping Address</h2>
        <form>
          <div className="form-grp">
            <label htmlFor="Adresssline1">Address Line 1 :</label>
            <input
              type="text"
              id="Adresssline1"
              name="Adresssline1"
              value={this.state.Adresssline1}
              onChange={this.handleInputChange}
            />
          </div>

          <div className="form-grp">
            <label htmlFor="Adressline">Address Line 2:</label>
            <input
              type="text"
              id="Adressline"
              name="Adressline"
              value={this.state.Adressline}
              onChange={this.handleInputChange}
            />
          </div>

          <div className="form-grp">
            <label htmlFor="City">City:</label>
            <input
              type="City"
              id="City"
              name="City"
              value={this.state.City}
              onChange={this.handleInputChange}
            />
          </div>

          <div className="form-grp">
            <label htmlFor="Pincode">Pincode:</label>
            <input
              type="tel"
              id="Pincode"
              name="Pincode"
              value={this.state.Pincode}
              onChange={this.handleInputChange}
            />
          </div>

          <div className="form-grp">
            <label htmlFor="State"> State:</label>
            <input
              type="tel"
              id="State"
              name="State"
              value={this.state.State}
              onChange={this.handleInputChange}
            />
          </div>

          <div className="form-grp">
            <label htmlFor="Country">Country:</label>
            <input
              type="tel"
              id="Country"
              name="Country"
              value={this.state.Country}
              onChange={this.handleInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default ShippingDetails;
