import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "React Commerce",
    img: "https://images.pexels.com/photos/3369569/pexels-photo-3369569.jpeg?auto=compress&cs=tinysrgb&w=600",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem ipsa veniam sed magnam quae odio nostrum labore voluptatum dolorum. Vitae maxime nisi incidunt cumque ipsam dolor distinctio dignissimos. Blanditiis, hic!",
  },
  {
    id: 2,
    title: "Next.Js Blog",
    img: "https://images.pexels.com/photos/2267563/pexels-photo-2267563.jpeg?auto=compress&cs=tinysrgb&w=600",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem ipsa veniam sed magnam quae odio nostrum labore voluptatum dolorum. Vitae maxime nisi incidunt cumque ipsam dolor distinctio dignissimos. Blanditiis, hic!",
  },
  {
    id: 3,
    title: "Vanilla Js App",
    img: "https://images.pexels.com/photos/3089843/pexels-photo-3089843.jpeg?auto=compress&cs=tinysrgb&w=600",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem ipsa veniam sed magnam quae odio nostrum labore voluptatum dolorum. Vitae maxime nisi incidunt cumque ipsam dolor distinctio dignissimos. Blanditiis, hic!",
  },
  {
    id: 4,
    title: "Music App",
    img: "https://images.pexels.com/photos/4134791/pexels-photo-4134791.jpeg?auto=compress&cs=tinysrgb&w=600",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem ipsa veniam sed magnam quae odio nostrum labore voluptatum dolorum. Vitae maxime nisi incidunt cumque ipsam dolor distinctio dignissimos. Blanditiis, hic!",
  },
];

const Single = ({ item }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-200, 200]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>See Demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
