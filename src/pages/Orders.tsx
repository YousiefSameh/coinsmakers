import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { setCategory } from "@store/orders/ordersSlice";
import { OrderCategory } from "@customTypes/order.types";
import OfferCard from "@components/Earn/Cards/OfferCard";
import { FaGamepad } from "react-icons/fa";
import { IoLogoAndroid } from "react-icons/io5";
import { MdCardGiftcard } from "react-icons/md";
import { GiPerspectiveDiceSixFacesRandom } from "react-icons/gi";
import SpecialHeading from "@components/shared/SpecialHeading";

const categories: {
  id: OrderCategory;
  name: string;
  icon: React.JSX.Element;
}[] = [
  { id: "all", name: "All Orders", icon: <MdCardGiftcard /> },
  { id: "games", name: "Games", icon: <FaGamepad /> },
  { id: "install", name: "Install Apps", icon: <IoLogoAndroid /> },
  {
    id: "sweepstake",
    name: "Sweepstakes",
    icon: <GiPerspectiveDiceSixFacesRandom />,
  },
  { id: "free", name: "Free", icon: <MdCardGiftcard /> },
];

const Orders = () => {
  const { category = "all" } = useParams<{ category: OrderCategory }>();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { items, selectedCategory } = useAppSelector((state) => state.orders);

  useEffect(() => {
    if (categories.some((cat) => cat.id === category)) {
      dispatch(setCategory(category));
    } else {
      navigate("/orders/all", { replace: true });
    }
  }, [category, dispatch, navigate]);

  const filteredOrders = items.filter((order) =>
    selectedCategory === "all" ? true : order.category === selectedCategory
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div className="p-6 md:p-0">
      <SpecialHeading title="Orders" icon={<MdCardGiftcard />} />
      {/* Categories */}
      <div className="flex flex-wrap gap-2 md:gap-4 my-6">
        {categories.map((cat) => (
          <motion.button
            key={cat.id}
            onClick={() => navigate(`/orders/${cat.id}`)}
            className={`btn btn-lg gap-2 ${
              selectedCategory === cat.id
                ? "bg-secondary-color"
                : "btn-ghost hover:bg-secondary-color/20"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {cat.icon}
            <span className="hidden md:inline">{cat.name}</span>
          </motion.button>
        ))}
      </div>

      {/* Orders Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4"
      >
        {filteredOrders.map((order, index) => (
          <OfferCard
            key={order.id}
            index={index}
            title={order.title}
            provider={order.provider}
            price={order.price}
            image={order.image}
            platform={order.platform}
          />
        ))}
      </motion.div>

      {/* Empty State */}
      {filteredOrders.length === 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center py-12"
        >
          <h3 className="text-2xl font-bold mb-2">No Orders Found</h3>
          <p className="text-base-content/60">
            There are no orders available in this category at the moment.
          </p>
        </motion.div>
      )}
    </div>
  );
};

export default Orders;
