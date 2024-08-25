import Slider from "./Slider/Slider";

function App() {
  const slides = [
    {
      title: "This cat is cute",
      src: "../catCute.jpg",
    },
    {
      title: "This cat is red",
      src: "../catRed.jpg",
    },
    {
      title: "These cats are small ",
      src: "../smallCats.jpg",
    },
    {
      title: "This cat rests",
      src: "../restCat.jpg",
    },
  ];
  return (
    <>
      <Slider slides={slides} />
    </>
  );
}

export default App;
