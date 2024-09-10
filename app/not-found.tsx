import Link from "next/link"

export default function NotFound() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold">
        whoops..nothing here for you to see
      </h1>
      <Link href="/" className="underline-offset-8">
        jarrodsterling.com
      </Link>
    </section>
  )
}
