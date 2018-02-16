class TagList extends React.Component {
    state = {
        taglist: this.props.taglist,
        tagListIsEdit: false,
        newTagInputValue: null,
        editTagIndex: null,
        tagInputValue: null,
    }

    static defaultProps = {
        taglist: []
    };

    render() {
        const input = this.state.tagListIsEdit &&
            <Input 
                onChangeInput={this.handleChangeInput}
                onKeyUpInput={this.handleKeyUpInput}
                refInput={value => this.textInput = value}
                onClickButton={this.handleAddTagButton}
            />;
        const tag = this.state.taglist.map((tag, index) =>
            <Tag
                editTag={index === this.state.editTagIndex}
                key={tag}
                name={tag}
                tagListIsEdit={this.state.tagListIsEdit}
                onClickButton={this.handleDeleteTagButton}
                onDoubleClickButton={this.handleEditTagButton}
                onChangeInput={this.handleChangeEditTagInput}
                onBlurButton={this.handleBlurEditTagInput}
                tagInputValue={this.state.tagInputValue}
            />
        )

        return (
            <div className="container well">
                <div className="row col-md-12">
                    <div className="control col-md-2 col-xs-3">
                        <button onClick={this.handleEditButton} className='control__edit btn btn-primary'>
                           {this.state.tagListIsEdit ? 'Close' : 'Edit'}
                        </button>
                        {this.state.tagListIsEdit && <div onClick={this.handleRemoveAllButton} className='control__close btn btn-warning'>X</div>}
                    </div>
                    <div className="list col-md-10 col-xs-9">
                        {tag}
                    </div>
                </div>
                {input}
            </div>
        )
    }

    handleEditButton = () =>  this.setState({ tagListIsEdit: !this.state.tagListIsEdit });

    handleRemoveAllButton = () => this.setState({ taglist: [] });

    handleAddTagButton = () => {
        if (this.isQnique(this.state.newTagInputValue) && this.state.newTagInputValue) {
            this.state.taglist.push(this.state.newTagInputValue)
            this.setState({ taglist: this.state.taglist })
            this.textInput.value = '';
        }
    }

    tagIndex = (tag) => this.state.taglist.indexOf(tag);

    isQnique = (tag) => this.tagIndex(tag) === -1
    
    handleDeleteTagButton = (tag) => {
        this.state.taglist.splice(this.tagIndex(tag), 1);
        this.setState({ taglist: this.state.taglist })
    }

    handleEditTagButton = (tag) => {
        this.setState({
            editTagIndex: this.tagIndex(tag),
            tagInputValue: tag
        });
    }

    handleChangeEditTagInput = (e) => this.setState({ tagInputValue: e.target.value });

    handleBlurEditTagInput = () => {
        if (this.isQnique(this.state.tagInputValue)) {
            this.state.taglist.splice(this.state.editTagIndex, 1 ,this.state.tagInputValue);
            this.setState({ taglist: this.state.taglist })
        }

        this.setState({ editTagIndex: null })
    }

    handleChangeInput = (e) => {
        const trimedValue = e.target.value.trim();

        this.setState({ newTagInputValue: trimedValue })
    }

    handleKeyUpInput = (e) => {
        const KEY_ENTER = 'Enter';

        if (e.key === KEY_ENTER) {
          this.handleAddTagButton();
        }
    }
}


function Tag(props) {
    const {onClickButton, name, tagListIsEdit, onDoubleClickButton, editTag, onBlurButton, onChangeInput, tagInputValue} = props;

    const buttonNotEdit = <input value={name} className='list__content btn btn-default' type='button' />
    const buttonEdit = <input onDoubleClick={onDoubleClickButton.bind(this, name)} value={name} className='list__content btn btn-default' type='button' />
    const input = <input onChange={onChangeInput} onBlur={onBlurButton} value={tagInputValue} className='list__input form-control' type='text' />

    const button = (function() {
        if (tagListIsEdit) {
            if (editTag) {
                return input;
            }
            return buttonEdit;
        } else {
            return buttonNotEdit;
        }
    })()

    const delButton = tagListIsEdit && <div onClick={onClickButton.bind(this, name)} className='list__button btn btn-warning'>X</div>
    
    return (
        <div className='list__item'>
            {button}
            {delButton}
        </div>
    )
}


function Input(props) {
    const {onClickButton, onChangeInput, onKeyUpInput, refInput} = props;

    return (
        <div className='form col-md-8-offset-0'>
            <div className="from__container col-md-6 col-xs-4">
                <input onChange={onChangeInput} onKeyUp={onKeyUpInput} ref={refInput} className='form__input form-control' type="text" placeholder='New tag' />
            </div>
            <button onClick={onClickButton} className='form__button btn btn-primary' type='submit'>Add</button>
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