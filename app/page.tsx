function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-3xl font-semibold">Jarrod Sterling</h1>
      <h4 className="mb-8 text-lg font-semibold">
        {`a `}
        <a
          href="https://www.simplilearn.com/what-is-a-ui-developer-and-what-skills-are-required-article"
          target="_blank"
        >
          UI
        </a>
        {` / `}
        <a href="https://linkedin.com/in/jsterlingdev" target="_blank">
          Front-end develop
        </a>
        {` from Vancouver, Canada.`}
      </h4>
      <p className="mb-4">
        {`I love all things HTML, CSS & JavaScript.`} <br />
        {`Currently enjoying working in front-end frameworks like `}
        <a href="https://nextjs.org/docs" target="_blank">
          Next.js
        </a>
        {` & Tailwind.`}
        <br />
        <br />
        {`I work at a rad agency based out of `}
        <a href="https://akcelo.com/#philosophy" target="_blank">
          Australia
        </a>
        {`.`}
        <br />
        {`Client highlights include Spotify, TikTok, McDonalds & Pepsi.`}
        <br />
        <br />
        {`In my spare time you can find me exploring `}
        <a
          href="https://en.wikipedia.org/wiki/English_Bay,_Vancouver"
          target="_blank"
        >
          Vancouver
        </a>
        {` on my bike, swimming at my `}
        <a href="https://en.wikipedia.org/wiki/Third_Beach" target="_blank">
          favourite beach
        </a>
        {` or writing/recording `}
        <a href="https://www.instagram.com/j.jsterling" target="_blank">
          music
        </a>
        {`.`}
      </p>
      <ul className="font-sm mt-8 flex flex-col space-x-0 space-y-2 text-neutral-600 md:flex-row md:space-x-4 md:space-y-0 dark:text-neutral-300">
        <li>
          <p>
            I love connecting with people. Feel free to drop a line and say hi ~
          </p>
          <br />
          <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            target="_blank"
            href="mailto:create@jarrodsterling.com"
          >
            <ArrowIcon />
            <p className="ml-2 h-7">create@jarrodsterling.com</p>
          </a>
        </li>
      </ul>
    </section>
  )
}
