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
          'BMI Calculator'
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
          )
        )
      );
    }
  }]);

  return App;
}(React.Component);

window.App = App;
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

var BMI = function (_React$Component) {
  _inherits(BMI, _React$Component);

  function BMI() {
    _classCallCheck(this, BMI);

    return _possibleConstructorReturn(this, (BMI.__proto__ || Object.getPrototypeOf(BMI)).apply(this, arguments));
  }

  _createClass(BMI, [{
    key: "render",
    value: function render() {

      return React.createElement("div", { className: "output" });
    }
  }]);

  return BMI;
}(React.Component);

window.BMI = BMI;
'use strict';

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb21wb25lbnRzL0FwcC5qc3giLCIuLi9zcmMvY29tcG9uZW50cy9BdHRyaWJ1dGVzLmpzeCIsIi4uL3NyYy9jb21wb25lbnRzL091dHB1dC5qc3giLCIuLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUdNLEc7OztBQUNKLGVBQVksS0FBWixFQUFtQjtBQUFBOztBQUFBLDBHQUNYLEtBRFc7O0FBRWpCLFVBQUssS0FBTCxHQUFhO0FBQ1gsY0FBTyxHQURJO0FBRVgsY0FBTyxFQUZJO0FBR1gsV0FBSSxLQUhPO0FBSVgsZ0JBQVU7QUFKQyxLQUFiO0FBRmlCO0FBUWxCOzs7O2lDQUdZLE0sRUFBTztBQUNsQixXQUFLLFFBQUwsQ0FBYyxFQUFDLFFBQU8sTUFBUixFQUFkLEVBQStCLEtBQUssU0FBcEMsRUFBK0MsWUFBVTtBQUN2RCxnQkFBUSxHQUFSLENBQVksS0FBSyxLQUFqQjtBQUNELE9BRkQ7QUFHRDs7O2lDQUVZLE0sRUFBTztBQUNsQixXQUFLLFFBQUwsQ0FBYyxFQUFDLFFBQU8sTUFBUixFQUFkLEVBQStCLEtBQUssU0FBcEMsRUFBK0MsWUFBVTtBQUN2RCxnQkFBUSxHQUFSLENBQVksS0FBSyxLQUFqQjtBQUNELE9BRkQ7QUFHRDs7O2dDQUVVO0FBQ1QsVUFBSSxNQUFNLENBQUUsS0FBSyxLQUFMLENBQVcsTUFBWCxHQUFvQixLQUFLLEtBQUwsQ0FBVyxNQUEvQixHQUF3QyxLQUFLLEtBQUwsQ0FBVyxNQUFwRCxHQUE4RCxLQUEvRCxFQUFzRSxPQUF0RSxDQUE4RSxDQUE5RSxDQUFWO0FBQ0EsV0FBSyxRQUFMLENBQWMsRUFBQyxLQUFJLEdBQUwsRUFBVSxVQUFVLEtBQUssV0FBTCxDQUFpQixHQUFqQixDQUFwQixFQUFkLEVBQTBELFlBQVU7QUFDbEUsZ0JBQVEsR0FBUixDQUFZLEtBQUssS0FBakI7QUFDRCxPQUZEO0FBR0Q7OztnQ0FFVyxHLEVBQUk7QUFDZCxVQUFHLE1BQU0sSUFBVCxFQUFlLE9BQU8sYUFBUDtBQUNmLFVBQUcsT0FBTyxJQUFQLElBQWUsT0FBTyxJQUF6QixFQUErQixPQUFPLFFBQVA7QUFDL0IsVUFBRyxPQUFPLEVBQVAsSUFBYSxPQUFPLElBQXZCLEVBQTZCLE9BQU8sWUFBUDtBQUM3QixVQUFHLE9BQU8sRUFBVixFQUFjLE9BQU8sT0FBUDtBQUNmOzs7NkJBSVE7QUFDVCxhQUNFO0FBQUE7QUFBQSxVQUFLLFdBQVUsS0FBZjtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FERjtBQUVFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERjtBQUVFLGdDQUFDLFVBQUQsSUFBWSxPQUFPLEtBQUssS0FBTCxDQUFXLE1BQTlCLEVBQXNDLFVBQVUsS0FBSyxZQUFMLENBQWtCLElBQWxCLENBQXVCLElBQXZCLENBQWhEO0FBRkYsV0FERjtBQUtFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERjtBQUVFLGdDQUFDLFVBQUQsSUFBWSxPQUFPLEtBQUssS0FBTCxDQUFXLE1BQTlCLEVBQXNDLFVBQVUsS0FBSyxZQUFMLENBQWtCLElBQWxCLENBQXVCLElBQXZCLENBQWhEO0FBRkY7QUFMRjtBQUZGLE9BREY7QUFnQkM7Ozs7RUF6RGUsTUFBTSxTOztBQWdFeEIsT0FBTyxHQUFQLEdBQWEsR0FBYjs7Ozs7Ozs7Ozs7SUNqRU0sVTs7O0FBQ0osc0JBQVksS0FBWixFQUFtQjtBQUFBOztBQUFBLHdIQUNYLEtBRFc7O0FBRWpCLFVBQUssS0FBTCxHQUFhO0FBQ1gsYUFBTyxNQUFNO0FBREYsS0FBYjtBQUdBLFVBQUssR0FBTCxHQUFXLEdBQVg7QUFMaUI7QUFNbEI7Ozs7NkJBTVEsSyxFQUFNO0FBQ2IsY0FBUSxHQUFSLENBQVksTUFBTSxNQUFOLENBQWEsS0FBekI7QUFDQTtBQUNBLFdBQUssS0FBTCxDQUFXLFFBQVgsQ0FBb0IsS0FBSyxLQUFMLENBQVcsS0FBL0I7QUFDQSxXQUFLLFFBQUwsQ0FBYyxFQUFDLE9BQU0sTUFBTSxNQUFOLENBQWEsS0FBcEIsRUFBZDtBQUNEOzs7NkJBR1E7QUFDUCxhQUNFO0FBQUE7QUFBQSxVQUFLLFdBQVUsWUFBZjtBQUNDO0FBQ0MsZ0JBQUssT0FETjtBQUVDLGlCQUFPLEtBQUssS0FBTCxDQUFXLEtBRm5CO0FBR0MsZUFBSyxLQUFLLEtBQUwsQ0FBVyxHQUhqQjtBQUlDLGVBQUssS0FBSyxHQUpYO0FBS0MsZ0JBQU0sS0FBSyxLQUFMLENBQVcsSUFMbEI7QUFNQyxvQkFBVSxLQUFLLFFBQUwsQ0FBYyxJQUFkLENBQW1CLElBQW5CO0FBTlg7QUFERCxPQURGO0FBWUQ7Ozs7RUFsQ3NCLE1BQU0sUzs7QUFxQy9CLE9BQU8sVUFBUCxHQUFvQixVQUFwQjs7Ozs7Ozs7Ozs7SUNyQ00sRzs7Ozs7Ozs7Ozs7NkJBQ0s7O0FBSVAsYUFDRSw2QkFBSyxXQUFVLFFBQWYsR0FERjtBQU9EOzs7O0VBWmUsTUFBTSxTOztBQWlCeEIsT0FBTyxHQUFQLEdBQWEsR0FBYjs7O0FDbkJBLFNBQVMsTUFBVCxDQUFnQixvQkFBQyxHQUFELE9BQWhCLEVBQTBCLFNBQVMsY0FBVCxDQUF3QixLQUF4QixDQUExQiIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuXG5jbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgaGVpZ2h0OjE3MCxcbiAgICAgIHdlaWdodDo2NSxcbiAgICAgIGJtaToyMi40OSxcbiAgICAgIGJtaUNsYXNzOiAnTm9ybWFsJ1xuICAgIH1cbiAgfVxuXG5cbiAgaGVpZ2h0Q2hhbmdlKGhlaWdodCl7XG4gICAgdGhpcy5zZXRTdGF0ZSh7aGVpZ2h0OmhlaWdodH0sIHRoaXMuYm1pQ2hhbmdlLCBmdW5jdGlvbigpe1xuICAgICAgY29uc29sZS5sb2codGhpcy5zdGF0ZSk7XG4gICAgfSk7XG4gIH1cblxuICB3ZWlnaHRDaGFuZ2Uod2VpZ2h0KXtcbiAgICB0aGlzLnNldFN0YXRlKHt3ZWlnaHQ6d2VpZ2h0fSwgdGhpcy5ibWlDaGFuZ2UsIGZ1bmN0aW9uKCl7XG4gICAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlKTtcbiAgICB9KTtcbiAgfVxuXG4gIGJtaUNoYW5nZSgpe1xuICAgIGxldCBibWkgPSAoKHRoaXMuc3RhdGUud2VpZ2h0IC8gdGhpcy5zdGF0ZS5oZWlnaHQgLyB0aGlzLnN0YXRlLmhlaWdodCkgKiAxMDAwMCkudG9GaXhlZCgyKTtcbiAgICB0aGlzLnNldFN0YXRlKHtibWk6Ym1pLCBibWlDbGFzczogdGhpcy5nZXRCbWlDbGFzcyhibWkpfSwgZnVuY3Rpb24oKXtcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUpO1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0Qm1pQ2xhc3MoYm1pKXtcbiAgICBpZihibWkgPCAxOC41KSByZXR1cm4gJ1VuZGVyd2VpZ2h0JztcbiAgICBpZihibWkgPj0gMTguNSAmJiBibWkgPD0gMjQuOSkgcmV0dXJuICdOb3JtYWwnO1xuICAgIGlmKGJtaSA+PSAyNSAmJiBibWkgPD0gMjkuOSkgcmV0dXJuICdPdmVyd2VpZ2h0JztcbiAgICBpZihibWkgPj0gMzApIHJldHVybiAnT2Jlc2UnO1xuICB9XG5cblxuXG4gIHJlbmRlcigpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImFwcFwiPlxuICAgICAgPGgxPkJNSSBDYWxjdWxhdG9yPC9oMT5cbiAgICAgIDxmb3JtPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxsYWJlbD5IZWlnaHQ8L2xhYmVsPlxuICAgICAgICAgIDxBdHRyaWJ1dGVzIHZhbHVlPXt0aGlzLnN0YXRlLmhlaWdodH0gb25DaGFuZ2U9e3RoaXMuaGVpZ2h0Q2hhbmdlLmJpbmQodGhpcyl9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxsYWJlbD5XZWlnaHQ8L2xhYmVsPlxuICAgICAgICAgIDxBdHRyaWJ1dGVzIHZhbHVlPXt0aGlzLnN0YXRlLndlaWdodH0gb25DaGFuZ2U9e3RoaXMud2VpZ2h0Q2hhbmdlLmJpbmQodGhpcyl9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9mb3JtPlxuICAgIDwvZGl2PlxuICAgICk7XG5cbiAgfVxuXG5cbn1cblxuXG5cbndpbmRvdy5BcHAgPSBBcHA7XG5cblxuXG4iLCJcblxuY2xhc3MgQXR0cmlidXRlcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICB2YWx1ZTogcHJvcHMudmFsdWVcbiAgICB9XG4gICAgdGhpcy5tYXggPSAyNTBcbiAgfVxuXG5cblxuXG5cbiAgb25DaGFuZ2UoZXZlbnQpe1xuICAgIGNvbnNvbGUubG9nKGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gICAgLy8gYWNjZXNzIHN0YXRlIGZyb20gcGFyZW50IGNvbXBvZW50ICh1cGRhdGUgQXR0cmlidXRlcyBpbiBkaXYpXG4gICAgdGhpcy5wcm9wcy5vbkNoYW5nZSh0aGlzLnN0YXRlLnZhbHVlKTtcbiAgICB0aGlzLnNldFN0YXRlKHt2YWx1ZTpldmVudC50YXJnZXQudmFsdWV9KTtcbiAgfVxuXG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImF0dHJpYnV0ZXNcIj5cbiAgICAgICA8aW5wdXRcbiAgICAgICAgdHlwZT1cInJhbmdlXCJcbiAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUudmFsdWV9XG4gICAgICAgIG1pbj17dGhpcy5wcm9wcy5taW59XG4gICAgICAgIG1heD17dGhpcy5tYXh9XG4gICAgICAgIHN0ZXA9e3RoaXMucHJvcHMuc3RlcH1cbiAgICAgICAgb25DaGFuZ2U9e3RoaXMub25DaGFuZ2UuYmluZCh0aGlzKX1cbiAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG53aW5kb3cuQXR0cmlidXRlcyA9IEF0dHJpYnV0ZXM7XG5cblxuIiwiXG5cbmNsYXNzIEJNSSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcblxuXG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdXRwdXRcIj5cblxuXG4gICAgICA8L2Rpdj5cbiAgICAgICk7XG5cbiAgfVxuXG59XG5cblxud2luZG93LkJNSSA9IEJNSTsiLCJSZWFjdERPTS5yZW5kZXIoPEFwcCAvPiAsIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKSk7XG5cblxuIl19