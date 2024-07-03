import styles from "@/styles/SlidingText.module.css";

const SlidingText = (props) => {
    const { text } = props;

    const words = text.split(" ");
    const spans = words.map((word, index) => (
        <span key={index}>{word}</span>
    ));

    return (
        <div className={styles.container}>
            <section className={styles.animation}>
                {spans.map((span, index) => (
                    <div key={index} className={styles[`slide-${index + 1}`]}>
                        <div>{span}</div>
                    </div>
                ))}
            </section>
        </div>
    );
};

export default SlidingText;