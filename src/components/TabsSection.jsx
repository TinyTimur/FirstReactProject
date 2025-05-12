
import Button from "./Button/button"

export default function TabsSection({active, onChange, activeButton}) {

    return (
        <section>
            <Button className={activeButton === "main" ? "active" : ""} isActive={active === 'main'} onClick={() => onChange('main')}>Главное</Button>
            <Button className={activeButton === "feedback" ? "active" : ""} isActive={active === 'feedback'}  onClick={() => onChange('feedback')}>Обратная связь</Button>
        </section>
    )
}