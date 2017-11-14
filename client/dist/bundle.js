'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.state = {
      height: 170,
      weight: 65,
      bmi: 22.49,
      bmiClass: 'Normal'
    };
    return _this;
  }

  _createClass(App, [{
    key: 'heightChange',
    value: function heightChange(height) {
      this.setState({ height: height }, this.bmiChange, function () {
        console.log(this.state);
      });
    }
  }, {
    key: 'weightChange',
    value: function weightChange(weight) {
      this.setState({ weight: weight }, this.bmiChange, function () {
        console.log(this.state);
      });
    }
  }, {
    key: 'bmiChange',
    value: function bmiChange() {
      var bmi = (this.state.weight / this.state.height / this.state.height * 10000).toFixed(2);
      this.setState({ bmi: bmi, bmiClass: this.getBmiClass(bmi) }, function () {
        console.log(this.state);
      });
    }
  }, {
    key: 'getBmiClass',
    value: function getBmiClass(bmi) {
      if (bmi < 18.5) return 'Underweight';
      if (bmi >= 18.5 && bmi <= 24.9) return 'Normal';
      if (bmi >= 25 && bmi <= 29.9) return 'Overweight';
      if (bmi >= 30) return 'Obese';
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { className: 'app' },
        React.createElement(
          'h1',
          null,
          'Physical Record'
        ),
        React.createElement(
          'form',
          null,
          React.createElement(
            'div',
            null,
            React.createElement(
              'label',
              null,
              'Height'
            ),
            React.createElement(Attributes, { value: this.state.height, onChange: this.heightChange.bind(this) })
          ),
          React.createElement(
            'div',
            null,
            React.createElement(
              'label',
              null,
              'Weight'
            ),
            React.createElement(Attributes, { value: this.state.weight, onChange: this.weightChange.bind(this) })
          ),
          React.createElement(BMI, { data: this.state }),
          React.createElement(Logger, null)
        )
      );
    }
  }]);

  return App;
}(React.Component);

window.App = App;

//  onClick , options = {

//   height: this.state.height.value
//   weight: this.state.weight.value

// }
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Attributes = function (_React$Component) {
  _inherits(Attributes, _React$Component);

  function Attributes(props) {
    _classCallCheck(this, Attributes);

    var _this = _possibleConstructorReturn(this, (Attributes.__proto__ || Object.getPrototypeOf(Attributes)).call(this, props));

    _this.state = {
      value: props.value
    };
    _this.max = 250;
    return _this;
  }

  _createClass(Attributes, [{
    key: "onChange",
    value: function onChange(event) {
      console.log(event.target.value);
      // access state from parent compoent (update Attributes in div)
      this.props.onChange(this.state.value);
      this.setState({ value: event.target.value });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { className: "attributes" },
        React.createElement("input", {
          type: "range",
          value: this.state.value,
          min: this.props.min,
          max: this.max,
          step: this.props.step,
          onChange: this.onChange.bind(this)
        })
      );
    }
  }]);

  return Attributes;
}(React.Component);

window.Attributes = Attributes;
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Logger = function (_React$Component) {
  _inherits(Logger, _React$Component);

  function Logger() {
    _classCallCheck(this, Logger);

    return _possibleConstructorReturn(this, (Logger.__proto__ || Object.getPrototypeOf(Logger)).apply(this, arguments));
  }

  _createClass(Logger, [{
    key: "onClick",
    value: function onClick(event) {
      console.log(event.target.value);
      // access state from parent compoent (update Attributes in div)
      this.props.onClick(this.state.value);
      this.setState({ value: event.target.value });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { className: "logger" },
        React.createElement("br", null),
        React.createElement("br", null),
        React.createElement("input", { type: "button", onclick: this.onClick.bind(this), value: "LOG YOUR PHYSICAL RECORD" }),
        React.createElement("br", null),
        React.createElement("br", null),
        React.createElement("input", { type: "button", onclick: this.onClick.bind(this), value: "RETRIEVE PHYSICAL RECORD HISTORY" })
      );
    }
  }]);

  return Logger;
}(React.Component);

