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

### 参考記事
Cors周り
https://qiita.com/chenglin/items/5e563e50d1c32dadf4c3

Python 軽量Webサーバー
https://ja.stackoverflow.com/questions/36773/%E6%89%8B%E5%85%83%E3%81%AE-html-%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB%E3%82%92%E3%83%96%E3%83%A9%E3%82%A6%E3%82%B6%E3%81%A7%E3%83%9B%E3%82%B9%E3%83%88%E5%90%8D-localhost-%E3%81%A7%E9%96%B2%E8%A6%A7%E3%81%99%E3%82%8B%E6%96%B9%E6%B3%95



