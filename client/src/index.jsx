import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import StarRatingComponent from 'react-star-rating-component';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import axios from "axios"
import moment from 'moment'
import StarRating from 'react-star-ratings'
import Fit from "./Fit.jsx"

const theme = createMuiTheme({
  typography: {
    fontFamily: "Source Sans Pro, sans-serif",
  },
  overrides: {
    MuiTypography: {
      body1: {
        fontSize: "13px",
        fontFamily: "Source Sans Pro, sans-serif",
        fontWeight: "300",
      },
    }
  }
});

const useStyles = makeStyles({
  root: {
    '&:hover': {
      backgroundColor: 'transparent',
    },

  },
  icon: {
    borderRadius: '50%',
    width: 14,
    height: 14,
    boxShadow: 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
    backgroundColor: '#f5f8fa',
    backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
    '$root.Mui-focusVisible &': {
      outline: '2px auto rgba(19,124,189,.6)',
      outlineOffset: 2,
    },
    'input:hover ~ &': {
      backgroundColor: '#ebf1f5',
    },
    'input:disabled ~ &': {
      boxShadow: 'none',
      background: 'rgba(206,217,224,.5)',
    },
  },
  checkedIcon: {
    backgroundColor: '#137cbd',
    backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
    '&:before': {
      display: 'block',
      width: 14,
      height: 14,
      backgroundImage: 'radial-gradient(#fff,#fff 28%,transparent 32%)',
      content: '""',
    },
    'input:hover ~ &': {
      backgroundColor: '#106ba3',
    },
  },
});

// Inspired by blueprintjs
function StyledRadio(props) {
  const classes = useStyles();

  return (
    <Radio
      className={classes.root}
      disableRipple
      color="default"
      checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
      icon={<span className={classes.icon} />}
      {...props}
    />
  );
}

const Div = styled.div`
       padding-top: 50px;
       padding-right: 160px;
       padding-bottom: 50px;
       padding-left: 160px;
`

const Span = styled.span`
  position: absolute;
  display: inline-block;
  top: 110px;
  right: 430px;
  box-sizing:content-box;
  cursor:pointer;

`

 const Textarea = styled.textarea`
 width: 550px;
 height:100px;
 resize:none;
 `
 const Input = styled.input`
    padding: 4px;
    font-family: Gotham Narrow SSm\ 4r,Gotham Narrow SSm\ 5r,Sans-Serif;
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    -ms-box-sizing: border-box;
    border-radius: 0;
    height: 30px;
    width: 550px;

 `
 const Br = styled.br`
   line-height: 7.99px;
 `
  const Dr = styled.br`
  line-height: 13.4px;
`
const SubmitButton = styled.button`
cursor:pointer;
display: inline-block;
font-size: 1.2rem;
background-color: black;
color: white;
font-family: Source Sans Pro, sans-serif;
position: relative;
right:    -475;
bottom:   5;
background-image: url("https://content.hbc.com/content/frontend/5-26-75/images/91bb8bb3fc68d58cc88c2babf5d513ea.png");
background-position-x:0px;
background-position-y:-228px;
background-size:943px 2050px;
border-bottom-color:rgb(0, 0, 0);
border-bottom-style:none;
border-bottom-width:0px;
border-image-outset:0px;
border-image-repeat:stretch;
border-image-slice:100%;
border-image-source:none;
border-image-width:1;
border-left-color:rgb(0, 0, 0);
border-left-style:none;
border-left-width:0px;
border-right-color:rgb(0, 0, 0);
border-right-style:none;
border-right-width:0px;
border-top-color:rgb(0, 0, 0);
border-top-style:none;
border-top-width:0px;
box-sizing:border-box;
color:rgb(0, 0, 0);
display:block;
font-family:"Gotham Narrow SSm 4r", "Gotham Narrow SSm 5r", sans-serif;
font-size:11px;
font-weight:400;
height:37px;
line-height:18px;
list-style-image:url("https://content.hbc.com/content/frontend/5-26-75/images/9854020e6425689c50c9bad3503bea60.png");
list-style-position:outside;
list-style-type:disc;
text-align:left;
text-rendering:optimizelegibility;
text-size-adjust:100%;
visibility:visible;
width:75px;
-webkit-font-smoothing:antialiased;
-webkit-tap-highlight-color:rgba(0, 0, 0, 0);

`
 const Button = styled.button`
background-image:url("https://content.hbc.com/content/frontend/5-26-75/images/5ba05ad3127c4f12aee2ed6f30bcc458.png");
background-position-x:-1603px;
background-position-y:-1845px;
background-size:943px 2050px;
box-sizing:border-box;
color:rgb(0, 0, 0);
cursor:pointer;
display:inline-block;
font-family:"Gotham Narrow SSm 4r", "Gotham Narrow SSm 5r", sans-serif;
font-size:12px;
font-weight:400;
height:37px;
line-height:18px;
margin-top:15px;
text-align:left;
text-rendering:optimizelegibility;
text-size-adjust:100%;
visibility:visible;
width:141px;
-webkit-font-smoothing:antialiased;
-webkit-tap-highlight-color:rgba(0, 0, 0, 0);
 background-color: black;

 `
 const ModalDiv = styled.div`
   width:100%;
   height:100%;
   background-color: rgba(0,0,0,0);
   display:flex;
   justify-content: center;
   align-items: center;
 `
  const ModalContent = styled.div`
    font-family: Source Sans Pro, sans-serif;
    width: 600px;
    max-height: calc(100vh - 210px);
    overflow-y: auto;
    top:250%;
    background-color:white;
    border-radius: 4px;
    border-style: ridge;
    font-weight: 600;
  `
  const Val = styled.div`
    font-family: Source Sans Pro, sans-serif;
    display: block;
    font-size: 14px;
    color: black;
    padding-left:15px;
    font-weight: 600;
  `

  const Value = styled.h2`
     font-size: 13px;
     color: #ee0c0c;
     font-weight:500;
     padding-top:10px;
  `
  const H2 = styled.h2`
    padding-top:30px
    /* padding-bottom: 30px; */
    padding-left:15px;
    font-family: Source Sans Pro, sans-serif;
    font-weight: 300;
    position: relative;
    color: #000;
  `

  const Select = styled.select`
    -webkit-appearance: none;
    -moz-appearance: none;
    border-radius: 0;
    border: 1px solid #bfbfbf;
    background-color: #fff;
    height: 30px;
    width: 550px;
    padding: 0 10px;
    line-height: 34px;
    color: #000;
    font-family: Source Sans Pro, sans-serif;
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    box-shadow: 0 1px 0 1px rgba(0,0,0,.04);
	border-radius: .5em;
	-moz-appearance: none;
	-webkit-appearance: none;
	appearance: none;
	background-color: #fff;
	background-image: url('https://content.hbc.com/content/frontend/5-26-75/images/2846d9d7bac20583cad4e305608cb88f.png'),
	  linear-gradient(to bottom, #ffffff 0%,#e5e5e5 100%);
	background-repeat: no-repeat, repeat;
	background-position: right .7em top 50%, 0 0;
	background-size: .65em auto, 100%;
  `
  const SmallSelect = styled.select`
  -webkit-appearance: none;
  -moz-appearance: none;
  border-radius: 0;
  border: 1px solid #bfbfbf;
  background-color: #fff;
  height: 30px;
  width: 265.8px;
  padding: 0 10px;
  line-height: 34px;
  color: #000;
  font-family: Source Sans Pro, sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  box-shadow: 0 1px 0 1px rgba(0,0,0,.04);
border-radius: .5em;
-moz-appearance: none;
-webkit-appearance: none;
appearance: none;
background-color: #fff;
background-image: url('https://content.hbc.com/content/frontend/5-26-75/images/2846d9d7bac20583cad4e305608cb88f.png'),
  linear-gradient(to bottom, #ffffff 0%,#e5e5e5 100%);
background-repeat: no-repeat, repeat;
background-position: right .7em top 50%, 0 0;
background-size: .65em auto, 100%;
`
const Dates = styled.div`

color:rgb(119, 119, 119);
display:block;
font-family:"Gotham Narrow SSm 4r", "Gotham Narrow SSm 5r", sans-serif;
font-size:12px;
font-weight:400;
height:18px;
line-height:18px;
margin-bottom:1px;
/* text-align:right; */
text-rendering:optimizelegibility;
text-size-adjust:100%;
visibility:visible;
/* width:163.828px; */
-webkit-font-smoothing:antialiased;
-webkit-tap-highlight-color:rgba(0, 0, 0, 0);
position: absolute;
right: 0;
padding-right: 169px;
`
const Stars = styled.div`
position: absolute;
left: 0;
padding-left: 169px;
display:block;
float:left;
font-size: 14px;
`
const Ps = styled.div`
color:rgb(119, 119, 119);
font-family:"Gotham Narrow SSm 7r", "Gotham Narrow SSm 5r", sans-serif;
font-size:12px;
font-weight:400;
height:18px;
line-height:18px;
text-rendering:optimizelegibility;
text-size-adjust:100%;
visibility:visible;
/* width:106.891px; */
-webkit-font-smoothing:antialiased;
-webkit-tap-highlight-color:rgba(0, 0, 0, 0);
position: absolute;
left: 0;
padding-left: 169px;
`

