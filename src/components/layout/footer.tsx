import { ModeToggle } from "@/components/themes/mode-toggle";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
      <div className="w-full flex justify-between border-t py-2 max-h-24 rounded-lg p-2 backdrop-blur-sm">
        <div className="lg:flex lg:items-center gap-2">
          <p>Designed and built by <Link to={'https://www.linkedin.com/in/bryan-sine-53432b1b1/'} className="underline">Sine</Link>.</p>
          <p>Source code available on <Link to={'/'} className="underline">GitHub</Link>.</p>
        </div>
          <ModeToggle />
      </div>
  )
}

export default Footer;