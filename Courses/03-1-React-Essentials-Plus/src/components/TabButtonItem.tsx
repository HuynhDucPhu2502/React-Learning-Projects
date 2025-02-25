type Props = React.HTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  isSelected: boolean;
};

const TabButtonItem: React.FC<Props> = ({ children, isSelected, ...props }) => {
  return (
    <li>
      <button className={isSelected ? "active" : undefined} {...props}>
        {children}
      </button>
    </li>
  );
};

export default TabButtonItem;
