import React from 'react';
import './App.css';
import './Tino.css';

const Item = props => (
  <li>{props.itemName} ({props.itemPrice} Naira)</li>
);

class App extends React.Component {

  state = {
    itemName: '',
    itemPrice: '',
    itemList: [],
  }

  handleItemNameChange(e) {
    this.setState({ itemName: e.target.value })
  }

  handleItemPriceChange(e) {
    this.setState({ itemPrice: e.target.value })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const {itemName, itemPrice} = this.state;
    this.setState({itemList: this.state.itemList.concat({itemName, itemPrice})})
  }

  render() {
    return (
      <div>
        <form className="form">
          <div className="item-group">
            <label>Item Name</label>
            <input type="text"
              className="input"
              placeholder="Item Name"
              value={this.state.itemName}
              onChange={(e) => this.handleItemNameChange(e)} />
            {this.state.itemName}
          </div>

          <div className="item-group">
            <label>Item Price</label>
            <input type="text"
              className="input"
              placeholder="Item Price"
              value={this.state.itemPrice} 
              onChange={(e) => this.handleItemPriceChange(e)}/>
              {this.state.itemPrice}
          </div>

          <input type="submit" 
          onClick={this.handleSubmit}/>
        </form>

        <ul>
          {this.state.itemList.map(item => (
            <Item itemName={item.itemName} 
            itemPrice={item.itemPrice}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default App;
