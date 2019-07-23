import React from 'react'

class Vegetables extends React.Component{
constructor (props){
    super(props)
    this.state={
        vegList:[]
    }
}
componentDidMount (){
    fetch("http://localhost:5000/products/vegetables")
              .then(response => response.json())
              .then(response =>{
                this.setState({vegList:response})
              })
}
render(){
    return(
this.state.vegList.map(prdvege =>{
    return<li>{prdvege.name}</li>
})
    )
}
}
export default Vegetables

