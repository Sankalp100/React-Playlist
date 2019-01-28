import React, { Component } from 'react';

class New extends Component {
    render () {
        
        const  { news } = this.props;
        const newlist = news.map(new => {
            return(
                <div className="New" key={new.id}>
                    <div>Name: { new.name } </div>
                    <div>Age: { new.age } </div>
                    <div>Job: { new.job } </div>
                </div>

            )
        })
        return(
            <div className="New-list">
               { newlist}
            </div>
        );
    }
}

export default New;