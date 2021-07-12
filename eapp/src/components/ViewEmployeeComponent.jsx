import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService'

class ViewEmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            employee: {}
        }
    }

    componentDidMount(){
        EmployeeService.getEmployeeById(this.state.id).then( res => {
            this.setState({employee: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> Employee ID Card</h3>
                    <div class="card">
                    </div>
                    <div class="card-body">
                        <p class="card-text">
                            <div className = "row">
                                <div> Employee ID : { this.state.employee.id }</div>
                            </div>
                            <div className = "row">
                                <div> Employee Name : { this.state.employee.name }</div>
                            </div>
                            <div className = "row">
                                <div> Employee Email ID : { this.state.employee.emailId }</div>
                            </div>
                            <div className = "row">
                                <div> Employee Designation : { this.state.employee.designation }</div>
                            </div>
                        </p>
                    </div>
                </div>
            </div>      
        )
    }
}

export default ViewEmployeeComponent