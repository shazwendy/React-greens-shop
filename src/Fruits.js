import React from 'react'

class Fruits extends React.Component{
constructor (props){
    super(props)
    this.state={
        fruList:[]
    }
}
componentDidMount (){
    fetch("http://localhost:5000/products/fruits")
              .then(response => response.json())
              .then(response =>{
                this.setState({fruList:response})
              })
}
render(){
    return(
this.state.fruList.map(prdfrut =>{
    return<li>{prdfrut.name}</li>
})
    )
}
}
export default Fruits

