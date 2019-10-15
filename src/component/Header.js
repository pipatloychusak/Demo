import React, { Component } from "react";

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
        //+1s
        setInterval(() => this.tick()

            , 1000);
    }
    tick() {
        this.setState({ date: new Date() });
    }
    render() {
        const style = {height :150, marginTop:5};


        return (
            <div className="container-fluid" >
                <div className="row">
                    <div className="col-md-8 text-left">
                        <h2 className="text-danger" ><img style={style} src="/images/logo/logo.png" alt="" />ttttt </h2>
                    </div>
                    <div className="col-md-4 text-right">
                        <h5 className ='text-muted mt-5'>{this.state.date.toLocaleTimeString()}</h5>
                    </div>
                </div>
                <hr />
            </div>
        )

    }
}
export default Header;