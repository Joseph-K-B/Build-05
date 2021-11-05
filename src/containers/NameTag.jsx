import React, { Component } from 'react';
import Controls from '../components/name-tag/Controls';
import Display from '../components/name-tag/Display';

export default class NameTag extends Component {
    state = {
      loading: true,
      name: '',
      greeting: ''
    };

    async componentDidMount() {
      const { name, greeting } = this.state;
      const nameInput = name;
      const greetingInput = greeting;
      this.setState({ nameInput, greetingInput, loading: false });
    }

    handleNameInput = (e) => {
      this.setState({ name: e.target.value });
    };

    handleGreetingInput = (e) => {
      this.setState({ greeting: e.target.value });
    };

    handleSubmit = async (e) => {
      const { name, greeting } = this.state;
      e.preventDefault();
      this.setState({ loading: true });
      const nameInput = name;
      const greetingInput = greeting;
      this.setState({ nameInput, greetingInput, loading: false });
    };

    render() {
      const { loading, name, greeting } = this.state;
      if(loading) return <h1>Loading...</h1>;
      return (
        <>
          <Controls
            onGreetingInput={this.handleGreetingInput}
            onNameInput={this.handleNameInput}
            onSubmit={this.handleSubmit} />
          <Display 
            name={name}
            greeting={greeting}
          />
        </>
      );
    }
}
