export function FileForm({
  values,
  disabled,
  onChange,
  activeAction,
  onAction,
}) {
  const isLoading = activeAction === 'sendFileByUrl'

  return (
    <section className="panel card">
      <div className="panel-heading">
        <h2>File payload</h2>
        <p>Use a public file URL and the final file name for sendFileByUrl.</p>
      </div>

      <div className="form-grid">
        <label className="field field-wide">
          <span>fileUrl</span>
          <input
            name="fileUrl"
            type="url"
            placeholder="https://example.com/document.pdf"
            value={values.fileUrl}
            onChange={onChange}
            disabled={disabled}
            autoComplete="off"
          />
        </label>

        <label className="field field-wide">
          <span>fileName</span>
          <input
            name="fileName"
            type="text"
            placeholder="document.pdf"
            value={values.fileName}
            onChange={onChange}
            disabled={disabled}
            autoComplete="off"
          />
        </label>
      </div>

      <button
        type="button"
        className={`action-button action-button-wide ${isLoading ? 'is-loading' : ''}`}
        onClick={() => onAction('sendFileByUrl')}
        disabled={disabled}
      >
        <span>sendFileByUrl</span>
        <span className="button-state">{isLoading ? 'Loading...' : 'Run'}</span>
      </button>
    </section>
  )
}
