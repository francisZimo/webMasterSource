import React, { Component,PureComponent } from 'react'

class Library extends Component{
  // shouldComponentUpdate (nextProps, nextState, nextContext) {
  //   const {name,position}=this.props;
  //   const {name:newName,position:newPosition}=nextProps;
  //   console.log(name,newName,'==xx')
  //   if(name===newName&&position===newPosition){
  //     return false
  //   }
  //   return true
  // }
  render () {
    console.log('书本信息')
    const {name,position}=this.props
    return (
     <div>
       {name}:{position}
     </div>
    )
  }
}

class Demo extends PureComponent{
  render () {
    console.log('count信息')
    return(
      <div>
        {
          'count:'+this.props.count.count
        }
      </div>
    )
  }
}

const booksInfo=[
  {name:'富兰克林自传',position:'A区102号'},
  {name:'文艺复兴',position:'B区122号'},
]
class ShouldUpdate extends Component {
  state={
    booksInfo:[],
    obj:{
      count:0
    },

  }
  componentDidMount () {
    this.setState({
      booksInfo
    })
  }

  handleSearch=()=>{
    // let obj=this.state.obj;
    // obj.count=1;
    // obj.name='hha'
    this.setState({
      booksInfo:[{name:'文艺复兴222',position:'B区122号33'}],
      obj:{
        count:1
      }
    })
  }



  render () {
    const {booksInfo}=this.state
    return (
      <div>
        <button onClick={this.handleSearch}>查询</button>
        <p>
          {this.state.count}
        </p>
        <Demo count={this.state.obj}></Demo>
        {
          booksInfo.map((item)=>(
            <Library name={item.name} position={item.position} key={item.name} />
          ))
        }
      </div>
    )
  }
}

export default ShouldUpdate