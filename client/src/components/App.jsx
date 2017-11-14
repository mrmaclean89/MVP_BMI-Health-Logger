


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      height:170,
      weight:65,
      bmi:22.49,
      bmiClass: 'Normal'
    }
  }


  heightChange(height){
    this.setState({height:height}, this.bmiChange, function(){
      console.log(this.state);
    });
  }

  weightChange(weight){
    this.setState({weight:weight}, this.bmiChange, function(){
      console.log(this.state);
    });
  }

  bmiChange(){
    let bmi = ((this.state.weight / this.state.height / this.state.height) * 10000).toFixed(2);
    this.setState({bmi:bmi, bmiClass: this.getBmiClass(bmi)}, function(){
      console.log(this.state);
    });
  }

  getBmiClass(bmi){
    if(bmi < 18.5) return 'Underweight';
    if(bmi >= 18.5 && bmi <= 24.9) return 'Normal';
    if(bmi >= 25 && bmi <= 29.9) return 'Overweight';
    if(bmi >= 30) return 'Obese';
  }



  render() {
  return (
    <div className="app">
      <h1>Physical Record</h1>
      <form>
        <div>
          <label>Height</label>
          <Attributes value={this.state.height} onChange={this.heightChange.bind(this)} />
        </div>
        <div>
          <label>Weight</label>
          <Attributes value={this.state.weight} onChange={this.weightChange.bind(this)} />
        </div>
      <BMI data={this.state} />
      <Logger />
      </form>
    </div>
    );

  }


}


window.App = App;


//  onClick , options = {

//   height: this.state.height.value
//   weight: this.state.weight.value

// }



