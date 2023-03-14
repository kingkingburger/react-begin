const React = require("react");
const {useState, useRef} = React;


const WordRelay = () => {
    const [word, setWord] = useState('원민호')
    const [value, setValue] = useState('')
    const [result, setResult] = useState('')
    const inputEl = useRef(null)

    const onSubmitForm = (e) => {
        console.dir(e.target)
        e.preventDefault();
        if (word[word.length - 1] === e.target.children.word.value[0]) {
            setResult("딩동댕");
            setWord(e.target.children.word.value);
            // setValue('');
            e.target.children.word.value = '';
            inputEl.current.focus();
        } else {
            setResult("땡");
            // setValue("");
            inputEl.current.focus();
        }
    }

    const onChangeInput = (e) => {
        setValue(e.target.value)
        // this.setState({value: e.target.value})
    }

    {
        return (
            <>
                <div>{word}</div>
                <form onSubmit={onSubmitForm}>
                    <input
                        defaultValue="하하하"
                        id='word'
                        ref={inputEl}
                    />
                    <button>입력!</button>
                </form>
                <div>{result}</div>
            </>

        )
    }

}

module.exports = WordRelay