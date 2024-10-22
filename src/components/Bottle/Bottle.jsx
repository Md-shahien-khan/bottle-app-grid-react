import './Bottle.css'
// step 6 open bottle jsx
const Bottle = ({bottle}) => {
    // step 8 destructure
    const {name, img, price} = bottle;
    console.log(bottle);
    return (
        <div className="bottle">
            <h3>Bottle : {name}</h3>
            <img src={img} alt="" />
            <p>Price : ${price}</p>

        </div>
    );
};

export default Bottle;