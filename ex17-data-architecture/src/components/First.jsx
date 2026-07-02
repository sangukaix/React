import Second from "./Second"

function First(props){
    return (
        <div>
            <h3>FIRST component</h3>

            <Second message={props.message} setMessage={props.setMessage}></Second>
        </div>
    )
}
export default First