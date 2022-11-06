import Link from 'next/link'
export default function Footer () {
    return(
       <div className="footer">
        <p className="cookbookAd">
            For more recipes order the cookbook <Link href="#" style={{background:"seashell"}}>here</Link>.
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