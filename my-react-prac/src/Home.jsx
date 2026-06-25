import {Component} from "react"
//Home 콤포넌트 만들기

const siteName = "Hello Python"

class Home extends Component {
    render(){
        return (
            <div className="home">
                <h2>{siteName}</h2>
                <p>파포자 구조 프로젝트</p>

                <button onClick={this.Start}>시작하기</button>
            </div>
        )
    }
    Start= () => alert("Hello Python 시작!")
}

export default Home
