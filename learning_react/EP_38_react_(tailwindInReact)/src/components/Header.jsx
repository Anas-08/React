import viteLogo from '/vite.svg'

export default function Header() {
  return (
    <header className='flex justify-between items-center shadow-md py-4 px-4 md:px-10'>
        <img src={viteLogo} alt="viteLogo" />

        <ul className='flex gap-5'>
            <li>
                <a href="./">Home</a>
            </li>
            <li>
                <a href="./about">About</a>
            </li>
            <li>
                <a href="./contact">Contact</a>
            </li>
        </ul>
    </header>
  )
}
