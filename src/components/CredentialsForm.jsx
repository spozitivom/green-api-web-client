export function CredentialsForm({ credentials, disabled, onChange }) {
  return (
    <section className="panel card">
      <div className="panel-heading">
        <h2>Instance credentials</h2>
        <p>Use values from your GREEN-API developer account.</p>
      </div>

      <div className="form-grid">
        <label className="field">
          <span>idInstance</span>
          <input
            name="idInstance"
            type="text"
            placeholder="1101000001"
            value={credentials.idInstance}
            onChange={onChange}
            disabled={disabled}
            autoComplete="off"
          />
        </label>

        <label className="field">
          <span>apiTokenInstance</span>
          <input
            name="apiTokenInstance"
            type="password"
            placeholder="Enter your API token"
            value={credentials.apiTokenInstance}
            onChange={onChange}
            disabled={disabled}
            autoComplete="off"
          />
        </label>
      </div>
    </section>
  )
}
