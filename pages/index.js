import { Fragment } from "react";

import Hero from "../components/home-page/hero";
import FeaturedPosts from "../components/home-page/featured-posts";

const DUMMY_POSTS = [
  {
    slug: "getting-started",
    title: "Getting Started",
    image: "getting-started.png",
    excerpt: "Here's what you need to do",
    date: "2022-02-10",
  },
  {
    slug: "getting-started2",
    title: "Getting Started",
    image: "getting-started.png",
    excerpt: "Here's what you need to do",
    date: "2022-02-10",
  },
  {
    slug: "getting-started3",
    title: "Getting Started",
    image: "getting-started.png",
    excerpt: "Here's what you need to do",
    date: "2022-02-10",
  },
  {
    slug: "getting-started4",
    title: "Getting Started",
    image: "getting-started.png",
    excerpt: "Here's what you need to do",
    date: "2022-02-10",
  },
];

function HomePage() {
  return (
    <Fragment>
      <Hero />
      <FeaturedPosts posts={DUMMY_POSTS} />
    </Fragment>
  );
}

export default HomePage;
