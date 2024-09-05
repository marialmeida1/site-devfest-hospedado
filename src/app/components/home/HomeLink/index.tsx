interface HomeLinkProps {
    link: string;
    text: string;
}

export function HomeLink({ link, text }: HomeLinkProps) {
    return (
        <a
          className="relative inline-block text-white uppercase font-black text-lg bg-dark-background px-1 py-1 rounded-md border-0 border-transparent bg-gradient p-[2px]"
          href={link}
          target="_blank"
        >
          <span className="block bg-dark-background rounded-md px-14 py-3 hover:bg-gradient">
            {text}
          </span>
        </a>
    );
}