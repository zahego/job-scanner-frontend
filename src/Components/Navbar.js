import React from 'react';
import '../Styling/Navbar.css';


class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.sendData = this.sendData.bind(this);
    }
    sendData = (text) => {
        this.props.parentCallback(text);
    }
    render() {
        return (
            <div className="navbar" >
                <div className="circle">
                    <img src="https://cdn.britannica.com/61/118661-050-6CAD9A11/Popcorn.jpg" /></div>
                <div><button onClick={()=>this.sendData("Search")}>Search</button></div>
                <div><button onClick={()=>this.sendData("Profile")}>Profile</button></div>
                <div><button onClick={()=>this.sendData("My Job")}>My Job</button></div>
                <div> <button onClick={()=>this.sendData("Rec")}>Rec</button></div>
            </div>
        )
    }
}
export default Navbar;
