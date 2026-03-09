import NavigationItems from "./NavigationItems";
import '../styles/footer.css'
import { ArrowUp } from "lucide-react";

export default function Footer() {
    return (
        <div  id="footer-container">
            <p>&copy; {new Date().getFullYear()} Nanthakumar.  All rights reserved.</p>
            {/* <div className="navigation-contaier">
                <NavigationItems />
            </div> */}
            {/* <div>
                <div className="scroll-top">
                    <a href="#about-container"><ArrowUp size={22} color="white" /></a>
                </div>
            </div> */}
        </div>
    )
}