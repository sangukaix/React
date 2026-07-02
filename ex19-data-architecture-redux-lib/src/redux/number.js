//number 상태값을 관리하는 리듀서를 만드는 파일

//이 리듀서가 처음 배치될때..이전 state 작업이 없기에 초기값을 파리미터 디폴트값으로 지정
function numberReducer(state={number:0}, action){ //이 리듀서의 파라미터로 이전state값, action객체를 받음
    switch(action.type){
        case 'increase':
            //기존 state의 number변수의 값을 1 증가한 새로운 state를 리턴(setState()작업)
            return {...state, number: state.number+1} //새로운 state객체
        case 'decrease':
            return {...state, number: state.number-1} //새로운 state객체(자동UI갱신)
        case 'reset':
            return {...state, number: action.payload} //액션객체에 전달된 payload값으로 설정
        
        default:
            return state //원래 state를 그대로 리턴하면 화면갱신 X
    }
}
export default numberReducer