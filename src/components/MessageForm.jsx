export function MessageForm({ values, disabled, onChange }) {
  return (
    <section className="panel card">
      <div className="panel-heading">
        <h2>Message payload</h2>
        <p>Required for both send methods. Use a WhatsApp chat identifier.</p>
      </div>

      <div className="form-grid">
        <label className="field field-wide">
          <span>chatId</span>
          <input
            name="chatId"
            type="text"
            placeholder="79999999999@c.us"
            value={values.chatId}
            onChange={onChange}
            disabled={disabled}
            autoComplete="off"
          />
        </label>

        <label className="field field-wide">
          <span>message</span>
          <textarea
            name="message"
            placeholder="Type the message for sendMessage..."
            value={values.message}
            onChange={onChange}
            disabled={disabled}
            rows="5"
          />
        </label>
      </div>
    </section>
  )
}
