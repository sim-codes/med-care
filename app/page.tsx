import Link from "next/link"

export default function Home() {
  return <main>
    <h1 className={`mb-4 text-xl md:text-4xl font-bold`}>
        Welcome to MedCare
      </h1>
      <div className="flex">
      <Link href="/dashboard" className='text-cyan-500 me-2'>
        Dashboard
      </Link>
      <Link href="/login" className='text-cyan-500'>
        Login
      </Link>
    </div>
  </main>
}