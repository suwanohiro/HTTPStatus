# HTTP Status パッケージ

このパッケージは、さまざまな HTTP ステータスコードを表す静的プロパティを持つシンプルな JavaScript/TypeScript クラス `HTTPStatus` を提供します。

## インストール

npm でパッケージをインストールできます。

```
npm install swn-http-status
```

> [!TIP]
> TypeScript プロジェクトでは型定義ファイル（`.d.ts`）も自動的に利用されます。

## 使い方

### TypeScript の場合

```typescript
import HTTPStatus from "swn-http-status";

console.log(HTTPStatus.OK); // 200
console.log(HTTPStatus.NotFound); // 404
```

### JavaScript (ESModules) の場合

```javascript
// ES Modules
import HTTPStatus from "swn-http-status";

console.log(HTTPStatus.OK); // 200
console.log(HTTPStatus.NotFound); // 404
```

### JavaScript の場合 (CommonJS)

```javascript
// CommonJS
const HTTPStatus = require("swn-http-status");

console.log(HTTPStatus.default.OK); // 200
console.log(HTTPStatus.default.NotFound); // 404
```

> [!NOTE]
> CommonJS で利用する場合は `require("swn-http-status").default` のように `.default` を付けてアクセスしてください。

## HTTP ステータスコード一覧

`HTTPStatus` クラスには、以下のステータスコードが含まれています。

