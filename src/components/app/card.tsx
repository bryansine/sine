import { GitHubLogoIcon, Link2Icon } from "@radix-ui/react-icons";
import { Link } from "react-router-dom";

type CardProps = {
    picture_path: string;
    title: string;
    description: string;
    technologies: string[];
}

const Card = ({ item }: {item: CardProps}) => {
  return (
    <div className="border border-accent-foreground/15 p-2 rounded-2xl backdrop-blur-sm">
      <div className='p-4 border border-accent-foreground/50 rounded-lg hover:bg-[radial-gradient(circle at top, #fff, transparent)] flex flex-col gap-4'>
        <div className="">
          <div className="text-lg font-bold">{item.title}</div>
          <div className="text-muted-foreground">{item.description}</div>
        </div>
        <Link to={'#'} className="">
            <img src={item.picture_path} alt="" className="scale-[0.98] hover:scale-[1] transition-all" />
        </Link>
        <div className="flex items-center gap-4">
            <Link to={'#'} className='flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors'>
                <GitHubLogoIcon />
                <p>Github</p>
            </Link>
            <Link to={'#'} className='flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors'>
                <Link2Icon />
                <p>Live</p>
            </Link>
        </div>
      </div>
    </div>
  )
}

export default Card;