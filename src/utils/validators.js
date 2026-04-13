const isBlank = (value) => !value || !value.trim()

export const validateFields = (action, form) => {
  if (isBlank(form.idInstance) || isBlank(form.apiTokenInstance)) {
    return 'Fill in idInstance and apiTokenInstance before calling GREEN-API.'
  }

  if (action === 'sendMessage') {
    if (isBlank(form.chatId) || isBlank(form.message)) {
      return 'sendMessage requires both chatId and message.'
    }
  }

  if (action === 'sendFileByUrl') {
    if (isBlank(form.chatId) || isBlank(form.fileUrl) || isBlank(form.fileName)) {
      return 'sendFileByUrl requires chatId, fileUrl, and fileName.'
    }
  }

  return ''
}
