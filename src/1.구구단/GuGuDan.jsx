const React = require('react')

const {useState, useRef} = React

const GuGuDan = () =>{ // 함수형 컴포넌트 x 함수 컴포넌트 o
    const [first, setFirst] = useState(Math.ceil(Math.random() * 9));
    const [second, setSecond] = useState(Math.ceil(Math.random() * 9));
    const [value, setValue] = useState('');
    const [result, setResult] = useState('');
    const [sum, setSum] = useState('');

    let hell = null;

    const onSubmit = (e) =>{
        e.preventDefault()
        if(parseInt(value) === first * second){
            // setResult('정답' + value)
            setResult((prevState) => {
                return '정답' + prevState
            })
            setFirst(Math.ceil(Math.random() * 9))
            setSecond(Math.ceil(Math.random() * 9))
            setSum(first * second)
            setValue('')
            hell.focus()
        }else{
            setResult('땡')
            setValue('')
            hell.focus()
        }
    }

    return (
        // <React.Fragment> react Fragment 제거 가능
        <>
            <div>{first}곱하기{second}는?</div>
            <form onSubmit={onSubmit}>
                <input ref={(c) => {hell = c}} type="number" value={value} onChange={(e) => setValue(e.target.value)}/>
                <button>입력!</button>
            </form>
            <div>{sum}정답</div>
            <div>{result}</div>
        </>
        // </React.Fragment>
    )
};

module.exports = GuGuDan;