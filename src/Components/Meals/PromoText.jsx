import styles from "./PromoText.module.css";
function PromoText() {

    return(
        <section className={styles['promo-text']}>
            <h2>Օնլայն Սուշի ռեստորան՝ <b>JapanFood</b></h2>
            <p>
                Սուշի պատրաստելը կարող է չափազանց բարդ չթվալ, բայց ճապոնական խոհանոցում ու մշակույթում սուշին համարվում է արվեստի ձև և պետք է պատրաստվի համապատասխան խիստ կանոնների։
            </p>
            <p>
                🧑‍🍳 Ճապոնիայում ավանդական սուշի-խոհարար դառնալու համար անհրաժեշտ է երկար տարիների աշխատանք, այն կարող է պահանջել 10-ից 15 տարի:
            </p>
        </section>
    )
}

export default PromoText;