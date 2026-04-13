export function ResponsePanel({ error, responseText }) {
  return (
    <aside className="panel card response-panel">
      <div className="panel-heading">
        <h2>API response</h2>
        <p>Raw JSON is shown below in read-only mode.</p>
      </div>

      {error ? <div className="status-banner error-banner">{error}</div> : null}

      <label className="field field-wide">
        <span>Response body</span>
        <textarea
          className="response-textarea"
          value={responseText}
          readOnly
          rows="24"
        />
      </label>
    </aside>
  )
}
