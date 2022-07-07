import MenuItem from "./MenuItem";
import CONTENT_INFO from "../content";

const Menu = ({ setMenuName }) => {
  return (
    <section className="aside-menu">
      {Object.keys(CONTENT_INFO).map((menuName) => {
        return <MenuItem menuName={menuName} setMenuName={setMenuName} />;
      })}
    </section>
  );
};

export default Menu;
