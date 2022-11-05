import Link from 'next/link';
export default function Navbar () {
    return(
        <div className="navbar">
            <span><Link href="/">Home</Link></span>
            <span><Link href="/recipes">Free Recipes</Link></span>
            <span><Link href="/dedication">Dedication</Link></span>
        </div>
    )
}