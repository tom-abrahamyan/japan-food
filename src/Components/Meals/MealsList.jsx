import styles from "./MealList.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";


const DUMMY_MEALS = [
    {
        id: "m1",
        name: 'Ամառային ռոլլ"',
        description:
            "Բրինձ նորի, վարունգ, լոլիկ, դայկոն, պղպեղ, հազար, սպայսի սոուս",
        price: 11.99,
    },
    {
        id: "m2",
        name: "Բոնիտո ռոլլ",
        description: "Սերուցքային պանիր, տապակած սաղմոն, վարունգ, բոնիտո, կիտրոն, ",
        price: 3.99,
    },
    {
        id: "m3",
        name: "Գեյշա",
        description: "Պանիր, նորի, սաղմոն, վարունգ",
        price: 4.99,
    },
    {
        id: "m4",
        name: 'Գրեբեշոկ"',
        description:
            "Բրինձ, նորի, սերուցքային պանիր, ավոկադո, ծովակատար, խեցգետնի ձողիկներ, կծու ելակ",
        price: 7.99,
    },
];


function MealsList(){

    const mealList = DUMMY_MEALS.map(meal =>
        <MealItem
            key={meal.id}
            id={meal.id}
            name={meal.name}
            description={meal.description}
            price={meal.price}
        />
    )

    return(
        <section className={styles.meals}>
            <Card >
                <ul>
                    {mealList}
                </ul>
            </Card>
        </section>
    )
}

export default MealsList;