import React from 'react'
import Country from './Country'

class List extends React.Component{
  constructor(props){
    super(props);
    this.state={

      selectedCountry: null
    }
    this.countryClick = this.countryClick.bind(this)
  }

  countryClick(id){
    this.setState({selectedCountry: id})
  }
  render(){
  let countryTile = this.props.data.places.map((name) => {
    let className = ""
    if (name.id === this.state.selectedCountry){
      className = "done"
    }
    let handleClick = (event) => {
      this.countryClick(name.id)
    }

    return(
      <Country
      key={name.id}
      country={name}
      handleClick={handleClick}
      className={className}

      />

    )
  })


    return(
      <div>
      {countryTile}
      </div>
    )
  }

}



export default List;
