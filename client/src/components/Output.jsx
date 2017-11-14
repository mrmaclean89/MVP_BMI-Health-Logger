

class BMI extends React.Component {

  convertHeight(cm) {
    var totalInches = cm * 0.3937;
    var feet = Math.floor(totalInches / 12);
    var inches = Math.round(totalInches - (feet * 12));
    return feet + " ' " + inches;a

  }

  convertWeight(kg) {
    return Math.floor(kg/0.45359237);
  }



  render() {
    var height = this.convertHeight(this.props.data.height);
    var weight = this.convertWeight(this.props.data.weight);
    var bmi = this.props.data.bmi;
    var bmiClass = this.props.data.bmiClass;

    return (
      <div className="output">
        <h3>Weight:</h3>
        {weight}
        <h3>Height:</h3>
        {height}
        <h3>Body Mass Index</h3>
        {bmi}
        <h3>Weight Class:</h3>
        {bmiClass}
      </div>
      );

  }

}


window.BMI = BMI;