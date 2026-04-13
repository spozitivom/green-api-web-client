import { useState } from 'react'
import {
  getSettings,
  getStateInstance,
  sendFileByUrl,
  sendMessage,
} from './api/greenApi'
import { ActionButtons } from './components/ActionButtons'
import { CredentialsForm } from './components/CredentialsForm'
import { FileForm } from './components/FileForm'
import { MessageForm } from './components/MessageForm'
import { ResponsePanel } from './components/ResponsePanel'
import { buildValidationMessage } from './utils/validation'
import './styles/app.css'
import './styles/forms.css'
import './styles/buttons.css'

const INITIAL_FORM = {
  idInstance: '',
  apiTokenInstance: '',
  chatId: '',
  message: '',
  fileUrl: '',
  fileName: '',
}

function App() {
  const [form, setForm] = useState(INITIAL_FORM)
  const [responseText, setResponseText] = useState(
    'Responses from GREEN-API methods will appear here.',
  )
  const [error, setError] = useState('')
  const [loadingAction, setLoadingAction] = useState('')

  const handleFieldChange = (event) => {
    const { name, value } = event.target
    setForm((current) => ({
      ...current,
      [name]: value,
    }))
  }

  const handleAction = async (action) => {
    const validationMessage = buildValidationMessage(action, form)

    if (validationMessage) {
      setError(validationMessage)
      return
    }

    setLoadingAction(action)
    setError('')

    try {
      let data

      switch (action) {
        case 'getSettings':
          data = await getSettings(form.idInstance, form.apiTokenInstance)
          break
        case 'getStateInstance':
          data = await getStateInstance(form.idInstance, form.apiTokenInstance)
          break
        case 'sendMessage':
          data = await sendMessage(form.idInstance, form.apiTokenInstance, {
            chatId: form.chatId.trim(),
            message: form.message.trim(),
          })
          break
        case 'sendFileByUrl':
          data = await sendFileByUrl(form.idInstance, form.apiTokenInstance, {
            chatId: form.chatId.trim(),
            urlFile: form.fileUrl.trim(),
            fileName: form.fileName.trim(),
          })
          break
        default:
          throw new Error(`Unsupported action: ${action}`)
      }

      setResponseText(JSON.stringify(data, null, 2))
    } catch (requestError) {
      const message =
        requestError instanceof Error
          ? requestError.message
          : 'Unknown error while calling GREEN-API.'

      setError(message)
      setResponseText(
        JSON.stringify(
          {
            action,
            error: message,
          },
          null,
          2,
        ),
      )
    } finally {
      setLoadingAction('')
    }
  }

  return (
    <main className="app-shell">
      <section className="hero-panel">
        <div className="hero-copy">
          <span className="eyebrow">GREEN-API Web Client</span>
          <h1>Manage your instance from a clean React + Vite interface</h1>
          <p>
            Enter instance credentials, call GREEN-API methods, inspect raw
            responses, and verify message delivery from a single page.
          </p>
        </div>
        <div className="hero-note">
          <strong>Supported methods</strong>
          <ul>
            <li>getSettings</li>
            <li>getStateInstance</li>
            <li>sendMessage</li>
            <li>sendFileByUrl</li>
          </ul>
        </div>
      </section>

      <section className="workspace-grid">
        <div className="workspace-column">
          <CredentialsForm
            credentials={form}
            disabled={Boolean(loadingAction)}
            onChange={handleFieldChange}
          />
          <ActionButtons
            activeAction={loadingAction}
            disabled={Boolean(loadingAction)}
            onAction={handleAction}
          />
          <MessageForm
            values={form}
            disabled={Boolean(loadingAction)}
            onChange={handleFieldChange}
          />
          <FileForm
            values={form}
            disabled={Boolean(loadingAction)}
            onChange={handleFieldChange}
          />
        </div>

        <ResponsePanel error={error} responseText={responseText} />
      </section>
    </main>
  )
}

export default App
