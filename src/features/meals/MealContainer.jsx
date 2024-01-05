import Content from "./Content";
import Header from "./Header";

export default function MealContainer({ list, slide, name }) {
  return (
    <>
      <Header name={name} />
      <Content list={list} slide={slide} />
    </>
  );
}
