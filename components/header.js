import Image from "next/image"
export default function Header () {
    return(
        <div className="header">
            <span>
            <Image
                src="/NancyPhotos/cookbook.gif"
                priority="true"
                id="cookbook"
                width="150"
                height="150"
                alt="cookbook line art with spoon and measuring cup"/>
            <h1>Just like Grandma's</h1>
            <h4>Tastes like going home.</h4>
            </span>
        </div>
    )
}