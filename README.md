# コロナ感染者数をチャートで表示させる

## 環境
npm
python

## セットアップ
※ディレクトリに移動後
```
npm install
```
package.jsonのライブラリがインストールされる
`express`と`body-parser`

### express
Node.jsの軽量APIライブラリ

### body-parser
レスポンスデータをJsonに変換してくれるらしい
（よしなに）

## APIサーバー起動
```
node api.js
```
以下の表示になれば起動されている
```
istening at port 3000
```
## Webサーバー起動
今回はPythonを使って簡単にWebサーバーを立ち上げる
```
python -m SimpleHTTPServer
```

ブラウザを立ち上げて`localhost:8000`にアクセスするとチャートが表示される

