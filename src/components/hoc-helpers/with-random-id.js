import React, { Component } from 'react';

export const withRandomId = (View) => (
    class extends Component {
        getRandomId(){
            return Math.floor(Math.random() * this.props.to) + this.props.from;
        }
        
        state = {
            id: this.getRandomId()
        }

        componentDidMount(){
            this.intervalUpdateId = setInterval(()=>{
                this.setState(()=>({id: this.getRandomId()}))
            }, 10000);
        }

        render(){
            return (
                <View {...this.props} id = {this.state.id}/>
            );
        };
    }
);

