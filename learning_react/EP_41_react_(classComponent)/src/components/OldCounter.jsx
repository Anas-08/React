import { Component } from "react";

class OldCounter extends Component {
    constructor(){
        super()
        this.state = {
            count : 0,
        }
    }
    render() {
        // const {name} = this.props
        return <>
         <div className='px-8 bg-slate-700 max-w-xs h-48 mx-auto text-center rounded-lg flex items-center justify-center flex-col gap-5'>
    <h1 className='text-white'>Old Counter (Class Component)</h1>
      <h2 className='text-white text-2xl'>{this.state.count}</h2>
      <button className='bg-blue-500 text-lg mx-4 px-4 py-2 rounded-lg' onClick={() => this.setState({count: this.state.count + 1}) }>Increase Count</button>
    </div>
        </>
    }
}

export default OldCounter