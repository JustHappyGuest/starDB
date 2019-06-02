import React, { Component } from 'react';

const withDataList = (View) => {
    return class extends Component {
        state = {
            itemList: [],
            loaded: false
        }

        
        componentDidMount() {
            this.props.getData()
                .then(itemList => {
                    this.setState({ itemList, loaded: true });
                })
                .catch(error => console.error(error));
        }

        render() {
            
            return <View
                {...this.props}
                itemList={this.state.itemList}
                loaded={this.state.loaded}
            />
        }
    };
}

export {withDataList};