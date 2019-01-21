import React, { Component } from 'react';

class New extends Component {
    render () {
        //console.log(this.props);
        const  { name, age, job } = this.props;
        return(
            <div className="New">
                <div>Name: { name } </div>
                <div>Age: { age } </div>
                <div>Job: { job } </div>
            </div>
        );
    }
}

export default New;