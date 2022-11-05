import Image from 'next/image'
export default function Waffles () {
    return(
        <div id="four">
                <h3>Waffles</h3>
                <p><span class="bold">Supplies</span></p>
                <ul>
                    <li>Big Bowl</li>
                    <li>Two Smaller Bowls</li>
                    <li>Waffle Iron</li>
                    <li>Big Spoon</li>
                    <li>Whisk</li>
                    <li>Fork</li>
                    <li>Measuring Cups and Spoons</li>
                    <li>Baking Spray</li>
                    <li>Egg Seperator</li>
                    <li>A lot of Time</li>
                </ul>
                <p><span class="bold">Ingredients</span></p>
                <ul>
                    <li>2 Eggs</li>
                    <li>1 1/2 Cups All-Purpose Flour</li>
                    <li>1/2 Cup Cornstarch</li>
                    <li>1 tsp Baking Powder</li>
                    <li>1/2 tsp Baking Soda</li>
                    <li>1/2 tsp salt</li>
                    <li>1/2 Cup Milk</li>
                    <li>5 tbsp Canola Oil</li>
                    <li>2 tsp Vanilla</li>
                    <li>1 tsp White Vinegar</li>
                    <li>2 tbsp Sugar</li>
                    <li>1/2 cup club soda <span class="italic">Chilled</span></li>
                </ul>
                <Image 
                    src="/NancyPhotos/SecretIngredient.jpg" 
                    id="SecretIngredient"
                    width="500"
                    height="300"/>
                <p><span class="bold">Instructions</span></p>
                <ol>
                    <li>Seperate Eggs. Put egg whites in a small bowl at room temp. for 30 minutes. Put egg yolks to side in the <i>Big</i> bowl</li>
                    <li>While Waiting...In the second small bowl mix Flour, Cornstartch, Baking Powder, Baking Soda and salt.</li>
                    <li>In Big Bowl whisk Egg Yolks, milk, oil, vanilla, and vinegar until blended</li>
                    <li>Beat egg whites with fork until soft Peaks form</li>
                    <li>Gradually add sugar and beat untill stiff peaks form</li>
                    <li>Preheat Waffle Maker</li>
                    <li>Stir Big Bowl mixture with the small bowl of dry goods.</li>
                    <li>Add club soda</li>
                    <li>Fold egg whites into batter</li>
                    <li>Bake in Waffle Iron</li>
                </ol>
            </div>          
    )
}