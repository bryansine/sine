import { navlinks, scrollToSection } from "@/lib/utils";
import { Button } from "../ui/button";

const DesktopNav: React.FC = () => {
  return (
    <div className="hidden lg:flex items-center gap-4">
        <ul className="flex items-center text-lg gap-4">
            {navlinks.map((link, index) => (
                <li className='cursor-pointer text-muted-foreground transition-colors hover:text-accent-foreground' key={index} onClick={() => scrollToSection(link)}>{link}</li>
            ))}
        </ul>
        <Button variant={'outline'} className="">View CV</Button>
    </div>
  )
}

export default DesktopNav;