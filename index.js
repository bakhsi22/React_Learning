import React from 'react';
import ReactDOM from 'react-dom';

class Helloworld extends React.Component{
    render(){
        return(
        <h1>Helloworld</h1>
        )
    }
}
ReactDOM.render(<Helloworld/>, document.getElementById('root'));

