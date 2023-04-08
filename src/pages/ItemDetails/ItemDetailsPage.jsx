import { useNavigate, useParams } from "react-router";
import useFetch from "../../hooks/useFetch";
import "./ItemDetailsPage.css";

const ItemDetailsPage = () => {
  const params = useParams();
  const itemId = params.id;

  const navigate = useNavigate();

  const [item] = useFetch(`${process.env.REACT_APP_BASE_URL}items/${itemId}`);

  const backToMarketplaceHandler = () => {
    navigate("/");
  };
  return (
    <>
      {item ? (
        <>
          <div className="item_details_container">
            <button className="back_button" onClick={backToMarketplaceHandler}>
              Back to marketplace
            </button>
            <div className="item_details_image_container">
              <img src={item.urls[0]} alt={item.name} />
            </div>
            <h4 className="item_title">
              {item.name} . <span className="item_price">$ {item.price}</span>
            </h4>
            <div className="item_description">{item.description}</div>
            <div className="buy_item_button_container">
              <button className="buy_item_button">Buy now</button>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default ItemDetailsPage;
