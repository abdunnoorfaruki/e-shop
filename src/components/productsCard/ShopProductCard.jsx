/* eslint-disable react/prop-types */
import Ratings from "../ratings"
import ProductAction from "../product-action"

const ShopProductCard = ({styles, actions, img, name, price, ratings}) => {
  return (
    <div
    className={`flex transition-all duration-1000 hover:shadow-md hover:-translate-y-3 ${
      styles === "grid"
        ? "flex-col justify-start items-start"
        : "justify-start items-start md-lg:flex-col md-lg:justify-start md-lg:items-start"
    } w-full gap-4 bg-white p-1 rounded-md border cursor-pointer group `}
  >
    <div
      className={
        styles === "grid"
          ? "w-full relative h-[4] md:h-[270px] xs:h-[170px] overflow-hidden"
          : "md-lg:w-full relative h-[210px] md:h-[270px] overflow-hidden min-w-[30%] "
      }
    >
      <div className="h-[230px] rounded-md md:h-[260px] xs:h-[160px] object-cover flex justify-center items-center">
        <img
          className="h-full"
          src={img}
          alt="image"
        />
      </div>
      <ul className="w-full absolute flex justify-center items-center gap-2 py-2 -bottom-11 group-hover:bottom-3 transition-all duration-700 ">
        {actions?.map((action, i) => (
          <ProductAction
            key={i}
            Icon={action.icon}
            to={action.to && action.to}
          />
        ))}
      </ul>
    </div>

    <div className="flex justify-start items-start flex-col gap-1">
      <h2
        className={` ${
          styles === "list" ? "text-2xl pb-3" : "text-md pb-1"
        }  text-slate-700 font-medium`}
      >
      {name?.slice(0, 60)}...
      </h2>
      <div className="flex justify-start items-center gap-2 py-2">
        <span className={` ${
          styles === "list" ? "text-2xl " : "text-md"
        }  font-bold text-slate-700`}>${price}</span>
        <div className={` ${
          styles === "list" ? "text-xl " : "text-md"
        }  font-bold`}>
          <Ratings ratings={ratings} />
        </div>
      </div>
    </div>
  </div>
  )
}

export default ShopProductCard