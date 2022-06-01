import React, { Component } from 'react';

class Box extends Component {
    state = { 
        x:0,
     } 

    handleClickLeft=() =>{
        this.setState({
            x:this.state.x - 10,
        });

        console.log("click left",this);
    }

    handleClickRight=()=>{
        this.setState({
            x:this.state.x + 10,
        });

        console.log("click right",this);
    }

    render() { 
        return (
        <React.Fragment>
            <div style={this.getShits()}>{this.toString()}</div>
            {/* <div style={this.getStyles()}>{this.toString()}</div> */}
            <h1>Hello World</h1>
            <button onClick={this.handleClickLeft} className='btn btn-primary m-2'>left</button>
            <button onClick={this.handleClickRight} className='btn btn-success m-2'>right</button>
        </React.Fragment>
        );
    }

    getShits(){
        let shits = {
            width:"50px",
            height:"50px",
            backgroundColor: "lightblue",
            color:"white",
            textAlign:"center",
            lineHeight:"50px",
            borderRadius:"5px",
            marginLeft:this.state.x,
        };

        if(this.state.x ===0) {
            shits.backgroundColor ='orange';
        }
        return shits;
    }

    toString() {
        const {x} = this.state;
        return `x: ${x}`;
    }
}



export default Box;