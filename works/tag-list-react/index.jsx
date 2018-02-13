class TagList extends React.Component {
    state = {
        taglist: this.props.taglist,
        isEdit: false,
        value: null,
    }

    static defaultProps = {
        taglist: []
    };

    render() {
        const input = this.state.isEdit &&
            <Input 
                onAddTag={this.handleClick}
                onChangeInput={this.handleChange}
                onKey={this.handleKeyUp}
                inputRef={input => this.textInput = input}
            />;
        const listElement = this.state.taglist.map(tag =>
            <Tag
                key={tag}
                name={tag}
                state={this.state.isEdit}
                onClickButton={this.handleDeleteTag}
            />
        )

        return (
            <div className="container well">
                <div className="row col-md-12">
                    <div className="control col-md-2 col-xs-3">
                        <button className='control__edit btn btn-primary' onClick={this.handleIsEdit}>
                           {this.state.isEdit ? 'Close' : 'Edit'}
                        </button>
                        <div className='control__close btn btn-warning' onClick={this.handleDelAll}>X</div>
                    </div>
                    <div className="list col-md-10 col-xs-9">
                        {listElement}
                    </div>
                </div>
                {input}
            </div>
        )
    }

    handleIsEdit = () => {
        this.setState({
            isEdit: !this.state.isEdit
        });
    }

    handleDelAll = () => {
        this.setState({ taglist: [] })
    }

    isQnique = (tag) => this.state.taglist.indexOf(tag) === -1

    handleClick = () => {
        if (this.isQnique(this.state.value) && this.state.value) {
            this.state.taglist.push(this.state.value)
            this.setState({ taglist: this.state.taglist })
            this.textInput.value = '';
        }
    }

    handleChange = (e) => {
        const trimedValue = e.target.value.trim();

        this.setState({ value: trimedValue })
    }

    handleDeleteTag = (tag) => {
        const index = this.state.taglist.indexOf(tag);

        this.state.taglist.splice(index, 1);
        this.setState({ taglist: this.state.taglist })
    }

    handleKeyUp = (e) => {
        const KEY_ENTER = 'Enter';

        if (e.key === KEY_ENTER) {
          this.handleClick();
        }
    }
}


function Tag(props) {
    const {onClickButton, name, state} = props;
    const button = state && <div className='list__button btn btn-warning' onClick={onClickButton.bind(this, name)}>X</div>

    return (
        <div className='list__item'>
            <input className='list__content btn btn-default' type='button' value={name} />
            {button}
        </div>
    )
}


function Input(props) {
    const {onAddTag, onChangeInput, onKey, inputRef} = props;

    return (
        <div className='form col-md-8-offset-0'>
            <div className="from__container col-md-6 col-xs-4">
                <input onChange={onChangeInput} onKeyUp={onKey} ref={inputRef} className='form__input form-control' type="text" placeholder='New tag' />
            </div>
            <button onClick={onAddTag} className='form__button btn btn-primary' type='submit'>Add</button>
        </div>
    )
}


ReactDOM.render(
    <TagList taglist={['1', '2', '3']} />,
    document.getElementById("taglist-1")
)

ReactDOM.render(
    <TagList taglist={['Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum vero quibusdam culpa eveniet accusamus ipsum maxime quo, dolore rerum velit aliquid natus consequuntur et sint est. Debitis, ipsam a reiciendis!', 'Lorem ipsum.', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, dicta!']} />,
    document.getElementById("taglist-2")
)

ReactDOM.render(
    <TagList />,
    document.getElementById("taglist-3")
)