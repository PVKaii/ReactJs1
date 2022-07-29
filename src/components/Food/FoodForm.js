import { Component } from "react";
import {  Link } from 'react-router-dom';

class FoodForm extends Component{
    render (){
        var {food} =this.props;
        var availableStt= food.available ? true :false;
        // var availableStt=true;
        return(
            <div>
                <form onSubmit={this.onSave}>
                    <div className="form-group">
                        <label>Name: </label>
                        <input
                            type="text"
                            className="form-control col-5"
                            name="txtName"
                            // value={food.name}
                            // onChange={this.onChange}
                        />
                    </div>
                    {/* <div className="form-group">
                        <label>Giá: </label>
                        <input
                            type="number"
                            className="form-control"
                            name="txtPrice"
                            value={txtPrice}
                            onChange={this.onChange}
                        />
                    </div> */}
                    <div className="form-group">
                        <label>Quantity: </label>
                        <input
                            type="number"
                            className="form-control col-2"
                            name="txtQuantity"
                            // value={food.quantity}
                            // onChange={this.onChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Available: </label>
                    </div>
                    <div className="checkbox">
                        <label>
                            <input
                                type="checkbox"
                                name="chkbAvailable"
                                value={availableStt}
                                onChange={this.onChange}
                                // checked={availableStt}
                            />
                            Còn Hàng
                        </label>
                    </div>
                    <Link to="/product-list" className="btn btn-danger mr-10">
                        Trở Lại
                    </Link>
                    <button type="submit" className="btn btn-primary">Lưu Lại</button>
                </form>
            </div>
        )
    }
}

export default FoodForm