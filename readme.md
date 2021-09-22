# mini-program-check-update

## Installation

Get latest commit hash from [the repository](http://221.130.48.66:30013/zhang.haifeng/mini-program-check-update/-/commits/master)

```bash
yarn add mini-program-check-update@http://221.130.48.66:30013/zhang.haifeng/mini-program-check-update.git#THE_LATEST_COMMIT_HASH_HERE
```

## Usage

### Auto mode (recommended)

```js
import 'mini-program-check-update/auto'
```

### Manually call the update

```js
import checkUpdate from 'mini-program-check-update'

checkUpdate()
```

## `checkUpdate(options?)`

### Options

#### `runtime`

Object with `getUpdateManager()` method, `wx`, `tt`, or `Taro`, etc

```js
checkUpdate({runtime: wx})
```

#### `onCheckForUpdate`

Callback function when new version found.

#### `onUpdateFailed`

Callback function when install failed.

#### `onUpdateReady(install)`

Callback function when new version is ready to install.

```js
checkUpdate({
  async onUpdateReady(install) {
    const confirmed = await confirm('新版本已经准备好，是否重启应用？')

    if (confirmed) {
      console.log('Start install.')
      install()
    } else {
      console.log('Rejected to install.')
    }
  },
})
```
