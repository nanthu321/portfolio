import '../styles/header.css';
import NavigationItems from './NavigationItems';

export default function Header() {

  return (
    <header>
      <nav>
        <div className="logo-container">
          {/* <div>N</div> */}
          <h1 id="logo-label">Portfolio</h1>
        </div>  
        <NavigationItems/>
      </nav>
    </header>
  );
}
