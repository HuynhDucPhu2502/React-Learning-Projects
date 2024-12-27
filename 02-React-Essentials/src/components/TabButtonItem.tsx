type Props = {
  children: string;
  isSelected: boolean;
  onSelect: () => void;
};

const TabButtonItem: React.FC<Props> = ({ children, isSelected, onSelect }) => {
  return (
    <li>
      <button
        className={isSelected ? "active" : undefined}
        onClick={() => onSelect()}
      >
        {children}
      </button>
    </li>
  );
};

export default TabButtonItem;
