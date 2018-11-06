import React from 'react'
import { Form } from 'semantic-ui-react'


class PokemonForm extends React.Component {
  constructor() {
    super()

    this.state = {
      name: '',
      hp: '',
      frontUrl: '',
      backUrl: ''
    }
  }

  onFormChange = (e) => {

    this.setState({
      [e.target.name]: e.target.value

    })

  }
  handleSubmit = (e) => {
    e.preventDefault()
    this.props.pokeSubmit(this.state)



  }


  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" onChange={this.onFormChange} placeholder="Name" name="name" />
            <Form.Input fluid label="hp" onChange={this.onFormChange} placeholder="hp" name="hp" />
            <Form.Input fluid label="Front Image URL" onChange={this.onFormChange} placeholder="url" name="frontUrl" />
            <Form.Input fluid label="Back Image URL" onChange={this.onFormChange} placeholder="url" name="backUrl" />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
