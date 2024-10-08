import Link from 'next/link'

const navItems = {
  "/": {
    name: "Home",
  },
}

export function Navbar() {
  return (
    <aside className="-ml-[8px] mb-8">
      <div className="lg:sticky lg:top-20">
        <nav
          className="flex flex-row-reverse relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
          id="nav"
        >
          <div className="flex space-x-0 pr-10">
            {Object.entries(navItems).map(([path, { name }]) => {
              return (
                <Link
                  key={path}
                  href={path}
                  target="_blank"
                  className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2 m-1"
                >
                  {name}
                </Link>
              )
            })}
          </div>
        </nav>
      </div>
    </aside>
  )
}
