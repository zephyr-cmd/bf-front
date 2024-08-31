import "./lunch.css";
import FoodCard from "../Card";
const LunchMenu = (props) => {
  const menuData = [
    {
      id: "1",
      name: "poha",
      price: "1",
      image:
        "https://img.freepik.com/free-photo/breakfast-valentine-s-day-fried-eggs-bread-shape-heart-fresh-vegetables_114579-85492.jpg?size=626&ext=jpg&ga=GA1.1.684735313.1698058301&semt=sph",
      taste_options: ["spicy", "mild_spicy", "no_spicy"],
    },
    {
      id: "2",
      name: "sandwich",
      price: "2",
      image:
        "https://img.freepik.com/free-photo/front-close-up-view-cooked-eggs-along-with-red-tomatoes-inside-metallic-pan-brown-wooden-desk_140725-14226.jpg?size=626&ext=jpg&ga=GA1.1.684735313.1698058301&semt=sph",
      taste_options: ["veg", "non veg"],
    },
    {
      id: "3",
      name: "maggie",
      price: "5",
      image:
        "https://img.freepik.com/free-photo/toast-egg-bacon-tomatoes-microgreens-salad_2829-4804.jpg?size=626&ext=jpg&ga=GA1.1.684735313.1698058301&semt=sph",
      taste_options: ["spicy", "mild_spicy", "no_spicy"],
    },
    {
      id: "4",
      name: "idly",
      price: "8",
      image:
        "https://img.freepik.com/premium-photo/idli-vada-with-sambar-pr-sambhar-also-called-medu-wada-rice-cake_466689-78696.jpg?size=626&ext=jpg&ga=GA1.1.684735313.1698058301&semt=sph",
      taste_options: ["sweet"],
    },
    {
      id: "5",
      name: "aloo parantha",
      price: "9",
      image:
        "https://img.freepik.com/free-photo/healthy-breakfast-with-vegetables_23-2148169088.jpg?size=626&ext=jpg&ga=GA1.1.684735313.1698058301&semt=sph",
      taste_options: ["jhakaas"],
    },
    {
      id: "6",
      name: "idly",
      price: "8",
      image:
        "https://img.freepik.com/premium-photo/idli-vada-with-sambar-pr-sambhar-also-called-medu-wada-rice-cake_466689-78696.jpg?size=626&ext=jpg&ga=GA1.1.684735313.1698058301&semt=sph",
      taste_options: ["sweet"],
    },
    {
      id: "7",
      name: "grapes",
      price: "10",
      image:
        "https://img.freepik.com/free-photo/flat-lay-arrangement-autumn-fruits_23-2148634394.jpg?w=740t=st=1699877348~exp=1699877948~hmac=c4f42e79f62653cf3d70fd418e3df8a1c56d78998ed280acb981916dad8c775d",
      taste_options: ["jhakaas"],
    },
  ];

  return (
    <>
      {menuData.length > 0 &&
        menuData.map((item, index) => {
          return (
            <div className="breakfast_menu_container">
              <FoodCard item={item} index={index} />
            </div>
          );
        })}
    </>
  );
};

export default LunchMenu;
