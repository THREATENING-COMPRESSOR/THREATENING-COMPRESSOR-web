import data from "./data";
import { useParams } from "react-router-dom";

function OrderDetail(){
    // string that we will pass in url
    const { id } = useParams< { id: string }>();
    // referencing order data
    const order = data.orders.find((o)=>o._id == parseInt(id as string));

    return(
        <div>
            <h3>order name: {order?.user.name}</h3>
        </div>
    );

}

export default OrderDetail;