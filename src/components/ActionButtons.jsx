import { API_METHODS } from '../constants/apiMethods'

export function ActionButtons({ activeAction, disabled, onAction }) {
  return (
    <section className="panel card">
      <div className="panel-heading">
        <h2>Instance methods</h2>
        <p>Quick access to the two read-only instance endpoints.</p>
      </div>

      <div className="actions-grid">
        {API_METHODS.slice(0, 2).map((action) => {
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
