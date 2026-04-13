const ACTIONS = [
  { id: 'getSettings', label: 'getSettings' },
  { id: 'getStateInstance', label: 'getStateInstance' },
  { id: 'sendMessage', label: 'sendMessage' },
  { id: 'sendFileByUrl', label: 'sendFileByUrl' },
]

export function ActionButtons({ activeAction, disabled, onAction }) {
  return (
    <section className="panel card">
      <div className="panel-heading">
        <h2>API methods</h2>
        <p>Each button sends a direct request to the selected GREEN-API method.</p>
      </div>

      <div className="actions-grid">
        {ACTIONS.map((action) => {
          const isLoading = activeAction === action.id

          return (
            <button
              key={action.id}
              type="button"
              className={`action-button ${isLoading ? 'is-loading' : ''}`}
              onClick={() => onAction(action.id)}
              disabled={disabled}
            >
              <span>{action.label}</span>
              <span className="button-state">
                {isLoading ? 'Loading...' : 'Run'}
              </span>
            </button>
          )
        })}
      </div>
    </section>
  )
}
