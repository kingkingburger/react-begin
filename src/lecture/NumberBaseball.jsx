// const React = require('React')
// const {Component} = React
import React, {Component} from "react";
import Try from "./Try";
function getNumbers() { // 숫자 4개를 랜덤하게 뽑아주는 함수

}

class NumberBaseball extends Component {
constructor(props) {
    super(props);
    this.state = {
        result: '',
        value: '',
        answer: getNumbers(),
        tries: [],
    };
    this.onChangeInput = this.onChangeInput.bind(this);
}

    state = {
        result: '',
        value: '',
        answer: getNumbers(),
        tries: [],
    }

    test = [{fruit: '사과', taste: '달다'}]

    onSubmitForm = () => {

    }


    onChangeInput(e)  {
        console.log(this)
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
                    {this.test
                        .map((v, i) =>{
                            return (
                                <Try key={v.fruit + v.taste} value={v} index={i}/>
                            )
                        }
                    )}
                </ul>
            </>
        )
    }
}


// export const hello = 'hello' // import { hello }
export default NumberBaseball // import Number Baseball