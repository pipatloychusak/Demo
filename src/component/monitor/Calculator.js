import React, { Component } from "react";
class Calculator extends Component {
    render() {
        return (
            <div>
                <h1 className="text-right">340</h1>
                <hr />
                <ul className="text-unstyled">
                    <li className ="text-right text-success title" > 
                        xxxxx
                        <button className = "btn btn-light btn-sm">x</button>
                    </li>

                    <li className ="text-right text-success title" > 
                        xxxx
                        <button className = "btn btn-light btn-sm">x</button>
                        

                    </li>

                </ul>
                <hr />
                <button className="btn btn-block btn-danger title">ยืนยัน</button>
                <button className="btn btn-block btn-secondary title">ยกเลิก</button>
            </div>
        )
    }
    
}
export default Calculator;