import { Component } from "react";

class FoodForm extends Component{
    render (){
        var {food} =this.props;
        var availableStt= food.available;
        return(
            <div>
                <form onSubmit={this.onSave}>
                    <div className="form-group">
                        <label>Name: </label>
                        <input
                            type="text"
                            className="form-control col-5"
                            name="name"
                            // defaultValue={food.name}
                            value={food.name}
                            onChange={(e)=>this.props.onChange(e)}
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
                            name="quantity"
                            value={food.quantity}
                            // defaultValue={food.quantity}
                            onChange={(e)=>this.props.onChange(e)}
                        />
                    </div>
                    <div className="form-group">
                        <label>Available: </label>
                    </div>
                    <div className="checkbox">
                        <label>
                            <input
                                type="checkbox"
                                name="available"
                                value={availableStt}
                                // defaultValue={availableStt}
                                onChange={(e)=>this.props.onChange(e)}
                                checked={availableStt}
                                // defaultChecked={availableStt}
                            />
                            Còn Hàng
                        </label>
                    </div>
                    <button className="btn btn-danger mr-10" onClick={(e)=>this.props.onBack(e)}>
                        Trở Lại
                    </button>
                    <button type="submit" className="btn btn-primary" onClick={(e)=>this.props.onSave(e)}>Lưu Lại</button>
                </form>
            </div>
        )
    }
}

export default FoodForm