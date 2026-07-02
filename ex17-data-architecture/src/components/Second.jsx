function Second(props){
    return (
        <div>
            <h4>Second component</h4>

            <p>Home 컴포넌트의 message 변수값 : {props.message}</p>
            <button onClick={()=>props.setMessage('nice to meet you')}>change message</button>
        </div>
    )
}
export default Second