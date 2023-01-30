import styles from "./MealItemForm.module.css";
import Input from "../../UI/Input";
import {useRef, useState} from "react";
function MealItemForm(props) {
    const [isAmountValid, setIsAmountValid] = useState(true);
    const amountInputRef = useRef();

    const submitHandler = (e) => {
        e.preventDefault();
        const inputAmount = amountInputRef.current.value;
        if(inputAmount.trim().length === 0 || +inputAmount < 1 || +inputAmount > 10){
            setIsAmountValid(false);
            return;
        }

        props.onAddtoCart(+inputAmount);
    }

    return(
        <form className={styles.form} onSubmit={submitHandler}>
            <Input
                ref={amountInputRef}
                label={"Քանակը"}
                input={{
                    id: props.id,
                    type: 'number',
                    min: '1',
                    step: '1',
                    defaultValue: '1'
                }}
            />
            <button>ավելացնել</button>
            {!isAmountValid && <p>կարող եք ընտրել 1ից մինչև 10ը</p>}
        </form>
    )
}

export default MealItemForm