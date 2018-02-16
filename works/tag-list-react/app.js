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
            tagListIsEdit: false,
            newTagInputValue: null,
            editTagIndex: null,
            tagInputValue: null
        }, _this.handleEditButton = function () {
            return _this.setState({ tagListIsEdit: !_this.state.tagListIsEdit });
        }, _this.handleRemoveAllButton = function () {
            return _this.setState({ taglist: [] });
        }, _this.handleAddTagButton = function () {
            if (_this.isQnique(_this.state.newTagInputValue) && _this.state.newTagInputValue) {
                _this.state.taglist.push(_this.state.newTagInputValue);
                _this.setState({ taglist: _this.state.taglist });
                _this.textInput.value = '';
            }
        }, _this.tagIndex = function (tag) {
            return _this.state.taglist.indexOf(tag);
        }, _this.isQnique = function (tag) {
            return _this.tagIndex(tag) === -1;
        }, _this.handleDeleteTagButton = function (tag) {
            _this.state.taglist.splice(_this.tagIndex(tag), 1);
            _this.setState({ taglist: _this.state.taglist });
        }, _this.handleEditTagButton = function (tag) {
            _this.setState({
                editTagIndex: _this.tagIndex(tag),
                tagInputValue: tag
            });
        }, _this.handleChangeEditTagInput = function (e) {
            return _this.setState({ tagInputValue: e.target.value });
        }, _this.handleBlurEditTagInput = function () {
            if (_this.isQnique(_this.state.tagInputValue)) {
                _this.state.taglist.splice(_this.state.editTagIndex, 1, _this.state.tagInputValue);
                _this.setState({ taglist: _this.state.taglist });
            }

            _this.setState({ editTagIndex: null });
        }, _this.handleChangeInput = function (e) {
            var trimedValue = e.target.value.trim();

            _this.setState({ newTagInputValue: trimedValue });
        }, _this.handleKeyUpInput = function (e) {
            var KEY_ENTER = 'Enter';

            if (e.key === KEY_ENTER) {
                _this.handleAddTagButton();
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(TagList, [{
        key: "render",
        value: function render() {
            var _this2 = this;

            var input = this.state.tagListIsEdit && React.createElement(Input, {
                onChangeInput: this.handleChangeInput,
                onKeyUpInput: this.handleKeyUpInput,
                refInput: function refInput(value) {
                    return _this2.textInput = value;
                },
                onClickButton: this.handleAddTagButton
            });
            var tag = this.state.taglist.map(function (tag, index) {
                return React.createElement(Tag, {
                    editTag: index === _this2.state.editTagIndex,
                    key: tag,
                    name: tag,
                    tagListIsEdit: _this2.state.tagListIsEdit,
                    onClickButton: _this2.handleDeleteTagButton,
                    onDoubleClickButton: _this2.handleEditTagButton,
                    onChangeInput: _this2.handleChangeEditTagInput,
                    onBlurButton: _this2.handleBlurEditTagInput,
                    tagInputValue: _this2.state.tagInputValue
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
                            { onClick: this.handleEditButton, className: "control__edit btn btn-primary" },
                            this.state.tagListIsEdit ? 'Close' : 'Edit'
                        ),
                        this.state.tagListIsEdit && React.createElement(
                            "div",
                            { onClick: this.handleRemoveAllButton, className: "control__close btn btn-warning" },
                            "X"
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "list col-md-10 col-xs-9" },
                        tag
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
        tagListIsEdit = props.tagListIsEdit,
        onDoubleClickButton = props.onDoubleClickButton,
        editTag = props.editTag,
        onBlurButton = props.onBlurButton,
        onChangeInput = props.onChangeInput,
        tagInputValue = props.tagInputValue;


    var buttonNotEdit = React.createElement("input", { value: name, className: "list__content btn btn-default", type: "button" });
    var buttonEdit = React.createElement("input", { onDoubleClick: onDoubleClickButton.bind(this, name), value: name, className: "list__content btn btn-default", type: "button" });
    var input = React.createElement("input", { onChange: onChangeInput, onBlur: onBlurButton, value: tagInputValue, className: "list__input form-control", type: "text" });

    var button = function () {
        if (tagListIsEdit) {
            if (editTag) {
                return input;
            }
            return buttonEdit;
        } else {
            return buttonNotEdit;
        }
    }();

    var delButton = tagListIsEdit && React.createElement(
        "div",
        { onClick: onClickButton.bind(this, name), className: "list__button btn btn-warning" },
        "X"
    );

    return React.createElement(
        "div",
        { className: "list__item" },
        button,
        delButton
    );
}

function Input(props) {
    var onClickButton = props.onClickButton,
        onChangeInput = props.onChangeInput,
        onKeyUpInput = props.onKeyUpInput,
        refInput = props.refInput;


    return React.createElement(
        "div",
        { className: "form col-md-8-offset-0" },
        React.createElement(
            "div",
            { className: "from__container col-md-6 col-xs-4" },
            React.createElement("input", { onChange: onChangeInput, onKeyUp: onKeyUpInput, ref: refInput, className: "form__input form-control", type: "text", placeholder: "New tag" })
        ),
        React.createElement(
            "button",
            { onClick: onClickButton, className: "form__button btn btn-primary", type: "submit" },
            "Add"
        )
    );
}

ReactDOM.render(React.createElement(TagList, { taglist: ['1', '2', '3'] }), document.getElementById("taglist-1"));

ReactDOM.render(React.createElement(TagList, { taglist: ['Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum vero quibusdam culpa eveniet accusamus ipsum maxime quo, dolore rerum velit aliquid natus consequuntur et sint est. Debitis, ipsam a reiciendis!', 'Lorem ipsum.', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, dicta!'] }), document.getElementById("taglist-2"));

ReactDOM.render(React.createElement(TagList, null), document.getElementById("taglist-3"));
