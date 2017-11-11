

class Attributes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value
    }
    this.max = 250
  }





  onChange(event){
    console.log(event.target.value);
    // access state from parent compoent (update Attributes in div)
    this.props.onChange(this.state.value);
    this.setState({value:event.target.value});
  }


  render() {
    return (
      <div className="attributes">
       <input
        type="range"
        value={this.state.value}
        min={this.props.min}
        max={this.max}
        step={this.props.step}
        onChange={this.onChange.bind(this)}
       />
      </div>
    );
  }
}

window.Attributes = Attributes;


