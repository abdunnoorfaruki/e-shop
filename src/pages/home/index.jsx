import Banner from "../../components/banner";
import Categories from "../../components/categories";
import FeatureProducts from "../../components/featureProducts";
import Products from "../../components/products";
import Header from "../../layout/Header";

const Home = () => {
  return (
    <>
      <Header />
      <Banner />
      <Categories />
      <FeatureProducts />
      <div className="py-10">
        <div className="w-[85%] flex flex-wrap mx-auto ">
          <div className="grid w-full grid-cols-3 md-lg:grid-cols-2 md:grid-cols-1 gap-8">
            <div className="overflow-hidden">
              <Products title="Latest Product" />
            </div>
            <div className="overflow-hidden">
              <Products title="Top Rated Product" />
            </div>
            <div className="overflow-hidden">
              <Products title="Discount Product" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