window.Logger = Logger;
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BMI = function (_React$Component) {
  _inherits(BMI, _React$Component);

  function BMI() {
    _classCallCheck(this, BMI);

    return _possibleConstructorReturn(this, (BMI.__proto__ || Object.getPrototypeOf(BMI)).apply(this, arguments));
  }

  _createClass(BMI, [{
    key: "convertHeight",
    value: function convertHeight(cm) {
      var totalInches = cm * 0.3937;
      var feet = Math.floor(totalInches / 12);
      var inches = Math.round(totalInches - feet * 12);
      return feet + " ' " + inches;a;
    }
  }, {
    key: "convertWeight",
    value: function convertWeight(kg) {
      return Math.floor(kg / 0.45359237);
    }
  }, {
    key: "render",
    value: function render() {
      var height = this.convertHeight(this.props.data.height);
      var weight = this.convertWeight(this.props.data.weight);
      var bmi = this.props.data.bmi;
      var bmiClass = this.props.data.bmiClass;

      return React.createElement(
        "div",
        { className: "output" },
        React.createElement(
          "h3",
          null,
          "Weight:"
        ),
        weight,
        React.createElement(
          "h3",
          null,
          "Height:"
        ),
        height,
        React.createElement(
          "h3",
          null,
          "Body Mass Index"
        ),
        bmi,
        React.createElement(
          "h3",
          null,
          "Weight Class:"
        ),
        bmiClass
      );
    }
  }]);

  return BMI;
}(React.Component);

