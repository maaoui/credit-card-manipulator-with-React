import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
const formatName = string => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const formatCardNumber = cardNumber => {
  const numberBlocks = [];
  for (let i = 0; i < cardNumber.length; i += 4) {
    numberBlocks.push(cardNumber.slice(i, i + 4));
  }
  return numberBlocks.join(" ");
};

const normalizeCardNumber = cardNumber => {
  return cardNumber.replace(/[^\d]/g, "").slice(0, 16);
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardNumber: "xxxx xxxx xxxx xxxx",
      date: "",
      pinNumber: "XXXX",
      holder: "John cena"
    };
  }

  onChangeHolder = value => {
    this.setState({
      holder: value
    });
  };
  onChangePin = value => {
    this.setState({
      pinNumber: value
    });
  };
  onChangeNb = value => {
    this.setState({
      cardNumber: value
    });

    // this.state.cardNumber.length === 14 && value.length > 14
    // ? this.setState({
    //     cardNumber:  this.state.cardNumber +" "

    //   })
    // : this.setState({
    //     cardNumber: value
    //   });
  };

  onChangeDate = value => {
    this.state.date.length === 2 && value.length > 2
      ? this.setState({
          date: this.state.date + "/"
        })
      : this.setState({
          date: value
        });
  };

  render() {
    return (
      <div className="App">
        <span>i am fake credit card creator use me </span>
        <div className="credit-card-cadre">
          <div className="credit-card-title">
            <p className="title"> credit card</p>
          </div>
          <div className="chip-card">
            <img
              className="chip-card-image"
              src="https://www.thebeneficial.com/portals/beneficialbankwebsite/images/chip.png"
              alt="Italian Trulli"
            />
          </div>

          <div className="credit-card-content">
            <div className="credit-card-left">
              <div className="credit-card-code">
                <p className="credit-card-full-number">
                  {formatCardNumber(this.state.cardNumber)}
                </p>
              </div>
              <div className="credit-card-info">
                <div className="credit-card-number">
                  <p>{this.state.pinNumber}</p>
                </div>
                <div className="month-year-valid">
                  <div className="year">MONTH/YEAR</div>
                  <div className="date-valid">valid {this.state.date}</div>
                </div>
              </div>
            </div>
            <div className="chip-card-right">
              <img
                className="master-card-image"
                src="http://s9928.pcdn.co/wp-content/uploads/2014/05/Visa_Mastercard_Logo.png"
              />
            </div>
          </div>
          <div className="card-holder">{this.state.holder}</div>
        </div>
        <div className="inputs">
          change cardNumber <br />
          <input
            maxLength={19}
            className="text-area"
            value={formatCardNumber(this.state.cardNumber)}
            onChange={e => {
              this.onChangeNb(normalizeCardNumber(e.target.value));
            }}
          />
          change date<br />
          <input
            maxLength={5}
            className="text-area"
            type="string"
            name="date"
            value={this.state.date}
            onChange={e => {
              return this.onChangeDate(e.target.value);
            }}
          />
          change PIN<br />
          <input
            className="text-area"
            value={this.state.pinNumber}
            onChange={e => this.onChangePin(e.target.value)}
          />
          change Name<br />
          <input
            className="text-area"
            value={this.state.holder}
            onChange={e => this.onChangeHolder(formatName(e.target.value))}
          />
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
