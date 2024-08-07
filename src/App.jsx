import Slider from "./Slider/Slider";

function App() {
  const slides = [
    {
      title: "This cat is cute",
      src: "../public/catCute.jpg",
    },
    {
      title: "This cat is red",
      src: "../public/catRed.jpg",
    },
    {
      title: "These cats are small ",
      src: "../public/smallCats.jpg",
    },
    {
      title: "This cat rests",
      src: "../public/restCat.jpg",
    },
  ];
  return (
    <>
      <Slider slides={slides} />
    </>
  );
}

export default App;
