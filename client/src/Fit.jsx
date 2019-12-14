import React from "react";
import styled from 'styled-components'

const Fap = styled.div`
color:rgb(0, 0, 0)
font-family:"Gotham Narrow SSm 4r", "Gotham Narrow SSm 5r", sans-serif;
font-size:12px;
font-weight:500;
overflow-x:auto;
overflow-y:auto;
position:relative;
text-rendering:optimizelegibility;
text-size-adjust:100%;
visibility:visible;
`
const Hit = styled.div`
box-sizing:border-box;
color:rgb(119, 119, 119);
display:block;
font-family:"Gotham Narrow SSm 7r", "Gotham Narrow SSm 5r", sans-serif;
font-size:12px;
font-weight:400;
height:18px;
line-height:18px;
text-align:left;
text-rendering:optimizelegibility;
text-size-adjust:100%;
visibility:visible;
width:165px;
-webkit-font-smoothing:antialiased;
-webkit-tap-highlight-color:rgba(0, 0, 0, 0);
`
const Kiv = styled.div`
background-image:url("https://content.hbc.com/content/frontend/5-26-75/images/5ba05ad3127c4f12aee2ed6f30bcc458.png");
background-position-x:-1604px;
background-position-y:-1728px;
/* box-sizing:border-box; */
color:rgb(0, 0, 0);
display:block;
font-family:"Gotham Narrow SSm 7r", "Gotham Narrow SSm 5r", sans-serif;
font-size:11px;
font-weight:400;
height:16px;
line-height:18px;
text-rendering:optimizelegibility;
text-size-adjust:100%;
visibility:visible;
width:165px;
-webkit-font-smoothing:antialiased;
-webkit-tap-highlight-color:rgba(0, 0, 0, 0);
`
const Dot = styled.div`
background-image:url("https://content.hbc.com/content/frontend/5-26-75/images/5ba05ad3127c4f12aee2ed6f30bcc458.png");
background-position-x:-1604px;
background-position-y:-1802px;
box-sizing:border-box;
color:rgb(0, 0, 0);
display:block;
font-family:"Gotham Narrow SSm 7r", "Gotham Narrow SSm 5r", sans-serif;
font-size:11px;
font-weight:400;
height:16px;
line-height:18px;
margin-left:78.8125px;
text-align:left;
text-rendering:optimizelegibility;
text-size-adjust:100%;
visibility:visible;
width:10px;
-webkit-font-smoothing:antialiased;
-webkit-tap-highlight-color:rgba(0, 0, 0, 0);
`
class Fit extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentFit: '0%'
    }
  }
  componentDidMount() {
    this.calculateFit(this.props.fit)
  }
  calculateFit(fit) {
    if (fit) {
      var fitArr = [
        'Too small',
        'A Little Small',
        'True to Size',
        'A Little Big',
        'Too Big'
      ]
        var fitCalc = fitArr.indexOf(fit)
        if (fit === 'Too Small') {
            fitCalc = 0;
            fitCalc.toString() + '%'
            this.setState({
              currentFit: fitCalc
            })
        } else {
            fitCalc *= 40;
            fitCalc.toString() + '%'
            this.setState({
              currentFit: fitCalc
            })
        }
    }
  }
  render() {
    return (
      <Fap >
              <Hit>
                <b>
                Fit
                </b>
                </Hit>
            <Kiv >
              <Dot style={{'marginLeft': this.state.currentFit}}></Dot>
            </Kiv>
            <Hit>Too Small &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Too Big</Hit>
            <br />
            <br />
          </Fap>
    )
  }
}
export default Fit;