interface HomeLinkProps {
  link: string;
  text: string;
  bg: string;
  color?: string;
}

export function HomeLink({ link, text, bg, color}: HomeLinkProps) {
  return (
    <a
      className={`relative inline-block text-white ${color} uppercase font-black text-lg bg-transparent px-1 py-1 rounded-md border-0 border-transparent bg-gradient p-[2px]`}
      href={link}
      target="_blank"
    >
      <span className={`block rounded-md px-14 py-3 hover:bg-gradient ${bg}`}>{text}</span>
    </a>
  );
}
