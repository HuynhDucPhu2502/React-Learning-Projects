import reactCoreConceptsImg from "../assets/react-core-concepts.png";

const Header = () => {
  const words = ["Fundamental", "Core", "Crucial"];

  const genRandInt = (max: number) => {
    return Math.floor(Math.random() * (max + 1));
  };

  return (
    <>
      <p>
        <header>
          <div className="w-fit mx-auto">
            <img src={reactCoreConceptsImg} alt="Stylized atom" />
          </div>
          <h1>React Essentials</h1>
          <p>
            {words[genRandInt(2)]} React concepts you will need for almost any
            app you are going to build!
          </p>
        </header>
      </p>
    </>
  );
};

export default Header;
