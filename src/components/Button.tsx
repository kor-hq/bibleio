export default function Button({
  text,
  link,
  newTab,
}: {
  text: string;
  link: string;
  newTab?: boolean;
}) {
  return (
    <a
      href={link}
      target={newTab ? "_blank" : "_self"}
      className=" bg-light-accent-navy border border-black rounded-12 shadow-accent-component component-hover-effect text-white px-32 py-8 w-fit h-fit"
    >
      {text}
    </a>
  );
}
