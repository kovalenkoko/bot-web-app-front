import Item from "../../components/Item/Item";
import useFetch from "../../hooks/useFetch";
import "./MarketPage.css";

const MarketPage = () => {
  const [items] = useFetch(`${process.env.REACT_APP_BASE_URL}items/`);
  return (
    <div>
      <h1 className="heading">Marketplace</h1>
      <div className="item_container">
        {items?.map((item) => (
          <Item item={item} key={item._id} />
        ))}
      </div>
    </div>
  );
};

export default MarketPage;
