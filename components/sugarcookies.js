import Image from "next/image"
export default function Sugar () {
    return(
        <div id="two">
                <h3>Sugar Cookies</h3>
                <Image 
                    src="/NancyPhotos/Jcookie.jpg" 
                    id="Jcookie"
                    width="500"
                    height="300"/>
                <p><span class="bold">Supplies</span></p>
                <ul>
                    <li>Big Bowl</li>
                    <li>Cookie Sheets</li>
                    <li>Spatula</li>
                    <li>Whisk</li>
                    <li>Big Spoon</li>
                    <li>Measuring Cups and Spoons</li>
                    <li>Cookie Cutters</li>
                    <li>Rolling Pin</li>
                    <li>Baking Spray</li>
                    <li>Love</li>
                </ul>
                <p><span class="bold">Ingredients</span></p>
                <ul>
                    <li>1/2 Cup Shortening</li>
                    <li>1 Cup Sugar</li>
                    <li>1 Egg</li>
                    <li>3 1/2 Cups <span class="bold">Self-Rising Flour</span></li>
                    <li>1/2 Cup milk</li>
                    <li>1/2 tsp Vanilla</li>
                </ul>
                <p><span class="bold">Instructions</span></p>
                <ol>
                    <li>Preheat oven to 350&#8457;</li>
                    <li>Cream Shortening and Sugar with Whisk</li>
                    <li>Add Egg and Blend</li>
                    <li>Pour in Milk and Vanilla, mix with whisk </li>
                    <ul>
                        <li>We're done with the whisk.</li>
                        <li>Use a sturdy spoon now</li>
                        <li>If you try to use the whisk on the flour you WILL regret it.</li>
                    </ul>
                    <li>Add Flour a half cup at a time. Stirring after each addition</li>
                    <li>Roll out on <span class="italic">lightly</span> floured surface to 1/8 in thickness</li>
                    <ul>
                        <li>If dough falls apart add 1/4 cup flour to all dough</li>
                        <li>Be careful not to over-mix dough. It will toughen up.</li>
                    </ul>
                    <li>Cut with cookie cutters.</li>
                    <li>Bake for Aprox. 15 minutes (or until light brown edges) on Sprayed Cookie Sheet</li>
                </ol>
            </div>   
    )
}