import { useState } from "react";
import Button from "../Button/button";

export default function FeedBackSection() {
  const [name, setName] = useState("");
  const [reason, setReason] = useState();
  const [hasError, setHasError] = useState(false)



  function handleNameChange(event) {
    setName(event.target.value);
    setHasError(event.target.value.trim().length === 0)
  }
  function handleReasonChange(event) {
    setReason(event.target.value);
  }

  function toggleError() {
    setHasError((prev) => !prev)
  }



  return (
    <section style={{ marginTop: "1rem" }}>
      <h3>Обратная связь</h3>
      <Button onClick={toggleError}>ToggleErorr</Button>
      <form className="form">
        <label htmlFor="login">Ваше имя:</label>
        <input
          className="control"
          type="text"
          name="login"
          id="login"
          required
          value={name}
          onChange={handleNameChange}
          style={{
            border: !hasError ? null : '1px solid red'
          }}
        />
        <label htmlFor="reason">Причина обращения:</label>
        <select
          className="control"
          name="reason"
          id="reason"
          required
          onChange={handleReasonChange}
        >
          <option defaultValue="Не выбрано" disabled selected></option>
          <option value="error">Ошибка</option>
          <option value="help">Помощь</option>
          <option value="suggest">Предложение</option>
        </select>
        <pre>
          name: {name}
          <br />
          reason: {reason}
        </pre>

        <Button className={!hasError ? '' : 'disabled'} disabled={hasError}>Отправить</Button>
      </form>
    </section>
  );
}
