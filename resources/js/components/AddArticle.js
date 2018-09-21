import React, { Component } from 'react';

class AddArticle extends Component {

  constructor(props) {
    super(props);
       this.state = {
          newArticle: {
              title: '',
              body: ''
          }
        }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  /* This method dynamically accepts inputs and stores it in the state */
  handleInput(key, e) {
    var state = Object.assign({}, this.state.newArticle);
    state[key] = e.target.value;
    this.setState({newArticle: state });
  }
 /* This method is invoked when submit button is pressed */
  handleSubmit(e) {
    e.preventDefault();
    this.props.onAdd(this.state.newArticle);
  }

  render() {
    const divStyle = {
      position: 'absolute',
      left: '40%',
      top: '50%',
      flexDirection: 'space-between',
      marginLeft: '30px'
    }

    const inputStyle = {
      margin: '0px 10px 0px 10px'
    }
    return(
      <div>

        <div style={divStyle}>
         <h2> Add new article </h2>
        <form onSubmit={this.handleSubmit}>

          <label>
            Title:
            <input style={inputStyle} type="text" onChange={(e)=>this.handleInput('title',e)} />
          </label>

          <label>
            Body:
            <input style={inputStyle}  type="text" onChange={(e)=>this.handleInput('body',e)} />
          </label>


          <input style={inputStyle}  type="submit" value="Submit" />
        </form>
      </div>
    </div>)
  }
}

export default AddArticle;
