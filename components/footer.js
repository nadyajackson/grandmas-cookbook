import Link from 'next/link'
export default function Footer () {
    return(
       <div>
        <p className="cookbookAd">
            For more recipes order the cookbook <Link href="#">here</Link>
        </p>
        <p className="contact">
            <span className="bold">Contact</span> 
            <br/>justlikegrandmas@gmail.com
            <br/>(123)-456-7890
        </p>
        <p className="copy">Copyright 2022</p>
       </div>
    )
}