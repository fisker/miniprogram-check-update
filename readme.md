# mini-program-check-update

## Installation

```bash
yarn add miniprogram-check-update
```

## Usage

### Auto mode (recommended)

```js
import 'miniprogram-check-update/auto'
```

### Manually call the update

```js
import checkUpdate from 'miniprogram-check-update'

checkUpdate()
```

## `checkUpdate(options?)`

### Options

#### `runtime`

Object with `getUpdateManager()` method, `wx`, `tt`, `Taro`, `uni`, etc

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
