function getRuntime() {
  for (const runtimeName of ['wx', 'tt', 'jd', 'qq', 'swan', 'my']) {
    const runtime = globalThis[runtimeName]
    if (typeof runtime?.getUpdateManager === 'function') {
      return runtime
    }
  }
}

function checkUpdate(options) {
  const {
    runtime = getRuntime(),
    onCheckForUpdate,
    onUpdateReady,
    onUpdateFailed,
  } = {
    ...options,
  }

  const updateManager = runtime.getUpdateManager()
  const install = () => {
    updateManager.applyUpdate()
  }

  if (onCheckForUpdate) {
    updateManager.onCheckForUpdate(({hasUpdate}) => {
      if (!hasUpdate) {
        return
      }

      onCheckForUpdate()
    })
  }

  if (onUpdateFailed) {
    updateManager.onUpdateFailed(onUpdateFailed)
  }

  updateManager.onUpdateReady(() => {
    if (onUpdateReady) {
      onUpdateReady(install)
      return
    }

    runtime.showModal({
      title: '更新提示',
      content: '新版本已经准备好，是否重启应用？',
      confirmText: '重启',
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
