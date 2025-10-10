import chefIcon from "../assets/chef-icon.png";
import "./Header.css"
export default function Header() {
  return (
    <>
      <header>
        <img id="chefIcon" src={chefIcon} alt="chefIcon" />
        <h1>Chef Claude</h1>
      </header>
      
    </>
  );
}
