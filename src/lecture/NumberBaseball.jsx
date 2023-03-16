// const React = require('React')
// const {Component} = React
import React, {Component} from "react";

function getNumbers() { // 숫자 4개를 랜덤하게 뽑아주는 함수

}

class NumberBaseball extends Component {

    state = {
        result: '',
        value: '',
        answer: getNumbers(),
        tries: [],
    }

    onSubmitForm = () =>{

    }

    onChangeInput = () =>{

    }

    render() {
        return (
            <>
                <h1>{this.state.result}</h1>
                <form onSubmit={this.onSubmitForm}>
                    <input maxLength={4} value={this.state.value} onChange={this.onChangeInput}/>
                </form>
                <div>시도: {this.state.tries.length}</div>
                <ul>
                    {[{fruit: '사과', taste: '달다'}]
                        .map((v,i) => (<li key={v.fruit+v.taste}>{v.fruit} - {v.taste}</li>))}
                </ul>
            </>
        )
    }
}


// export const hello = 'hello' // import { hello }
export default NumberBaseball // import Number Baseball