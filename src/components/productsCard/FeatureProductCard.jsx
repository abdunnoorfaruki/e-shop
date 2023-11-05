/* eslint-disable react/prop-types */
import Ratings from "../ratings";
import ProductAction from "../product-action";
// eslint-disable-next-line react/prop-types
const FeatureProductCard = ({
  image,
  name,
  price,
  discount,
  ratings,
  actions,
}) => {
  console.log(actions);
  return (
    <div className="group border transition-all duration-700 hover:shadow-md hover:-mt-3 cursor-pointer rounded-sm">
      <div className="relative overflow-hidden">
        {/* discount icon */}
        <div className="absolute flex justify-center items-center top-2 left-2 rounded-full font-semibold bg-red-500 text-white w-[35px] h-[35px] ">
          {discount}%
        </div>
        {/* product image */}
        <img
          src={image}
          alt="feature product image"
          className="w-full h-[240px]"
        />
        {/* actions icons */}
        <ul className="w-full absolute flex justify-center items-center gap-2 py-2 -bottom-10 group-hover:bottom-3 transition-all duration-700 ">
          {actions?.map((action, i) => (
            <ProductAction
              key={i}
              Icon={action.icon}
              to={action.to && action.to}
            />
          ))}
        </ul>
      </div>
      <div className="p-3 text-slate-600 px-2 ">
        <h2>{name}.</h2>
        <div className="flex justify-start items-center gap-3">
          <span className="text-lg font-bold">{price}</span>

          <Ratings ratings={ratings} />
        </div>
      </div>
    </div>
  );
};

export default FeatureProductCard;
