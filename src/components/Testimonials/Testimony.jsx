import { Component } from "react";

class Testimony extends Component {
  constructor(props) {
    super();
  }
  render() {
    return (
      <div className="testimony">
        <div className="testimony__avatar">
          <img src={this.props.img} />
        </div>
        <div className="testimony__comment">
          <p className="text">
            {this.props.text}
          </p>
          <p className="text">
            <strong style={{ color: "black" }}>{this.props.name} |</strong>
            {this.props.occupation}
          </p>
        </div>
      </div>
    );
  }
}
export default Testimony;