const Dal = styled.div`
font-family: Source Sans Pro, sans-serif;
display: block;
font-size: 13px;
color: black;
font-weight: 600;
padding-top: 0px;
padding-right: 160px;
padding-bottom: 60px;
padding-left: 160px;
`
const Desc = styled.div`
box-sizing:border-box;
color:rgb(0, 0, 0);
display:block;
font-family:"Gotham Narrow SSm 4r", "Gotham Narrow SSm 5r", sans-serif;
font-size:12px;
font-weight:400;
overflow-wrap:break-word;
text-rendering:optimizelegibility;
text-size-adjust:100%;
visibility:visible;
width:655.359px;
-webkit-font-smoothing:antialiased;
-webkit-tap-highlight-color:rgba(0, 0, 0, 0);
`

const Help = styled.li`
position: absolute;
display:block;
font-family:"Gotham Narrow SSm 4r", "Gotham Narrow SSm 5r", sans-serif;
font-size:13px;
font-weight:700;
padding-left: 19px;
`
const A = styled.a`
cursor:pointer;
color:#777;
display:inline;
font-family:"Gotham Narrow SSm 4r", "Gotham Narrow SSm 5r", sans-serif;
font-size:12px;
font-weight:400;
height:auto;
padding-bottom: 20px;
line-height:18px;
list-style-type:disc;
text-align:center;
text-decoration-color:rgb(8, 8, 8);
text-decoration-line:underline;
text-decoration-style:solid;
text-rendering:optimizelegibility;
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
const Wrap = styled.div`
position:absolute:
top:0;
left:100;
color:rgb(0, 0, 0)
font-family:"Gotham Narrow SSm 4r", "Gotham Narrow SSm 5r", sans-serif;
font-size:12px;
font-weight:500;
height:17px;
width:100px;
`
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
const He = styled.b`
position:absolute;
top:40;
left:168.7;
`

const She = styled.div`
position:relative;
font-size:15px
top:1;
left:168.7;
`
const Lasr = styled.span`
font-weight: 550;
font-size:15px
color:rgb(119, 119, 119);
`

const X = styled.a`
background-image:url("https://content.hbc.com/content/frontend/5-26-75/images/5ba05ad3127c4f12aee2ed6f30bcc458.png");
background-position-x:-330px;
background-position-y:-197px;
box-sizing:border-box;
color:rgb(119, 119, 119);
cursor:pointer;
display:block;
float:right;
font-family:"Gotham Narrow SSm 4r", "Gotham Narrow SSm 5r", sans-serif;
font-size:12px;
font-weight:400;
height:20px;
line-height:18px;
margin-right:-275px
text-align:right;
text-decoration-color:rgb(119, 119, 119);
text-decoration-line:none;
text-decoration-style:solid;
text-rendering:optimizelegibility;
text-size-adjust:100%;
transition-duration:0.2s;
transition-property:color, opacity;
transition-timing-function:ease;
width:17px;
z-index:auto;
-webkit-font-smoothing:antialiased;
-webkit-tap-highlight-color:rgba(0, 0, 0, 0);
`
const Down = styled.a`
background-image:url("https://backgrounddownload.com/wp-content/uploads/2018/09/down-arrow-icon-transparent-background-5.png");
box-sizing:border-box;
cursor:pointer;
display:block;
float:right;
font-family:"Gotham Narrow SSm 4r", "Gotham Narrow SSm 5r", sans-serif;
font-size:12px;
font-weight:400;
height:20px;
line-height:18px;
margin-right:-575px
text-align:right;
text-decoration-color:rgb(119, 119, 119);
text-decoration-line:none;
text-decoration-style:solid;
text-rendering:optimizelegibility;
text-size-adjust:100%;
transition-duration:0.2s;
transition-property:color, opacity;
transition-timing-function:ease;
width:17px;
z-index:auto;
-webkit-font-smoothing:antialiased;
-webkit-tap-highlight-color:rgba(0, 0, 0, 0);
`
const Put = styled.input`
border: none;
cursor:text;
display:block;
font-family:"Gotham Narrow SSm 4r", "Gotham Narrow SSm 5r", sans-serif;
font-size:12px;
font-stretch:100%;
font-style:normal;
font-variant-caps:normal;
font-variant-east-asian:normal;
font-variant-ligatures:normal;
font-variant-numeric:normal;
font-weight:400;
/* height:34px; */
letter-spacing:normal;
margin-left:70px;
text-align:start;
text-decoration-color:rgb(0, 0, 0);
text-decoration-line:none;
text-decoration-style:solid;
text-indent:0px;
text-rendering:auto;
text-shadow:none;
text-size-adjust:100%;
text-transform:capitalize;
visibility:visible;
width:170.797px;
`

const Lol = styled.div`
    width: 100%;
    height: 30px;
    background: no-repeat #ffffff;
    display: flex;
    flex-direction: row;
    background-position: 60;
    background-image: url("https://content.hbc.com/content/frontend/5-26-75/images/2846d9d7bac20583cad4e305608cb88f.png");
