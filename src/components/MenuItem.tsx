const MenuItem = ({ menuName, setMenuName }) => {
  return (
    <button
      onClick={() => {
        setMenuName(menuName);
      }}
    >
      {menuName}
    </button>
  );
};

export default MenuItem;
