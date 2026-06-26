import { Component } from "react";

class MyButton extends Component{
    render(){
        return(
            <div style={{margin:4}}>
                <span style={{padding:8}}>{this.props.label}</span> {/* 버튼클릭 여기를 this.props.label로 받을수도 있어서 바꾼거임. */}
                <button style={{padding:8}} onClick={this.props.aaa}>눌러주세요</button>
            </div>

        )
    }
}
export default MyButton