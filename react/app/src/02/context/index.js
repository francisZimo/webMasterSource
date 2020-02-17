import React, { Component } from 'react'
import {ThemeProvider,ThemeConsumer,themeContext} from './createContext'
//
// const  ThemeContext=React.createContext('light')
const theme={
  color:'green'
}
class Context extends Component {

  render () {
    return (
      <div>
        <h3>我是context</h3>
        <ThemeProvider
          value={theme}
        >
          <Head></Head>
        </ThemeProvider>
      </div>
    )
  }
}

function Head (){
  return(
    <div style={{border:'1px solid red'}}>
      <GoodsList></GoodsList>
    </div>
  )
}

class GoodsList extends Component {
  static contextType = themeContext;

  render () {
    console.log(this.context,'context')
    return (
      <>
        <ThemeConsumer>
          {
            ctx => {
              return (
                <>
                  <div style={{ color: `${ctx.color}` }}>看看我是啥颜色</div>
                  <span style={{ color: `${this.context.color}` }} >看看我span是啥颜色</span>
                </>
                )

            }
          }
        </ThemeConsumer>
      </>

    )

  }
}
export default Context