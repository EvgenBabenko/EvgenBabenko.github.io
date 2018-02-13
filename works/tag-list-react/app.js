"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TagList = function (_React$Component) {
    _inherits(TagList, _React$Component);

    function TagList() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, TagList);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = TagList.__proto__ || Object.getPrototypeOf(TagList)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            taglist: _this.props.taglist,
            isEdit: false,
            value: null
        }, _this.handleIsEdit = function () {
            _this.setState({
                isEdit: !_this.state.isEdit
            });
        }, _this.handleDelAll = function () {
            _this.setState({ taglist: [] });
        }, _this.isQnique = function (tag) {
            return _this.state.taglist.indexOf(tag) === -1;
        }, _this.handleClick = function () {
            if (_this.isQnique(_this.state.value) && _this.state.value) {
                _this.state.taglist.push(_this.state.value);
                _this.setState({ taglist: _this.state.taglist });
                _this.textInput.value = '';
            }
        }, _this.handleChange = function (e) {
            var trimedValue = e.target.value.trim();

            _this.setState({ value: trimedValue });
        }, _this.handleDeleteTag = function (tag) {
            var index = _this.state.taglist.indexOf(tag);

            _this.state.taglist.splice(index, 1);
            _this.setState({ taglist: _this.state.taglist });
        }, _this.handleKeyUp = function (e) {
            var KEY_ENTER = 'Enter';

            if (e.key === KEY_ENTER) {
                _this.handleClick();
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(TagList, [{
        key: "render",
        value: function render() {
            var _this2 = this;

            var input = this.state.isEdit && React.createElement(Input, {
                onAddTag: this.handleClick,
                onChangeInput: this.handleChange,
                onKey: this.handleKeyUp,
                inputRef: function inputRef(input) {
                    return _this2.textInput = input;
                }
            });
            var listElement = this.state.taglist.map(function (tag) {
                return React.createElement(Tag, {
                    key: tag,
                    name: tag,
                    state: _this2.state.isEdit,
                    onClickButton: _this2.handleDeleteTag
                });
            });

            return React.createElement(
                "div",
                { className: "container well" },
                React.createElement(
                    "div",
                    { className: "row col-md-12" },
                    React.createElement(
                        "div",
                        { className: "control col-md-2 col-xs-3" },
                        React.createElement(
                            "button",
                            { className: "control__edit btn btn-primary", onClick: this.handleIsEdit },
                            this.state.isEdit ? 'Close' : 'Edit'
                        ),
                        React.createElement(
                            "div",
                            { className: "control__close btn btn-warning", onClick: this.handleDelAll },
                            "X"
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "list col-md-10 col-xs-9" },
                        listElement
                    )
                ),
                input
            );
        }
    }]);

    return TagList;
}(React.Component);

TagList.defaultProps = {
    taglist: []
};


function Tag(props) {
    var onClickButton = props.onClickButton,
        name = props.name,
        state = props.state;

    var button = state && React.createElement(
        "div",
        { className: "list__button btn btn-warning", onClick: onClickButton.bind(this, name) },
        "X"
    );

    return React.createElement(
        "div",
        { className: "list__item" },
        React.createElement("input", { className: "list__content btn btn-default", type: "button", value: name }),
        button
    );
}

function Input(props) {
    var onAddTag = props.onAddTag,
        onChangeInput = props.onChangeInput,
        onKey = props.onKey,
        inputRef = props.inputRef;


    return React.createElement(
        "div",
        { className: "form col-md-8-offset-0" },
        React.createElement(
            "div",
            { className: "from__container col-md-6 col-xs-4" },
            React.createElement("input", { onChange: onChangeInput, onKeyUp: onKey, ref: inputRef, className: "form__input form-control", type: "text", placeholder: "New tag" })
        ),
        React.createElement(
            "button",
            { onClick: onAddTag, className: "form__button btn btn-primary", type: "submit" },
            "Add"
        )
    );
}

ReactDOM.render(React.createElement(TagList, { taglist: ['1', '2', '3'] }), document.getElementById("taglist-1"));

ReactDOM.render(React.createElement(TagList, { taglist: ['Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum vero quibusdam culpa eveniet accusamus ipsum maxime quo, dolore rerum velit aliquid natus consequuntur et sint est. Debitis, ipsam a reiciendis!', 'Lorem ipsum.', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, dicta!'] }), document.getElementById("taglist-2"));

ReactDOM.render(React.createElement(TagList, null), document.getElementById("taglist-3"));
