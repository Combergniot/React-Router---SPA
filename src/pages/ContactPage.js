import React from "react";
import "../styles/ContactPage.css";
import { Prompt } from "react-router-dom";

class ContactPage extends React.Component {
  state = {
    value: "",
    isEmpty: true
  };

  handleChange = event => {
    if (event.target.value.length > 0) {
      this.setState({
        value: event.target.value,
        isEmpty: false
      });
    } else {
      this.setState({
        value: event.target.value,
        isEmpty: true
      });
    }
  };

  handleSubmit = event => {
    event.preventDefault();
    this.setState({
      value: "",
      isEmpty: true
    });
  };

  render() {
    return (
      <div className="contact">
        <form onSubmit={this.handleSubmit}>
          <h3>Napisz do nas</h3>
          <textarea
            value={this.state.value}
            onChange={this.handleChange}
            placeholder="Wpisz wiadomość..."
          />
          <button>Wyślij</button>
        </form>
        <Prompt
          //   when={this.state.value.length > 0}
          when={!this.state.isEmpty}
          message={
            "Masz niewypełniony formularz. Czy na pewno chcesz opuścić tę stronę?"
          }
        />
      </div>
    );
  }
}

export default ContactPage;
