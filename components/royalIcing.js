import Image from "next/image"
export default function Icing () {
    return(
        <div id="recipeBox">
        <h3>Royal Icing</h3>
        <Image 
            src="/NancyPhotos/Icing.jpg" 
            alt="Four different size bowls full of icing colored green, pink, yellow, blue"
            id="Icing"
            width="500"
            height="300"
            />
        <p><span className="bold">Supplies</span></p>
        <ul>
            <li>Cookies or (Cup)cakes</li>
            <li>Butter knife or Icing Spreader</li>
            <li>Bowls</li>
            <li>Spoons</li>
            <li>Patience</li>
        </ul>
        <p><span className="bold">Ingredients</span></p>
        <ul>
            <li>Powdered Sugar</li>
            <li>Shortening</li>
            <li>1/2 Cup Butter</li>
            <li>Vanilla</li>
            <li>Milk</li>
            <li>Food Coloring</li>
            <li>Grandma&#39;s Intuition</li>
        </ul>
        <p><span className="bold">Instructions</span></p>
        <ol>
            <li>Add equal parts Shortening and Powdered Sugar.</li>
                <ul>
                    <li>Vary amounts based on desired colors</li>
                    <li>If using the above Sugar Cookie Recipe start with 1/2 cup of each</li>
                </ul>
            <li>A dash of Vanilla</li>
            <li>A splash of Milk</li>
            <li>Mix more as needed</li>
            <ul>
                <li>Mix in more Powdered Sugar for more quantity</li>
                <li>More Shortening to thicken</li>
                <li>More Milk to thin</li>
                <li>Thicker Icing is best for cookie designs. Thinner for covering large cookie surfaces</li>
                <li>Solid thickness for cakes</li>
            </ul>
            <li>Split into other bowls and add food coloring as desired</li>
            <li>Put on <span className="bold">COOLED</span> cookies or cakes</li>
        </ol>
    </div>
    )
}