`
const Relect = styled.select`
background-image: url('https://content.hbc.com/content/frontend/5-26-75/images/2846d9d7bac20583cad4e305608cb88f.png'),
linear-gradient(to bottom, #ffffff 0%,#e5e5e5 100%);
    -webkit-appearance:none;
    border-radius: 0;
    -webkit-border-radius: 0;
    background: transparent;
    font-weight: 400;
    font-size: 12px;
    /* line-height: 18px; */
    color: grey;
    height: 36px;
    width:300.797px;
    overflow: hidden;
    border-bottom-color:rgb(204, 204, 204);
border-bottom-left-radius:0px;
border-bottom-right-radius:0px;
border-bottom-style:solid;
border-bottom-width:1px;
border-image-outset:0px;
border-image-repeat:stretch;
border-image-slice:100%;
border-image-source:none;
border-image-width:1;
border-left-color:rgb(204, 204, 204);
border-left-style:solid;
border-left-width:1px;
border-right-color:rgb(204, 204, 204);
border-right-style:solid;
border-right-width:1px;
border-top-color:rgb(204, 204, 204);
border-top-left-radius:0px;
border-top-right-radius:0px;
border-top-style:solid;
border-top-width:1px;
box-sizing:border-box;
color:rgb(0, 0, 0);
position: relative; 
`
const Woption = styled.option`
box-sizing:content-box;
/* color:grey;
cursor:default;
display:block;
font-family:"Gotham Narrow SSm 5r", sans-serif;
font-size:12px;
font-stretch:100%;
font-style:normal;
font-variant-caps:normal;
font-variant-east-asian:normal;
font-variant-ligatures:normal;
font-variant-numeric:normal;
font-weight:400;
height:auto;
letter-spacing:normal;
line-height:18px;
min-height:14.4px;
padding-bottom:1px;
padding-left:2px;
padding-right:2px;
padding-top:0px;
text-align:center;
text-decoration-color:rgb(0, 0, 0);
text-decoration-line:none;
text-decoration-style:solid;
text-indent:0px;
text-rendering:auto;
text-shadow:none;
text-size-adjust:100%;
text-transform:none;
visibility:visible;
white-space:pre;
width:auto;
word-spacing:0px;
writing-mode:horizontal-tb;
-webkit-font-smoothing:antialiased;
-webkit-rtl-ordering:logical;
-webkit-tap-highlight-color:rgba(0, 0, 0, 0); */
`
const Break = styled.div`
box-sizing:border-box;
clear:both;
color:#808080;
display:block;
font-family:"Gotham Narrow SSm 4r", "Gotham Narrow SSm 5r", sans-serif;
font-size:12px;
font-weight:400;
height:0px;
line-height:18px;
outline-color:#d3d3d3;
outline-style:solid;
outline-width:1px;
text-align:left;
text-rendering:optimizelegibility;
text-size-adjust:100%;
visibility:visible;
width:100%;
-webkit-font-smoothing:antialiased;
-webkit-tap-highlight-color:rgba(0, 0, 0, 0);
`
const Break2 = styled.div`
box-sizing:border-box;
clear:both;
color:#808080;
display:block;
font-family:"Gotham Narrow SSm 4r", "Gotham Narrow SSm 5r", sans-serif;
font-size:12px;
font-weight:400;
height:0px;
line-height:18px;
outline-color:#d3d3d3;
outline-style:solid;
outline-width:1px;
text-align:left;
text-rendering:optimizelegibility;
text-size-adjust:300%;
visibility:visible;
width:1087px;
-webkit-font-smoothing:antialiased;
-webkit-tap-highlight-color:rgba(0, 0, 0, 0);
`
const Take = styled.div`
background-color:rgb(255, 255, 255);
border-bottom-color:rgb(204, 204, 204);
border-bottom-style:solid;
border-bottom-width:1px;
border-image-outset:0px;
border-image-repeat:stretch;
border-image-slice:100%;
border-image-source:none;
border-image-width:1;
border-left-color:rgb(204, 204, 204);
border-left-style:solid;
border-left-width:1px;
border-right-color:rgb(204, 204, 204);
border-right-style:solid;
border-right-width:1px;
border-top-color:rgb(204, 204, 204);
border-top-style:solid;
border-top-width:1px;
box-sizing:border-box;
color:rgb(0, 0, 0);
display:block;
font-family:"Gotham Narrow SSm 4r", "Gotham Narrow SSm 5r", sans-serif;
font-size:12px;
font-weight:400;
height:36px;
line-height:18px;
text-align:left;
text-rendering:optimizelegibility;
text-size-adjust:100%;
visibility:visible;
width:318px;
-webkit-font-smoothing:antialiased;
-webkit-tap-highlight-color:rgba(0, 0, 0, 0);
`
const Searcher = styled.div`
background-image:url(https://content.hbc.com/content/frontend/5-26-75/images/5ba05ad3127c4f12aee2ed6f30bcc458.png);
background-position-x:-329px;
background-position-y:-263px;
box-sizing:border-box;
color:rgb(0, 0, 0);
display:block;
float:left;
font-family:"Gotham Narrow SSm 4r", "Gotham Narrow SSm 5r", sans-serif;
font-size:12px;
font-weight:400;
height:19px;
line-height:18px;
margin-left:7px;
margin-top:7px;
text-align:left;
text-rendering:optimizelegibility;
text-size-adjust:100%;
visibility:visible;
width:19px;
-webkit-font-smoothing:antialiased;
-webkit-tap-highlight-color:rgba(0, 0, 0, 0);
`
const M = styled.b`
margin:0px 0px 10000px 0px;
`
class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      date: moment().format('LL'),
      clicked:false,
      rating: "",
      ps: '-- Select One --',
      reccomend: null,
      fit: null,
      revTitle: "",
      rev_desc: "",
      country: "United States",
      city: "",
      states: "",
      gender: "",
      age: "",
      width: "",
      error: "We value your input and invite you to write a review on this product.",
      reviews: []

    }
  this.sorter = this.sorter.bind(this)
  this.handleFlag = this.handleFlag.bind(this)
  this.handleNo = this.handleNo.bind(this)
  this.handleYes = this.handleYes.bind(this)
  this.handleSubmit = this.handleSubmit.bind(this)
  this.onChange = this.onChange.bind(this)
  this.handleRadio2 = this.handleRadio2.bind(this)
  this.handleRadio1 = this.handleRadio1.bind(this)
  this.handleRadio = this.handleRadio.bind(this)
  this.handleChange = this.handleChange.bind(this)
  this.handleClick = this.handleClick.bind(this)
  
  }
  handleFlag(){
    this.setState({
      flag: "Thanks"
    })
  }
  handleYes(rev){
    // console.log('u said yes to the dress')
    var newNum = (Number(rev.yes) + 1).toString()
    axios.put(`/yes/${rev.id}`,{
      yes: newNum
    })
    .then(this.getReviews(rev.item_id))
    .catch((err) => console.log('error adding yes'))
  }
  handleNo(rev){
    // console.log('u said yes to the dress')
    var newNum = (Number(rev.nah) + 1).toString()
    axios.put(`/no/${rev.id}`,{
      nah: newNum
    })
    .then(this.getReviews(rev.item_id))
    .catch((err) => console.log('error adding no'))
  }
  
  getReviews(num){
    console.log('gotrevs')
    if(num){
      axios.get(`/reviews?data=${num}`)
    .then((response) => this.setState({
      reviews: response.data
    }))
    .catch((err) => console.log(err))
    }
    else {
      var rando = Math.floor(Math.random() * 10) + 1
      axios.get(`/reviews?data=${rando}`)
      .then((response) => this.setState({
        reviews: response.data
      }))
      .catch((err) => console.log(err))
    }
  }

  handleSubmit(e){
    e.preventDefault()
    if(this.state.rating.length === 0 ){
      this.setState({
        error: "Please select an overall rating."
      })
      e.preventDefault()
    }

    else if (this.state.rev_desc.length < 10){
     
      this.setState({
        error: "Your review must be at least 10 characters in length."
      })
      e.preventDefault()
    }
    
    else {
      var id = this.state.reviews[0].item_id

      axios.post('/writereview',{
        date: this.state.date,
        rating: this.state.rating,
        ps: this.state.ps,
        reccomend: this.state.reccomend,
        fit: this.state.fit,
        revTitle: this.state.revTitle,
        rev_desc: this.state.rev_desc,
        country: this.state.country,
        city: this.state.city,
        states: this.state.states,
        gender: this.state.gender,
        age: this.state.age,
        yes: "0",
        nah: "0",
        item_id: id
      })
      .then(this.setState({
        clicked:!this.state.clicked,
        num: this.state.num + 1
        // reviews: [...this.state.reviews, 'new value']
      }), this.getReviews(id))
      .catch((err) => console.log(err))
    }

  }
  onChange(e){
    this.setState({ [e.target.name] : e.target.value});
  }

  handleRadio(e) {
    this.setState({
      reccomend: e.target.value
    })
  }

  handleRadio1(e) {
    this.setState({
      width: e.target.value
    })
  }
  handleRadio2(e) {
    this.setState({
      fit: e.target.value
    })
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleClick(){
    this.setState(prevState => ({
      clicked: !prevState.clicked
    }));
  }
  onStarClick(nextValue, prevValue, name) {
    this.setState({rating: nextValue});
  }
  sorter(event){
    console.log(event.target.value)
    const final = this.state.reviews
    const high = final.sort((a,b) => b.rating - a.rating);
    const low = final.sort((b,a) => b.rating - a.rating);
    const most = final.sort((b,a) => a.yes - b.yes);
    const recent = final.sort((a,b) => b.dateAdded.slice(b.dateAdded.length - 5) - a.dateAdded.slice(a.dateAdded.length -5));
    if(event.target.value === "most"){
      this.setState({
        reviews:most
      })
    }
    else if(event.target.value === "lowest"){
     this.setState({
        reviews:low
      })
    }
    else if(event.target.value === "highest"){
       this.setState({
         reviews:high
        })

      }
    else if (event.target.value === "recent"){
      this.setState({
        reviews:recent
      })
    }    

  }
  componentDidMount(){
    this.getReviews()
  }

  render() {
    const { rating } = this.state;
    // const numRevs = this.state.num
    const revs = this.state.reviews;
    const length = this.state.reviews.length;
    // const shuffled = revs.sort(() => 0.5 - Math.random());
    // let final = revs.slice(0, numRevs);
    const final = this.state.reviews
    // console.log(final)
    const total = this.state.reviews.length
    var sum = 0
    for(var i = 0; i < total; i++){
      sum += Number(final[i].rating)
    }
    const avg = sum / total;
    const num = avg.toFixed(1)
    // const sliced = final[0].dateAdded.slice(dateAdded.length -5)
    // console.log(low)
    
    if(this.state.clicked){

     return (
      <Div>
    <She> <StarRating rating={avg} starDimension='15px' starSpacing='0px' starRatedColor='#323E4D'/> <Lasr> {num} / 5.0</Lasr>    </She>
              <Br />
              <He>{total+ "  "} Reviews</He>
            <Wrap style={{paddingLeft:180}}>
              <Hit>
                <b>
                Fit
                </b>
                </Hit>
            <Kiv>
              <Dot></Dot>
            </Kiv>
            <Hit>Too Small &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Too Big</Hit>
            <br />
            </Wrap>
          
             <Button onClick={this.handleClick}></Button>
           <br />
           <br />
           <Br />
    <Break></Break>

    <br />
           <br />
           <br />
<Lol>
           <Take>
            <Searcher>
              <X></X>
              <Down></Down>
              <Put placeholder="Search Reviews and questions"></Put>
            </Searcher>
           </Take>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

           <Relect name="wtvr" onChange={this.sorter}>
              <Woption value="wtvr"> &nbsp;&nbsp; Sort by Most Helpful</Woption>
              <Woption value="wtvr"> &nbsp;&nbsp; Sort by Most Recent Review </Woption>
              <Woption value="wtvr"> &nbsp;&nbsp; Sort Highest to Lowest</Woption>
              <Woption value="wtvr"> &nbsp;&nbsp; Sort Lowest to Highest</Woption>
           </Relect>
</Lol>


           {final.map((rev, i) => {
             return (
               <Dal key={i}>
                 <br />
           <Stars>
           <br /><br />
             <br /><br />
             
             <StarRating rating={Number(rev.rating)} starDimension='15px' starSpacing='0px' starRatedColor='#323E4D'/>  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {rev.revTitle } &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
           <br />
     
           </Stars>
              <br />
              <Br ></Br>
              <br /> <br />
              <Dates>{rev.dateAdded}</Dates>
              <br />
             
             <Dates>{rev.city + ", " + rev.states + ", " + rev.country}</Dates>
              <br />
           <Dates>Gender: {rev.gender}</Dates>
            <br />
           <Dates>Age: {rev.age}</Dates>
           <br />
              <Ps><b>My Personal Style: </b>{rev.ps}
              <Br />
              <Br />
              <b>
              Would you recommend this<br />
              product to a friend?:
              </b>
              <Br />
              {rev.reccomend}
              <br />
              <Br />
              <Br />
              <Fit fit={rev.fit}></Fit>
            <Break2></Break2>
            <br />
            <br />
              </Ps>
              <Br />
              <Desc> &ensp; &ensp;&ensp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&ensp;&ensp;&ensp;
              {rev.rev_desc}
              <br />
              <Br />
              <Br />
              <ul>
                <Help>
                  Was this review helpful? <A onClick={() => this.handleYes(rev)}>Yes ({rev.yes})</A>&ensp;&ensp;<A onClick={() => this.handleNo(rev)}>No ({rev.nah})</A>
                  &nbsp;&nbsp;&nbsp; <A >Flag as Inappropriate</A>
                </Help>

              </ul>
              <br />
              </Desc>

              </Dal>

      )
    })}
         <form>
     <ModalDiv>
       <ModalContent>
       <Span onClick={this.handleClick}>&times;</Span>
        <div>
        <H2>WRITE A REVIEW</H2>

        <Val>
          <Value>
          {this.state.error}
          </Value>
          <Br />
          <Br />
          
    <div style={{display:"flex",alignItems:"center"}}>
        <div> My Overall Rating:</div>
          <StarRatingComponent
          name="rate1"
          emptyStarColor={'#808080'}
          starColor={'#000000'}
          starCount={5}
          value={rating}
          onStarClick={this.onStarClick.bind(this)} />
    </div>
          
        <br/>
        <br />
          My Personal Style:<br/>
          <br/>
          <Select name="ps" value={this.state.value} onChange={this.handleChange}>
            <option>-- Select One --</option>
            <option value="Classic">Classic</option>
            <option value="Fashion Forward">Fashion Forward</option>
            <option value="Feminine">Feminine</option>
            <option value="Minimalist">Minimalist</option>
            <option value="Relaxed">Relaxed</option>
            <option value="Sporty">Sporty</option>
          </Select>
          <br/>
          <ThemeProvider style={{paddingTop:100}} theme={theme}>
          <RadioGroup aria-label="start" name="start" value={this.state.width} onChange={this.handleRadio1} row>
          <Br/>
        
         <b style={{paddingTop:6.6}}> My Typical Width:</b>
          <FormControlLabel
          value="Narrow"
          control={<StyledRadio />}
          label="Narrow"
          labelPlacement="start"
        />
          <FormControlLabel

          value="Regular"
          control={<StyledRadio />}
          label="Regular"
          labelPlacement="start"
        />
         <FormControlLabel
          value="Wide"
          control={<StyledRadio />}
          label="Wide"
          labelPlacement="start"
         />
           </RadioGroup>
          <RadioGroup aria-label="start" name="start" value={this.state.reccomend} onChange={this.handleRadio} row>
          <Br/>
          <b style={{paddingTop:6.88}}>Would you reccomend this product to a friend?:</b>
          <FormControlLabel
          value="Yes"
          control={<StyledRadio />}
          label="Yes"
          labelPlacement="start"
        />
          <FormControlLabel

          value="No"
          control={<StyledRadio />}
          label="No"
          labelPlacement="start"
        />
           </RadioGroup>
           <Dr/>

           <RadioGroup  aria-label="end" name="end" value={this.state.fit} onChange={this.handleRadio2} row>
          
          <b style={{paddingTop:6}}>Fit:</b> &ensp;
          <FormControlLabel

          value="Too small"
          control={<StyledRadio />}
          label="Too small"
          labelPlacement="end"
        />
          <FormControlLabel
          value="A Little Small"
          control={<StyledRadio />}
          label="A Little Small"
          labelPlacement="end"
        />
                  <FormControlLabel
          value="True to Size"
          control={<StyledRadio />}
          label="True to Size"
          labelPlacement="end"
        />
                  <FormControlLabel
          value="A Little Big"
          control={<StyledRadio />}
          label="A Little Big"
          labelPlacement="end"
        />
                  <FormControlLabel
          value="Too Big"
          control={<StyledRadio />}
          label="Too Big"
          labelPlacement="end"
        />
           </RadioGroup>
          </ThemeProvider>
          <br />
          Review Title:
          <Br/>
          <Br/>
          <Input value={this.state.revTitle} placeholder="Headline or summary for your review" name="revTitle" type="text" onChange={this.onChange} />
          <br />
          <br />
          Review (required):
          <Br />
          <Br />
          <Textarea value={this.state.rev_desc} placeholder="Write your review here.  It must be at least 10 characters long.  Consider whether you would recommend this product and what you like or dislike about it." name="rev_desc" type="text" onChange={this.onChange}>
          </Textarea>
          <br />
          <br />
          <Br />
          <label>Country:</label>
          <Select name="country" value={this.state.country} onChange={this.handleChange}>
                <option value="Afghanistan">Afghanistan</option>
                <option value="Åland Islands">Åland Islands</option>
                <option value="Albania">Albania</option>
                <option value="Algeria">Algeria</option>
                <option value="American Samoa">American Samoa</option>
                <option value="Andorra">Andorra</option>
                <option value="Angola">Angola</option>
                <option value="Anguilla">Anguilla</option>
                <option value="Antarctica">Antarctica</option>
                <option value="Antigua and Barbuda">Antigua and Barbuda</option>
                <option value="Argentina">Argentina</option>
                <option value="Armenia">Armenia</option>
                <option value="Aruba">Aruba</option>
                <option value="Australia">Australia</option>
                <option value="Austria">Austria</option>
                <option value="Azerbaijan">Azerbaijan</option>
                <option value="Bahamas">Bahamas</option>
                <option value="Bahrain">Bahrain</option>
                <option value="Bangladesh">Bangladesh</option>
                <option value="Barbados">Barbados</option>
                <option value="Belarus">Belarus</option>
                <option value="Belgium">Belgium</option>
                <option value="Belize">Belize</option>
                <option value="Benin">Benin</option>
                <option value="Bermuda">Bermuda</option>
                <option value="Bhutan">Bhutan</option>
                <option value="Bolivia">Bolivia</option>
                <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
                <option value="Botswana">Botswana</option>
                <option value="Bouvet Island">Bouvet Island</option>
                <option value="Brazil">Brazil</option>
                <option value="British Indian Ocean Territory">British Indian Ocean Territory</option>
                <option value="Brunei Darussalam">Brunei Darussalam</option>
                <option value="Bulgaria">Bulgaria</option>
                <option value="Burkina Faso">Burkina Faso</option>
                <option value="Burundi">Burundi</option>
                <option value="Cambodia">Cambodia</option>
                <option value="Cameroon">Cameroon</option>
                <option value="Canada">Canada</option>
                <option value="Cape Verde">Cape Verde</option>
                <option value="Cayman Islands">Cayman Islands</option>
                <option value="Central African Republic">Central African Republic</option>
                <option value="Chad">Chad</option>
                <option value="Chile">Chile</option>
                <option value="China">China</option>
                <option value="Christmas Island">Christmas Island</option>
                <option value="Cocos (Keeling) Islands">Cocos (Keeling) Islands</option>
                <option value="Colombia">Colombia</option>
                <option value="Comoros">Comoros</option>
                <option value="Congo">Congo</option>
                <option value="Congo, The Democratic Republic of The">Congo, The Democratic Republic of The</option>
                <option value="Cook Islands">Cook Islands</option>
                <option value="Costa Rica">Costa Rica</option>
                <option value="Cote D'ivoire">Cote D'ivoire</option>
                <option value="Croatia">Croatia</option>
                <option value="Cuba">Cuba</option>
                <option value="Cyprus">Cyprus</option>
                <option value="Czech Republic">Czech Republic</option>
                <option value="Denmark">Denmark</option>
                <option value="Djibouti">Djibouti</option>
                <option value="Dominica">Dominica</option>
                <option value="Dominican Republic">Dominican Republic</option>
                <option value="Ecuador">Ecuador</option>
                <option value="Egypt">Egypt</option>
                <option value="El Salvador">El Salvador</option>
                <option value="Equatorial Guinea">Equatorial Guinea</option>
                <option value="Eritrea">Eritrea</option>
                <option value="Estonia">Estonia</option>
                <option value="Ethiopia">Ethiopia</option>
                <option value="Falkland Islands (Malvinas)">Falkland Islands (Malvinas)</option>
                <option value="Faroe Islands">Faroe Islands</option>
                <option value="Fiji">Fiji</option>
                <option value="Finland">Finland</option>
                <option value="France">France</option>
                <option value="French Guiana">French Guiana</option>
                <option value="French Polynesia">French Polynesia</option>
                <option value="French Southern Territories">French Southern Territories</option>
                <option value="Gabon">Gabon</option>
                <option value="Gambia">Gambia</option>
                <option value="Georgia">Georgia</option>
                <option value="Germany">Germany</option>
                <option value="Ghana">Ghana</option>
                <option value="Gibraltar">Gibraltar</option>
                <option value="Greece">Greece</option>
                <option value="Greenland">Greenland</option>
                <option value="Grenada">Grenada</option>
                <option value="Guadeloupe">Guadeloupe</option>
                <option value="Guam">Guam</option>
                <option value="Guatemala">Guatemala</option>
                <option value="Guernsey">Guernsey</option>
                <option value="Guinea">Guinea</option>
                <option value="Guinea-bissau">Guinea-bissau</option>
                <option value="Guyana">Guyana</option>
                <option value="Haiti">Haiti</option>
                <option value="Heard Island and Mcdonald Islands">Heard Island and Mcdonald Islands</option>
                <option value="Holy See (Vatican City State)">Holy See (Vatican City State)</option>
                <option value="Honduras">Honduras</option>
                <option value="Hong Kong">Hong Kong</option>
                <option value="Hungary">Hungary</option>
                <option value="Iceland">Iceland</option>
                <option value="India">India</option>
                <option value="Indonesia">Indonesia</option>
                <option value="Iran, Islamic Republic of">Iran, Islamic Republic of</option>
                <option value="Iraq">Iraq</option>
                <option value="Ireland">Ireland</option>
                <option value="Isle of Man">Isle of Man</option>
                <option value="Israel">Israel</option>
                <option value="Italy">Italy</option>
                <option value="Jamaica">Jamaica</option>
                <option value="Japan">Japan</option>
                <option value="Jersey">Jersey</option>
                <option value="Jordan">Jordan</option>
                <option value="Kazakhstan">Kazakhstan</option>
                <option value="Kenya">Kenya</option>
                <option value="Kiribati">Kiribati</option>
                <option value="Korea, Democratic People's Republic of">Korea, Democratic People's Republic of</option>
                <option value="Korea, Republic of">Korea, Republic of</option>
                <option value="Kuwait">Kuwait</option>
                <option value="Kyrgyzstan">Kyrgyzstan</option>
                <option value="Lao People's Democratic Republic">Lao People's Democratic Republic</option>
                <option value="Latvia">Latvia</option>
                <option value="Lebanon">Lebanon</option>
                <option value="Lesotho">Lesotho</option>
                <option value="Liberia">Liberia</option>
                <option value="Libyan Arab Jamahiriya">Libyan Arab Jamahiriya</option>
                <option value="Liechtenstein">Liechtenstein</option>
                <option value="Lithuania">Lithuania</option>
                <option value="Luxembourg">Luxembourg</option>
                <option value="Macao">Macao</option>
                <option value="Macedonia, The Former Yugoslav Republic of">Macedonia, The Former Yugoslav Republic of</option>
                <option value="Madagascar">Madagascar</option>
                <option value="Malawi">Malawi</option>
                <option value="Malaysia">Malaysia</option>
                <option value="Maldives">Maldives</option>
                <option value="Mali">Mali</option>
                <option value="Malta">Malta</option>
                <option value="Marshall Islands">Marshall Islands</option>
                <option value="Martinique">Martinique</option>
                <option value="Mauritania">Mauritania</option>
                <option value="Mauritius">Mauritius</option>
                <option value="Mayotte">Mayotte</option>
                <option value="Mexico">Mexico</option>
                <option value="Micronesia, Federated States of">Micronesia, Federated States of</option>
                <option value="Moldova, Republic of">Moldova, Republic of</option>
                <option value="Monaco">Monaco</option>
                <option value="Mongolia">Mongolia</option>
                <option value="Montenegro">Montenegro</option>
                <option value="Montserrat">Montserrat</option>
                <option value="Morocco">Morocco</option>
                <option value="Mozambique">Mozambique</option>
                <option value="Myanmar">Myanmar</option>
                <option value="Namibia">Namibia</option>
                <option value="Nauru">Nauru</option>
                <option value="Nepal">Nepal</option>
                <option value="Netherlands">Netherlands</option>
                <option value="Netherlands Antilles">Netherlands Antilles</option>
                <option value="New Caledonia">New Caledonia</option>
                <option value="New Zealand">New Zealand</option>
                <option value="Nicaragua">Nicaragua</option>
                <option value="Niger">Niger</option>
                <option value="Nigeria">Nigeria</option>
                <option value="Niue">Niue</option>
                <option value="Norfolk Island">Norfolk Island</option>
                <option value="Northern Mariana Islands">Northern Mariana Islands</option>
                <option value="Norway">Norway</option>
                <option value="Oman">Oman</option>
                <option value="Pakistan">Pakistan</option>
                <option value="Palau">Palau</option>
                <option value="Palestinian Territory, Occupied">Palestinian Territory, Occupied</option>
                <option value="Panama">Panama</option>
                <option value="Papua New Guinea">Papua New Guinea</option>
                <option value="Paraguay">Paraguay</option>
                <option value="Peru">Peru</option>
                <option value="Philippines">Philippines</option>
                <option value="Pitcairn">Pitcairn</option>
                <option value="Poland">Poland</option>
                <option value="Portugal">Portugal</option>
                <option value="Puerto Rico">Puerto Rico</option>
                <option value="Qatar">Qatar</option>
                <option value="Reunion">Reunion</option>
                <option value="Romania">Romania</option>
                <option value="Russian Federation">Russian Federation</option>
                <option value="Rwanda">Rwanda</option>
                <option value="Saint Helena">Saint Helena</option>
                <option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
                <option value="Saint Lucia">Saint Lucia</option>
                <option value="Saint Pierre and Miquelon">Saint Pierre and Miquelon</option>
                <option value="Saint Vincent and The Grenadines">Saint Vincent and The Grenadines</option>
                <option value="Samoa">Samoa</option>
                <option value="San Marino">San Marino</option>
                <option value="Sao Tome and Principe">Sao Tome and Principe</option>
                <option value="Saudi Arabia">Saudi Arabia</option>
                <option value="Senegal">Senegal</option>
                <option value="Serbia">Serbia</option>
                <option value="Seychelles">Seychelles</option>
                <option value="Sierra Leone">Sierra Leone</option>
                <option value="Singapore">Singapore</option>
                <option value="Slovakia">Slovakia</option>
                <option value="Slovenia">Slovenia</option>
                <option value="Solomon Islands">Solomon Islands</option>
                <option value="Somalia">Somalia</option>
                <option value="South Africa">South Africa</option>
                <option value="South Georgia and The South Sandwich Islands">South Georgia and The South Sandwich Islands</option>
                <option value="Spain">Spain</option>
                <option value="Sri Lanka">Sri Lanka</option>
                <option value="Sudan">Sudan</option>
                <option value="Suriname">Suriname</option>
                <option value="Svalbard and Jan Mayen">Svalbard and Jan Mayen</option>
                <option value="Swaziland">Swaziland</option>
                <option value="Sweden">Sweden</option>
                <option value="Switzerland">Switzerland</option>
                <option value="Syrian Arab Republic">Syrian Arab Republic</option>
                <option value="Taiwan, Province of China">Taiwan, Province of China</option>
                <option value="Tajikistan">Tajikistan</option>
                <option value="Tanzania, United Republic of">Tanzania, United Republic of</option>
                <option value="Thailand">Thailand</option>
                <option value="Timor-leste">Timor-leste</option>
                <option value="Togo">Togo</option>
                <option value="Tokelau">Tokelau</option>
                <option value="Tonga">Tonga</option>
                <option value="Trinidad and Tobago">Trinidad and Tobago</option>
                <option value="Tunisia">Tunisia</option>
                <option value="Turkey">Turkey</option>
                <option value="Turkmenistan">Turkmenistan</option>
                <option value="Turks and Caicos Islands">Turks and Caicos Islands</option>
                <option value="Tuvalu">Tuvalu</option>
                <option value="Uganda">Uganda</option>
                <option value="Ukraine">Ukraine</option>
                <option value="United Arab Emirates">United Arab Emirates</option>
                <option value="United Kingdom">United Kingdom</option>
                <option value="US">United States</option>
                <option value="United States Minor Outlying Islands">United States Minor Outlying Islands</option>
                <option value="Uruguay">Uruguay</option>
                <option value="Uzbekistan">Uzbekistan</option>
                <option value="Vanuatu">Vanuatu</option>
                <option value="Venezuela">Venezuela</option>
                <option value="Viet Nam">Viet Nam</option>
                <option value="Virgin Islands, British">Virgin Islands, British</option>
                <option value="Virgin Islands, U.S.">Virgin Islands, U.S.</option>
                <option value="Wallis and Futuna">Wallis and Futuna</option>
                <option value="Western Sahara">Western Sahara</option>
                <option value="Yemen">Yemen</option>
                <option value="Zambia">Zambia</option>
                <option value="Zimbabwe">Zimbabwe</option>
            </Select>
            <br />
            <br />
            City:
            <Br />
            <Br />
            <Input value={this.state.city} name="city" placeholder="Enter your city" type="text" onChange={this.onChange} />
            <br />
            <br />
            State:
            <Br />
            <Br />
            <Select name="states" value={this.state.states} onChange={this.handleChange}>
  <option> </option>
	<option value="AL">Alabama</option>
	<option value="AK">Alaska</option>
	<option value="AZ">Arizona</option>
	<option value="AR">Arkansas</option>
	<option value="CA">California</option>
	<option value="CO">Colorado</option>
	<option value="CT">Connecticut</option>
	<option value="DE">Delaware</option>
	<option value="DC">District Of Columbia</option>
	<option value="FL">Florida</option>
	<option value="GA">Georgia</option>
	<option value="HI">Hawaii</option>
	<option value="ID">Idaho</option>
	<option value="IL">Illinois</option>
	<option value="IN">Indiana</option>
	<option value="IA">Iowa</option>
	<option value="KS">Kansas</option>
	<option value="KY">Kentucky</option>
	<option value="LA">Louisiana</option>
	<option value="ME">Maine</option>
	<option value="MD">Maryland</option>
	<option value="MA">Massachusetts</option>
	<option value="MI">Michigan</option>
	<option value="MN">Minnesota</option>
	<option value="MS">Mississippi</option>
	<option value="MO">Missouri</option>
	<option value="MT">Montana</option>
	<option value="NE">Nebraska</option>
	<option value="NV">Nevada</option>
	<option value="NH">New Hampshire</option>
	<option value="NJ">New Jersey</option>
	<option value="NM">New Mexico</option>
	<option value="NY">New York</option>
	<option value="NC">North Carolina</option>
	<option value="ND">North Dakota</option>
	<option value="OH">Ohio</option>
	<option value="OK">Oklahoma</option>
	<option value="OR">Oregon</option>
	<option value="PA">Pennsylvania</option>
	<option value="RI">Rhode Island</option>
	<option value="SC">South Carolina</option>
	<option value="SD">South Dakota</option>
	<option value="TN">Tennessee</option>
	<option value="TX">Texas</option>
	<option value="UT">Utah</option>
	<option value="VT">Vermont</option>
	<option value="VA">Virginia</option>
	<option value="WA">Washington</option>
	<option value="WV">West Virginia</option>
	<option value="WI">Wisconsin</option>
	<option value="WY">Wyoming</option>
</Select>
<br />
            <br />
            Gender: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&ensp; Age:
            <Br />
            <Br />
            <SmallSelect name="gender" value={this.state.gender} onChange={this.handleChange}>
            <option> </option>
            <option value="male">Male</option>
	          <option value="female">Female</option>
            </SmallSelect>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <SmallSelect name="age" value={this.state.age} onChange={this.handleChange}>
            <option> </option>
            <option value="Under 18">Under 18</option>
	          <option value="18 to 24">18 to 24</option>
            <option value="25 to 34">25 to 34</option>
	          <option value="35 to 44">35 to 44</option>
	          <option value="45 to 54">45 to 54</option>
            <option value="55 to 64">55 to 64</option>
            <option value="Over 65">Over 65</option>
            </SmallSelect>
            <br />
            <br />
        <SubmitButton style={{marginLeft:470}} onClick={this.handleSubmit}></SubmitButton>
       </Val>
        </div>
       </ModalContent>
      </ModalDiv>
         </form>


   </Div>

     )
    }

    if(revs[0]){
        return (
            
          <Div>
              <She> <StarRating rating={avg} starDimension='15px' starSpacing='0px' starRatedColor='#323E4D'/>
                <Lasr> {num} / 5.0</Lasr>    </She>
              <Br />
              <He>{total+ "  "} Reviews</He>
            <Wrap style={{paddingLeft:180}}>
              <Hit>
                <b>
                Fit
                </b>
                </Hit>
            <Kiv>
              <Dot></Dot>
            </Kiv>
            <Hit>Too Small &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Too Big</Hit>
            <br />
            </Wrap>
          
             <Button onClick={this.handleClick}></Button>
           <br />
           <br />
           <Br />
           <Break></Break>

           <br />
           <br />
           <br />
<Lol>
           <Take>
            <Searcher>
              <X></X>
              <Down></Down>
              <Put placeholder="Search Reviews and questions"></Put>
            </Searcher>
           </Take>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

           <Relect name="wtvr" onChange={this.sorter}>
              <Woption value="most"> &nbsp;&nbsp; Sort by Most Helpful</Woption>
              <Woption value="recent"> &nbsp;&nbsp; Sort by Most Recent Review </Woption>
              <Woption value="highest"> &nbsp;&nbsp; Sort Highest to Lowest</Woption>
              <Woption value="lowest"> &nbsp;&nbsp; Sort Lowest to Highest</Woption>
           </Relect>
</Lol>


           {final.map((rev, i) => {
             return (
               <Dal key={i}>
                 <br />
           <Stars>
           <br /><br />
             <br /><br />
             
             <StarRating rating={Number(rev.rating)} starDimension='15px' starSpacing='0px' starRatedColor='#323E4D'/>      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {rev.revTitle } &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
           <br />
     
           </Stars>
              <br />
              <Br ></Br>
              <br /> <br />
              <Dates>{rev.dateAdded}</Dates>
              <br />
             
             <Dates>{rev.city + ", " + rev.states + ", " + rev.country}</Dates>
              <br />
           <Dates>Gender: {rev.gender}</Dates>
            <br />
           <Dates>Age: {rev.age}</Dates>
           <br />
              <Ps><b>My Personal Style: </b>{rev.ps}
              <Br />
              <Br />
              <b>
              Would you recommend this<br />
              product to a friend?:
              </b>
              <Br />
              {rev.reccomend}
              <br />
              <Br />
              <Br />
              <Fit fit={rev.fit}></Fit>
            <Break2></Break2>
            <br />
            <br />
              </Ps>
              <Br />
              <Desc> &ensp; &ensp;&ensp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&ensp;&ensp;&ensp;
              {rev.rev_desc}
              <br />
              <Br />
              <Br />
              <ul>
                <Help>
                  Was this review helpful? <A onClick={() => this.handleYes(rev)}>Yes ({rev.yes})</A>&ensp;&ensp;<A onClick={() => this.handleNo(rev)}>No ({rev.nah})</A>
                  &nbsp;&nbsp;&nbsp; <A >Flag as Inappropriate</A>
                </Help>

              </ul>
              <br />
              </Desc>

              </Dal>

           )
           })}

          </Div>


        )


      }
      return (
        <Div>
          Loading......
        </Div>
      )
  } //this brack is from render


}

ReactDOM.render(<App />, document.getElementById('app'))

export default App