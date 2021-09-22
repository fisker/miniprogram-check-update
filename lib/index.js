function getGlobalThis() {
  if (typeof globalThis === 'object') {
    return globalThis
  }

  if (typeof window === 'object') {
    return window
  }

  // eslint-disable-next-line no-new-func
  return new Function('return this')()
}

function getRuntime() {
  const globalThis = getGlobalThis()
  for (const runtimeName of ['wx', 'tt', 'jd', 'qq', 'swan', 'my']) {
    const runtime = globalThis[runtimeName]
    if (runtime && typeof runtime.getSystemInfo === 'function') {
      return runtime
    }
  }
}

function checkUpdate(options) {
  let {runtime, onCheckForUpdate, onUpdateReady, onUpdateFailed} = {
    ...options,
  }

  if (!runtime) {
    runtime = getRuntime()
  }

  const updateManager = runtime.getUpdateManager()
  const install = () => updateManager.applyUpdate()

  if (onCheckForUpdate) {
    updateManager.onCheckForUpdate(function ({hasUpdate}) {
      if (!hasUpdate) {
        return
      }
      onCheckForUpdate()
    })
  }
  if (onUpdateFailed) {
    updateManager.onUpdateFailed(onUpdateFailed)
  }
  updateManager.onUpdateReady(function () {
    if (onUpdateReady) {
      onUpdateReady(install)
      return
    }

    runtime.showModal({
      content: '新版本已经准备好，是否重启应用？',
      success({confirm: confirmed}) {
        if (!confirmed) {
          return
        }

        install()
      },
    })
  })
}

export default checkUpdate
