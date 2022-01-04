import person from "./static/img/person.jpg";
import bitcoin from "./static/img/bitcoin.jpg";
import bitcoin2 from "./static/img/bitcoin2.jpg";
import bitcoin3 from "./static/img/bitcoin3.jpg";

export interface IArticle {
  id: number;
  name: string;
  image: any;
  title: string;
}
export const Articles: IArticle[] = [
  {
    id: 1,
    name: "John Smith",
    image: person,
    title: "How To Sell Bitcoin",
  },
  {
    id: 2,
    name: "Jane Doe",
    image: bitcoin,
    title: "Best Cryptos",
  },
  {
    id: 3,
    name: "John Doe",
    image: bitcoin2,
    title: "What are you doing wrong?",
  },
  {
    id: 4,
    name: "Sarah Doe",
    image: bitcoin3,
    title: "How NOT To Sell Bitcoin",
  },
];
