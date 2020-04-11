import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { CounterComponent } from './CounterComponent';
import * as MyActions from './counterActions'

const mapStateToProps = (state)=>{
    return {
        counterValue : state.counter
    }
}


const mapDispatchToProps = (dispatch) => {
	  return {
      onIncrementCounter: () => { dispatch(MyActions.createIncrementCounterAction()) },
	  onDecrementCounter: () => { dispatch(MyActions.createDecrementCounterAction()) }
    }
}

const CounterContainer = connect(
	mapStateToProps ,
	mapDispatchToProps
)(CounterComponent)

export default CounterContainer