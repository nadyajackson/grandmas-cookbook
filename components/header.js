import Image from "next/image"
export default function Header () {
    return(
        <div className="header">
            <span>
            <Image
            src="/NancyPhotos/cookbook.gif"
            id="cookbook"
            width="150"
            height="150"/>
            <h1>Just like Grandma's</h1>
            <h4>Tastes like going home.</h4>
            </span>
        </div>
    )
}