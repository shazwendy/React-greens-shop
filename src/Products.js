import React from 'react'

class Products extends React.Component{
constructor (props){
    super(props)
    this.state={
        pro:[]
    }
}
componentDidMount (){
    fetch("http://localhost:5000/products")
              .then(response => response.json())
              .then(response =>{
                this.setState({pro:response})
              })
}
render(){
    return(
this.state.pro.map(prdt =>{
    return<li>{prdt.name}</li>
})
    )
}
}
export default Products