window.BMI = BMI;
'use strict';

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb21wb25lbnRzL0FwcC5qc3giLCIuLi9zcmMvY29tcG9uZW50cy9BdHRyaWJ1dGVzLmpzeCIsIi4uL3NyYy9jb21wb25lbnRzL0xvZ2dlci5qc3giLCIuLi9zcmMvY29tcG9uZW50cy9PdXRwdXQuanN4IiwiLi4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFHTSxHOzs7QUFDSixlQUFZLEtBQVosRUFBbUI7QUFBQTs7QUFBQSwwR0FDWCxLQURXOztBQUVqQixVQUFLLEtBQUwsR0FBYTtBQUNYLGNBQU8sR0FESTtBQUVYLGNBQU8sRUFGSTtBQUdYLFdBQUksS0FITztBQUlYLGdCQUFVO0FBSkMsS0FBYjtBQUZpQjtBQVFsQjs7OztpQ0FHWSxNLEVBQU87QUFDbEIsV0FBSyxRQUFMLENBQWMsRUFBQyxRQUFPLE1BQVIsRUFBZCxFQUErQixLQUFLLFNBQXBDLEVBQStDLFlBQVU7QUFDdkQsZ0JBQVEsR0FBUixDQUFZLEtBQUssS0FBakI7QUFDRCxPQUZEO0FBR0Q7OztpQ0FFWSxNLEVBQU87QUFDbEIsV0FBSyxRQUFMLENBQWMsRUFBQyxRQUFPLE1BQVIsRUFBZCxFQUErQixLQUFLLFNBQXBDLEVBQStDLFlBQVU7QUFDdkQsZ0JBQVEsR0FBUixDQUFZLEtBQUssS0FBakI7QUFDRCxPQUZEO0FBR0Q7OztnQ0FFVTtBQUNULFVBQUksTUFBTSxDQUFFLEtBQUssS0FBTCxDQUFXLE1BQVgsR0FBb0IsS0FBSyxLQUFMLENBQVcsTUFBL0IsR0FBd0MsS0FBSyxLQUFMLENBQVcsTUFBcEQsR0FBOEQsS0FBL0QsRUFBc0UsT0FBdEUsQ0FBOEUsQ0FBOUUsQ0FBVjtBQUNBLFdBQUssUUFBTCxDQUFjLEVBQUMsS0FBSSxHQUFMLEVBQVUsVUFBVSxLQUFLLFdBQUwsQ0FBaUIsR0FBakIsQ0FBcEIsRUFBZCxFQUEwRCxZQUFVO0FBQ2xFLGdCQUFRLEdBQVIsQ0FBWSxLQUFLLEtBQWpCO0FBQ0QsT0FGRDtBQUdEOzs7Z0NBRVcsRyxFQUFJO0FBQ2QsVUFBRyxNQUFNLElBQVQsRUFBZSxPQUFPLGFBQVA7QUFDZixVQUFHLE9BQU8sSUFBUCxJQUFlLE9BQU8sSUFBekIsRUFBK0IsT0FBTyxRQUFQO0FBQy9CLFVBQUcsT0FBTyxFQUFQLElBQWEsT0FBTyxJQUF2QixFQUE2QixPQUFPLFlBQVA7QUFDN0IsVUFBRyxPQUFPLEVBQVYsRUFBYyxPQUFPLE9BQVA7QUFDZjs7OzZCQUlRO0FBQ1QsYUFDRTtBQUFBO0FBQUEsVUFBSyxXQUFVLEtBQWY7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBREY7QUFFRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREY7QUFFRSxnQ0FBQyxVQUFELElBQVksT0FBTyxLQUFLLEtBQUwsQ0FBVyxNQUE5QixFQUFzQyxVQUFVLEtBQUssWUFBTCxDQUFrQixJQUFsQixDQUF1QixJQUF2QixDQUFoRDtBQUZGLFdBREY7QUFLRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREY7QUFFRSxnQ0FBQyxVQUFELElBQVksT0FBTyxLQUFLLEtBQUwsQ0FBVyxNQUE5QixFQUFzQyxVQUFVLEtBQUssWUFBTCxDQUFrQixJQUFsQixDQUF1QixJQUF2QixDQUFoRDtBQUZGLFdBTEY7QUFTQSw4QkFBQyxHQUFELElBQUssTUFBTSxLQUFLLEtBQWhCLEdBVEE7QUFVQSw4QkFBQyxNQUFEO0FBVkE7QUFGRixPQURGO0FBa0JDOzs7O0VBM0RlLE1BQU0sUzs7QUFpRXhCLE9BQU8sR0FBUCxHQUFhLEdBQWI7O0FBR0E7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7SUMxRU0sVTs7O0FBQ0osc0JBQVksS0FBWixFQUFtQjtBQUFBOztBQUFBLHdIQUNYLEtBRFc7O0FBRWpCLFVBQUssS0FBTCxHQUFhO0FBQ1gsYUFBTyxNQUFNO0FBREYsS0FBYjtBQUdBLFVBQUssR0FBTCxHQUFXLEdBQVg7QUFMaUI7QUFNbEI7Ozs7NkJBTVEsSyxFQUFNO0FBQ2IsY0FBUSxHQUFSLENBQVksTUFBTSxNQUFOLENBQWEsS0FBekI7QUFDQTtBQUNBLFdBQUssS0FBTCxDQUFXLFFBQVgsQ0FBb0IsS0FBSyxLQUFMLENBQVcsS0FBL0I7QUFDQSxXQUFLLFFBQUwsQ0FBYyxFQUFDLE9BQU0sTUFBTSxNQUFOLENBQWEsS0FBcEIsRUFBZDtBQUNEOzs7NkJBR1E7QUFDUCxhQUNFO0FBQUE7QUFBQSxVQUFLLFdBQVUsWUFBZjtBQUNDO0FBQ0MsZ0JBQUssT0FETjtBQUVDLGlCQUFPLEtBQUssS0FBTCxDQUFXLEtBRm5CO0FBR0MsZUFBSyxLQUFLLEtBQUwsQ0FBVyxHQUhqQjtBQUlDLGVBQUssS0FBSyxHQUpYO0FBS0MsZ0JBQU0sS0FBSyxLQUFMLENBQVcsSUFMbEI7QUFNQyxvQkFBVSxLQUFLLFFBQUwsQ0FBYyxJQUFkLENBQW1CLElBQW5CO0FBTlg7QUFERCxPQURGO0FBWUQ7Ozs7RUFsQ3NCLE1BQU0sUzs7QUFxQy9CLE9BQU8sVUFBUCxHQUFvQixVQUFwQjs7Ozs7Ozs7Ozs7SUNyQ00sTTs7Ozs7Ozs7Ozs7NEJBRUksSyxFQUFNO0FBQ1osY0FBUSxHQUFSLENBQVksTUFBTSxNQUFOLENBQWEsS0FBekI7QUFDQTtBQUNBLFdBQUssS0FBTCxDQUFXLE9BQVgsQ0FBbUIsS0FBSyxLQUFMLENBQVcsS0FBOUI7QUFDQSxXQUFLLFFBQUwsQ0FBYyxFQUFDLE9BQU0sTUFBTSxNQUFOLENBQWEsS0FBcEIsRUFBZDtBQUNEOzs7NkJBRVE7QUFDUCxhQUNFO0FBQUE7QUFBQSxVQUFLLFdBQVUsUUFBZjtBQUNBLHVDQURBO0FBQ00sdUNBRE47QUFFQSx1Q0FBTyxNQUFLLFFBQVosRUFBcUIsU0FBUyxLQUFLLE9BQUwsQ0FBYSxJQUFiLENBQWtCLElBQWxCLENBQTlCLEVBQXVELE9BQU0sMEJBQTdELEdBRkE7QUFHQSx1Q0FIQTtBQUdNLHVDQUhOO0FBSUEsdUNBQU8sTUFBSyxRQUFaLEVBQXFCLFNBQVMsS0FBSyxPQUFMLENBQWEsSUFBYixDQUFrQixJQUFsQixDQUE5QixFQUF1RCxPQUFNLGtDQUE3RDtBQUpBLE9BREY7QUFRRDs7OztFQWxCa0IsTUFBTSxTOztBQXFCM0IsT0FBTyxNQUFQLEdBQWdCLE1BQWhCOzs7Ozs7Ozs7OztJQ3JCTSxHOzs7Ozs7Ozs7OztrQ0FFVSxFLEVBQUk7QUFDaEIsVUFBSSxjQUFjLEtBQUssTUFBdkI7QUFDQSxVQUFJLE9BQU8sS0FBSyxLQUFMLENBQVcsY0FBYyxFQUF6QixDQUFYO0FBQ0EsVUFBSSxTQUFTLEtBQUssS0FBTCxDQUFXLGNBQWUsT0FBTyxFQUFqQyxDQUFiO0FBQ0EsYUFBTyxPQUFPLEtBQVAsR0FBZSxNQUF0QixDQUE2QjtBQUU5Qjs7O2tDQUVhLEUsRUFBSTtBQUNoQixhQUFPLEtBQUssS0FBTCxDQUFXLEtBQUcsVUFBZCxDQUFQO0FBQ0Q7Ozs2QkFJUTtBQUNQLFVBQUksU0FBUyxLQUFLLGFBQUwsQ0FBbUIsS0FBSyxLQUFMLENBQVcsSUFBWCxDQUFnQixNQUFuQyxDQUFiO0FBQ0EsVUFBSSxTQUFTLEtBQUssYUFBTCxDQUFtQixLQUFLLEtBQUwsQ0FBVyxJQUFYLENBQWdCLE1BQW5DLENBQWI7QUFDQSxVQUFJLE1BQU0sS0FBSyxLQUFMLENBQVcsSUFBWCxDQUFnQixHQUExQjtBQUNBLFVBQUksV0FBVyxLQUFLLEtBQUwsQ0FBVyxJQUFYLENBQWdCLFFBQS9COztBQUVBLGFBQ0U7QUFBQTtBQUFBLFVBQUssV0FBVSxRQUFmO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQURGO0FBRUcsY0FGSDtBQUdFO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FIRjtBQUlHLGNBSkg7QUFLRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBTEY7QUFNRyxXQU5IO0FBT0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQVBGO0FBUUc7QUFSSCxPQURGO0FBYUQ7Ozs7RUFuQ2UsTUFBTSxTOztBQXdDeEIsT0FBTyxHQUFQLEdBQWEsR0FBYjs7O0FDMUNBLFNBQVMsTUFBVCxDQUFnQixvQkFBQyxHQUFELE9BQWhCLEVBQTBCLFNBQVMsY0FBVCxDQUF3QixLQUF4QixDQUExQiIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuXG5jbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgaGVpZ2h0OjE3MCxcbiAgICAgIHdlaWdodDo2NSxcbiAgICAgIGJtaToyMi40OSxcbiAgICAgIGJtaUNsYXNzOiAnTm9ybWFsJ1xuICAgIH1cbiAgfVxuXG5cbiAgaGVpZ2h0Q2hhbmdlKGhlaWdodCl7XG4gICAgdGhpcy5zZXRTdGF0ZSh7aGVpZ2h0OmhlaWdodH0sIHRoaXMuYm1pQ2hhbmdlLCBmdW5jdGlvbigpe1xuICAgICAgY29uc29sZS5sb2codGhpcy5zdGF0ZSk7XG4gICAgfSk7XG4gIH1cblxuICB3ZWlnaHRDaGFuZ2Uod2VpZ2h0KXtcbiAgICB0aGlzLnNldFN0YXRlKHt3ZWlnaHQ6d2VpZ2h0fSwgdGhpcy5ibWlDaGFuZ2UsIGZ1bmN0aW9uKCl7XG4gICAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlKTtcbiAgICB9KTtcbiAgfVxuXG4gIGJtaUNoYW5nZSgpe1xuICAgIGxldCBibWkgPSAoKHRoaXMuc3RhdGUud2VpZ2h0IC8gdGhpcy5zdGF0ZS5oZWlnaHQgLyB0aGlzLnN0YXRlLmhlaWdodCkgKiAxMDAwMCkudG9GaXhlZCgyKTtcbiAgICB0aGlzLnNldFN0YXRlKHtibWk6Ym1pLCBibWlDbGFzczogdGhpcy5nZXRCbWlDbGFzcyhibWkpfSwgZnVuY3Rpb24oKXtcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUpO1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0Qm1pQ2xhc3MoYm1pKXtcbiAgICBpZihibWkgPCAxOC41KSByZXR1cm4gJ1VuZGVyd2VpZ2h0JztcbiAgICBpZihibWkgPj0gMTguNSAmJiBibWkgPD0gMjQuOSkgcmV0dXJuICdOb3JtYWwnO1xuICAgIGlmKGJtaSA+PSAyNSAmJiBibWkgPD0gMjkuOSkgcmV0dXJuICdPdmVyd2VpZ2h0JztcbiAgICBpZihibWkgPj0gMzApIHJldHVybiAnT2Jlc2UnO1xuICB9XG5cblxuXG4gIHJlbmRlcigpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImFwcFwiPlxuICAgICAgPGgxPlBoeXNpY2FsIFJlY29yZDwvaDE+XG4gICAgICA8Zm9ybT5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8bGFiZWw+SGVpZ2h0PC9sYWJlbD5cbiAgICAgICAgICA8QXR0cmlidXRlcyB2YWx1ZT17dGhpcy5zdGF0ZS5oZWlnaHR9IG9uQ2hhbmdlPXt0aGlzLmhlaWdodENoYW5nZS5iaW5kKHRoaXMpfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8bGFiZWw+V2VpZ2h0PC9sYWJlbD5cbiAgICAgICAgICA8QXR0cmlidXRlcyB2YWx1ZT17dGhpcy5zdGF0ZS53ZWlnaHR9IG9uQ2hhbmdlPXt0aGlzLndlaWdodENoYW5nZS5iaW5kKHRoaXMpfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDxCTUkgZGF0YT17dGhpcy5zdGF0ZX0gLz5cbiAgICAgIDxMb2dnZXIgLz5cbiAgICAgIDwvZm9ybT5cbiAgICA8L2Rpdj5cbiAgICApO1xuXG4gIH1cblxuXG59XG5cblxud2luZG93LkFwcCA9IEFwcDtcblxuXG4vLyAgb25DbGljayAsIG9wdGlvbnMgPSB7XG5cbi8vICAgaGVpZ2h0OiB0aGlzLnN0YXRlLmhlaWdodC52YWx1ZVxuLy8gICB3ZWlnaHQ6IHRoaXMuc3RhdGUud2VpZ2h0LnZhbHVlXG5cbi8vIH1cblxuXG5cbiIsIlxuXG5jbGFzcyBBdHRyaWJ1dGVzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHZhbHVlOiBwcm9wcy52YWx1ZVxuICAgIH1cbiAgICB0aGlzLm1heCA9IDI1MFxuICB9XG5cblxuXG5cblxuICBvbkNoYW5nZShldmVudCl7XG4gICAgY29uc29sZS5sb2coZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgICAvLyBhY2Nlc3Mgc3RhdGUgZnJvbSBwYXJlbnQgY29tcG9lbnQgKHVwZGF0ZSBBdHRyaWJ1dGVzIGluIGRpdilcbiAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKHRoaXMuc3RhdGUudmFsdWUpO1xuICAgIHRoaXMuc2V0U3RhdGUoe3ZhbHVlOmV2ZW50LnRhcmdldC52YWx1ZX0pO1xuICB9XG5cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXR0cmlidXRlc1wiPlxuICAgICAgIDxpbnB1dFxuICAgICAgICB0eXBlPVwicmFuZ2VcIlxuICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS52YWx1ZX1cbiAgICAgICAgbWluPXt0aGlzLnByb3BzLm1pbn1cbiAgICAgICAgbWF4PXt0aGlzLm1heH1cbiAgICAgICAgc3RlcD17dGhpcy5wcm9wcy5zdGVwfVxuICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkNoYW5nZS5iaW5kKHRoaXMpfVxuICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbndpbmRvdy5BdHRyaWJ1dGVzID0gQXR0cmlidXRlcztcblxuXG4iLCJcblxuY2xhc3MgTG9nZ2VyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBvbkNsaWNrKGV2ZW50KXtcbiAgICBjb25zb2xlLmxvZyhldmVudC50YXJnZXQudmFsdWUpO1xuICAgIC8vIGFjY2VzcyBzdGF0ZSBmcm9tIHBhcmVudCBjb21wb2VudCAodXBkYXRlIEF0dHJpYnV0ZXMgaW4gZGl2KVxuICAgIHRoaXMucHJvcHMub25DbGljayh0aGlzLnN0YXRlLnZhbHVlKTtcbiAgICB0aGlzLnNldFN0YXRlKHt2YWx1ZTpldmVudC50YXJnZXQudmFsdWV9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dnZXJcIj5cbiAgICAgIDxiciAvPjxiciAvPlxuICAgICAgPGlucHV0IHR5cGU9XCJidXR0b25cIiBvbmNsaWNrPXt0aGlzLm9uQ2xpY2suYmluZCh0aGlzKX0gdmFsdWU9XCJMT0cgWU9VUiBQSFlTSUNBTCBSRUNPUkRcIi8+XG4gICAgICA8YnIgLz48YnIgLz5cbiAgICAgIDxpbnB1dCB0eXBlPVwiYnV0dG9uXCIgb25jbGljaz17dGhpcy5vbkNsaWNrLmJpbmQodGhpcyl9IHZhbHVlPVwiUkVUUklFVkUgUEhZU0lDQUwgUkVDT1JEIEhJU1RPUllcIi8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbndpbmRvdy5Mb2dnZXIgPSBMb2dnZXI7XG5cblxuIiwiXG5cbmNsYXNzIEJNSSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgY29udmVydEhlaWdodChjbSkge1xuICAgIHZhciB0b3RhbEluY2hlcyA9IGNtICogMC4zOTM3O1xuICAgIHZhciBmZWV0ID0gTWF0aC5mbG9vcih0b3RhbEluY2hlcyAvIDEyKTtcbiAgICB2YXIgaW5jaGVzID0gTWF0aC5yb3VuZCh0b3RhbEluY2hlcyAtIChmZWV0ICogMTIpKTtcbiAgICByZXR1cm4gZmVldCArIFwiICcgXCIgKyBpbmNoZXM7YVxuXG4gIH1cblxuICBjb252ZXJ0V2VpZ2h0KGtnKSB7XG4gICAgcmV0dXJuIE1hdGguZmxvb3Ioa2cvMC40NTM1OTIzNyk7XG4gIH1cblxuXG5cbiAgcmVuZGVyKCkge1xuICAgIHZhciBoZWlnaHQgPSB0aGlzLmNvbnZlcnRIZWlnaHQodGhpcy5wcm9wcy5kYXRhLmhlaWdodCk7XG4gICAgdmFyIHdlaWdodCA9IHRoaXMuY29udmVydFdlaWdodCh0aGlzLnByb3BzLmRhdGEud2VpZ2h0KTtcbiAgICB2YXIgYm1pID0gdGhpcy5wcm9wcy5kYXRhLmJtaTtcbiAgICB2YXIgYm1pQ2xhc3MgPSB0aGlzLnByb3BzLmRhdGEuYm1pQ2xhc3M7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdXRwdXRcIj5cbiAgICAgICAgPGgzPldlaWdodDo8L2gzPlxuICAgICAgICB7d2VpZ2h0fVxuICAgICAgICA8aDM+SGVpZ2h0OjwvaDM+XG4gICAgICAgIHtoZWlnaHR9XG4gICAgICAgIDxoMz5Cb2R5IE1hc3MgSW5kZXg8L2gzPlxuICAgICAgICB7Ym1pfVxuICAgICAgICA8aDM+V2VpZ2h0IENsYXNzOjwvaDM+XG4gICAgICAgIHtibWlDbGFzc31cbiAgICAgIDwvZGl2PlxuICAgICAgKTtcblxuICB9XG5cbn1cblxuXG53aW5kb3cuQk1JID0gQk1JOyIsIlJlYWN0RE9NLnJlbmRlcig8QXBwIC8+ICwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpKTtcblxuXG4iXX0=