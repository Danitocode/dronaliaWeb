import React, { Component } from "react";

class PopulateBeginnerDrone extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
    };
  }

  componentDidMount() {
    fetch("http://localhost:8080/api/drones")
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          isLoaded: true,
          items: json,
          
        });
        console.log(json);

      });
  }

  render() {
    var { isLoaded, items } = this.state;

    if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return <div className="card-deck mb-3 text-center py-3">
              {items.map(item => (

            <div class="col-4">
            <div class="card">
              <img src="..." class="card-img-top" alt="..."/>
              <div class="card-body">
                <h5 class="card-title">{item.name}</h5>
                <p class="card-text">{item.axis}</p>
                <p class="card-text">{item.size}</p>
                <p class="card-text">{item.colour}</p>
                <p class="card-text">{item.price}</p>

              </div>
            </div>
            </div>              
      ))}
      </div>;
    }
  }
}

export default PopulateBeginnerDrone;
