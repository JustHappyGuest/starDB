import React, {Component} from 'react';

const withDataItem = (View) => (
    class extends Component {
      state = {
        item: {},
        image: null
      }
      
      componentDidMount() {
        if(this.props.id)
          this.props.getData(this.props.id)
            .then(item => this.setState({ item, image: this.props.getImage(item.id) }));
      }

      componentDidUpdate() {
        this.reload = this.props.id === this.state.item.id;
        
        if (this.reload) return;
  
        this.props.getData(this.props.id)
          .then(item => this.setState({ item, image: this.props.getImage(item.id) }));
      }
  
      render() {
        return <View
          {...this.props}
          reload={!this.reload && Object.keys(this.state.item).length}
          item={this.state.item}
          image={this.state.image}
        />;
      }
    }
  );

export {withDataItem}