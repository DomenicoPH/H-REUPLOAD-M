import React from "react";

class Card extends React.Component{
    constructor(props){
        super(props)
        console.log(this.props.address.street)
    }

    render(){
        return(
            <div className="eachCard">
                <p className="cardID">{this.props.id}</p>
                <p className="cardNAME">Name: {this.props.name}</p>
                <p>UserName: {this.props.username}</p>
                <p>Email: {this.props.email}</p>
                <hr />
                <p>Address: {`${this.props.address.street} ${this.props.address.suite}, ${this.props.address.city} - ${this.props.address.zipcode}.`}</p>
                <hr />
                <p>Company: {this.props.company.name}</p>
                <p>Website: {this.props.website}</p>
                <p>Phone: {this.props.phone}</p>
                <hr />
                <p><i>"{this.props.company.catchPhrase}"</i></p>

            </div>
        )
    }
}

export default Card;