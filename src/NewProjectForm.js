import React from 'react';
import {Input, Card, Button} from './Styled'

// 1. Make the text input a controlled component by adding an onChange listener
//    and storing the current value in local state. 
class NewProjectForm extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			name: "",
			description: "",
			empty: true
		}
	}

	// In part 1, implement the handleChange function and define it as the change handler
	// for the controlled input
	// In part 2, you can either add another change handler function, 
	// or use this one for both name and description inputs
	handleChange = (event) => {
		this.setState({
			[event.target.id]: event.target.value
		})
	}

	// After you implement part 1 of this challenge, you should no longer need to
	// refer to the DOM element (event.target) in handleSubmit.
	// Change the handleSubmit implementation to get the value from local state
	// rather than from the DOM:
	handleSubmit = (event) => {
		// handleSubmit gets the value currently in the text field from the dom
		// and updates the list of projects using setState passed in from App
		event.preventDefault()
		const {name, description} = this.state;
		
		// add the name & desc of the current project to the existing array of projects
		let updatedProjects = [
			{name: name, description: description},...this.props.projects
		]
		this.props.setProjects(updatedProjects)

		// clear out project details 
		this.setState({name: '', description: ''})
	}

	// 2. Add another Input of type text for a description after the name field. 
	//    Give it the attribute name="description".
	//    Make it a controlled component with a change handler like the first input.
	//    When 'Add project' is clicked, include the description in the project saved to state.
	//    
	//    See ProjectList for the update you should include there to show the description.
	//
	// 3. If Add Project is clicked and no name is given, display a warning message 
	//    above the form that says "You must enter a project name".
	//    Make sure you consult the value in state (not in the DOM) to determine when to display a warning.
	render() {
		const {name, description} = this.state
		return (
			
			<div>
				<Card data-testid="name-state" bgcolor="pink">
					name: {name}
				</Card>
				<Card >
					<form onSubmit={this.handleSubmit} data-testid="project-form">
						<Input data-testid="project-name" type="text" name="name" id="name" onChange={this.handleChange} value={name}></Input>	
						<Input data-testid="project-desc" type="text" name="description" id="description" onChange={this.handleChange} value={description}></Input>	
						<Button data-testid="project-add">Add Project</Button>
					</form>
				</Card>
			</div>
		);
	}
}

export default NewProjectForm;