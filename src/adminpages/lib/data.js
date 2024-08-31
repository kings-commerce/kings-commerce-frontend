import pendingOrderImg from "../../assets/orderImg.svg";
import inProgressImg from "../../assets/deliveryImg.svg";
import completeDeliveryImg from "../../assets/completedDelivery.svg";

export const statusCardData = [
  {
    title: "Orders Pending",
    num: 24,
    perChange: "+18",
    image: pendingOrderImg,
  },
  {
    title: "In Progress",
    num: 2,
    perChange: "-12",
    image: inProgressImg,
  },
  {
    title: "Completed",
    num: 10,
    perChange: "+7",
    image: completeDeliveryImg,
  },
];
