function Cards({ userName, staffPosition }) {
  return (
    <figure className="flex bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
      <img
        className="w-24 h-24 rounded-full mx-auto"
        src="https://tailwindcss.com/_next/static/media/sarah-dayan.de9b3815.jpg"
        alt=""
        width="384"
        height="512"
      />
      <div className="flex flex-col justify-center ml-4">
        <blockquote>
          <p className="text-lg font-medium">
            “Tailwind CSS is the only framework that I've seen scale on large
            teams. It’s easy to customize, adapts to any design, and the build
            size is tiny.”
          </p>
        </blockquote>
        <figcaption className="font-medium">
          <div>{userName}</div>
          <div>{staffPosition || "Nalla"} Engineer</div>
        </figcaption>
      </div>
    </figure>
  );
}

export default Cards;
