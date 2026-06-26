import {Component} from "react";

class MyComponent2 extends Component{
    render(){
        return(
            // 컴포넌트 조각이 본인의 스타일은 알아서 해놓기..
            <div style={{margin:'16px'}}> {/* {} 자바스크립트로 넣을거다라는 뜻 안쪽{} 는 여러개를 가지고 있는 객체를 가지고 있는 것 name, age 등 */}
                <span style={{padding: '.5rem 1rem', color: 'blue'}}>안녕하세요. MyComponent2입니다.</span>
                <button>버튼</button>
            </div>
        )
    }
}
export default MyComponent2