| コード | 名前                          | 説明                                                                                                              |
| -----: | :---------------------------- | :---------------------------------------------------------------------------------------------------------------- |
|    100 | Continue                      | サーバーはリクエストヘッダーを受信し、クライアントはリクエストを続行できます。                                    |
|    101 | SwitchingProtocols            | サーバーがプロトコルの切り替えを承認したことを示します。                                                          |
|    102 | Processing                    | WebDAV 拡張。リクエストの処理が継続中であることを示します。                                                       |
|    103 | EarlyHints                    | レスポンスヘッダーの早期通知に使用されます。                                                                      |
|    200 | OK                            | リクエストが正常に成功しました。                                                                                  |
|    201 | Created                       | 新しいリソースが作成されました。                                                                                  |
|    202 | Accepted                      | リクエストは受理されましたが、まだ処理されていません。                                                            |
|    203 | NonAuthoritativeInformation   | オリジンサーバー以外からの情報を返します。                                                                        |
|    204 | NoContent                     | レスポンスボディがありません。                                                                                    |
|    205 | ResetContent                  | クライアントはフォームなどをリセットする必要があります。                                                          |
|    206 | PartialContent                | 部分的なレスポンスを返します（範囲リクエスト）。                                                                  |
|    207 | MultiStatus                   | WebDAV 拡張。複数のステータスを返します。                                                                         |
|    208 | AlreadyReported               | WebDAV 拡張。すでに報告済みのリソースです。                                                                       |
|    226 | IMUsed                        | インスタントメッセージングで使用される拡張コードです。                                                            |
|    300 | MultipleChoices               | 複数の選択肢が存在します。                                                                                        |
|    301 | MovedPermanently              | リソースが恒久的に移動しました。                                                                                  |
|    302 | Found                         | リソースが一時的に移動しました。                                                                                  |
|    303 | SeeOther                      | 他の URI を参照してください。                                                                                     |
|    304 | NotModified                   | リソースは変更されていません。                                                                                    |
|    305 | UseProxy                      | プロキシを使用する必要があります。                                                                                |
|    307 | TemporaryRedirect             | 一時的にリダイレクトされます。                                                                                    |
|    308 | PermanentRedirect             | 恒久的にリダイレクトされます。                                                                                    |
|    400 | BadRequest                    | サーバーがリクエストを理解できません。不正な構文やパラメータの場合に返されます。                                  |
|    401 | Unauthorized                  | 認証が必要ですが、認証情報が提供されていないか無効です。                                                          |
|    402 | PaymentRequired               | 支払いが必要な場合に使用されます（現在は予約されています）。                                                      |
|    403 | Forbidden                     | サーバーがリクエストを理解したが、権限がないため拒否されました。                                                  |
|    404 | NotFound                      | サーバーは要求されたリソースを見つけることができません。ブラウザでは、これは URL が認識されないことを意味します。 |
|    405 | MethodNotAllowed              | リクエストメソッドがサポートされていません。                                                                      |
|    406 | NotAcceptable                 | リクエストしたリソースが Accept ヘッダーで許可されていません。                                                    |
|    407 | ProxyAuthenticationRequired   | プロキシ認証が必要です。                                                                                          |
|    408 | RequestTimeout                | サーバーがクライアントからのリクエストをタイムアウトしました。                                                    |
|    409 | Conflict                      | リクエストが現在のリソースの状態と競合しています。                                                                |
|    410 | Gone                          | リクエストされたリソースは恒久的に削除されました。                                                                |
|    411 | LengthRequired                | Content-Length ヘッダーが必要です。                                                                               |
|    412 | PreconditionFailed            | 前提条件が失敗しました。                                                                                          |
|    413 | PayloadTooLarge               | リクエストペイロードが大きすぎます。                                                                              |
|    414 | URITooLong                    | リクエスト URI が長すぎます。                                                                                     |
|    415 | UnsupportedMediaType          | サポートされていないメディアタイプです。                                                                          |
|    416 | RangeNotSatisfiable           | リクエストした範囲が満たせません。                                                                                |
|    417 | ExpectationFailed             | Expect ヘッダーで指定された期待値にサーバーが応えられません。                                                     |
|    418 | ImATeapot                     | エイプリルフールのジョークコードです。ティーポットはコーヒーを淹れられません。                                    |
|    421 | MisdirectedRequest            | リクエストが誤ったサーバーに送信されました。                                                                      |
|    422 | UnprocessableEntity           | リクエストは理解できたが処理できません（バリデーションエラー等）。                                                |
|    423 | Locked                        | リソースがロックされています。                                                                                    |
|    424 | FailedDependency              | 依存関係の失敗によりリクエストが失敗しました。                                                                    |
|    425 | TooEarly                      | リクエストが早すぎます。                                                                                          |
|    426 | UpgradeRequired               | プロトコルのアップグレードが必要です。                                                                            |
|    428 | PreconditionRequired          | 前提条件が必要です。                                                                                              |
|    429 | TooManyRequests               | リクエストが多すぎます（レートリミット）。                                                                        |
|    431 | RequestHeaderFieldsTooLarge   | リクエストヘッダーが大きすぎます。                                                                                |
|    451 | UnavailableForLegalReasons    | 法的理由により利用できません。                                                                                    |
|    500 | InternalServerError           | サーバー内部で予期しないエラーが発生しました。                                                                    |
|    501 | NotImplemented                | サーバーがリクエストされた機能を実装していません。                                                                |
|    502 | BadGateway                    | サーバーが不正なレスポンスを受け取りました。                                                                      |
|    503 | ServiceUnavailable            | サービスが一時的に利用できません。                                                                                |
|    504 | GatewayTimeout                | ゲートウェイまたはプロキシがタイムアウトしました。                                                                |
|    505 | HTTPVersionNotSupported       | サーバーがリクエストされた HTTP バージョンをサポートしていません。                                                |
|    506 | VariantAlsoNegotiates         | ネゴシエーションエラーが発生しました。                                                                            |
|    507 | InsufficientStorage           | サーバーのストレージ容量が不足しています。                                                                        |
|    508 | LoopDetected                  | サーバーが無限ループを検出しました。                                                                              |
|    510 | NotExtended                   | 拡張が必要です。                                                                                                  |
|    511 | NetworkAuthenticationRequired | ネットワーク認証が必要です。                                                                                      |

## 更新履歴

| バージョン |    日付    | 主な変更点                                                                                                                                                                                                                                            |
| :--------: | :--------: | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|   1.0.3    | 2025-05-23 | <ul><li>ESModule 対応関連の修正を行いました</li></ul>                                                                                                                                                                                                 |
|   1.0.2    | 2025-05-23 | <ul><li>ビルド成果物の配置と npm scripts を整理し、ESModule と CommonJS 両対応をより明確に</li><li><code>dist/src/</code> 配下に ESM・CJS 両方のエントリポイントを配置</li><li><code>package.json</code> の <code>exports</code> 設定を修正</li></ul> |
|   1.0.1    | 2025-05-22 | <ul><li>README の「使い方」で、ESModules と CommonJS の場合を分けて記載</li></ul>                                                                                                                                                                     |
|   1.0.0    | 2025-05-21 | <ul><li>初回リリース</li></ul>                                                                                                                                                                                                                        |

## ライセンス

このプロジェクトは MIT ライセンスの下で公開されています。詳細は LICENSE ファイルをご覧ください。
