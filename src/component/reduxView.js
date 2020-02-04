import React from 'react';
import { connect } from 'react-redux';
import { ChangeAction, AddWishAction } from '../action/action';
import './reduxView.css'

class ReduxView extends React.Component {
    constructor(props) {
        super();
        console.log('props', props)
    }

    render() {
        const da = this.props.fruits.map(f => {
            return <ul key={Math.random()}><li>{f}</li></ul>;
        })
        return (
            <div>Hello,
                <h1 className="threeD">{this.props.myName}</h1>
                <div>
                    <button onClick={() => this.props.changeName()} >Your Name</button>
                    <button onClick={() => this.props.addFruit()} >Add Fruit</button>
                    {da}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    myName: state.name,
    fruits: state.fruit
})

const mapDispatchToProps = (dispatch) => ({
    changeName: () => { dispatch(ChangeAction()) },
    addFruit: () => { dispatch(AddWishAction()) }
})

export default connect(mapStateToProps, mapDispatchToProps)(ReduxView);
