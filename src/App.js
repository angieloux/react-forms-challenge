import React from 'react'
import {CenteredRow} from './Styled'
import NewProjectForm from './NewProjectForm'
import ProjectList from './ProjectList'

class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			projects: []
		}
	}	
	setProjects = (projects) => {
		this.setState({projects: projects})
	}

	render() {
		const {projects} = this.state
		return (
			<div>
				<h1>My Projects</h1>
				<CenteredRow >
					<NewProjectForm projects={projects} setProjects={this.setProjects} />
				</CenteredRow>
				<CenteredRow >
					<ProjectList projects={projects}/>
				</CenteredRow>
			</div>
		)

	}

}

export default App
