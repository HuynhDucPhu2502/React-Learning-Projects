type Props = {
  image: string;
  title: string;
  description: string;
};

const CoreConceptItem: React.FC<Props> = ({ image, title, description }) => {
  return (
    <li className="flex flex-col items-center">
      <img src={image} alt={title} className="max-w-24" />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
};

export default CoreConceptItem;
