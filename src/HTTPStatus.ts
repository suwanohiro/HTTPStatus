class HTTPStatus {
    /**
     * @brief 100 Continue
     * @details サーバーはリクエストヘッダーを受信し、クライアントはリクエストを続行できます。
     */
    static get Continue(): number { return 100; }
    /**
     * @brief 101 Switching Protocols
     * @details サーバーがプロトコルの切り替えを承認したことを示します。
     */
    static get SwitchingProtocols(): number { return 101; }
    /**
     * @brief 102 Processing
     * @details WebDAV拡張。リクエストの処理が継続中であることを示します。
     */
    static get Processing(): number { return 102; }
    /**
     * @brief 103 Early Hints
     * @details レスポンスヘッダーの早期通知に使用されます。
     */
    static get EarlyHints(): number { return 103; }

    /**
     * @brief 200 OK
     * @details リクエストが正常に成功しました。
     */
    static get OK(): number { return 200; }
    /**
     * @brief 201 Created
     * @details 新しいリソースが作成されました。
     */
    static get Created(): number { return 201; }
    /**
     * @brief 202 Accepted
     * @details リクエストは受理されましたが、まだ処理されていません。
     */
    static get Accepted(): number { return 202; }
    /**
     * @brief 203 Non-Authoritative Information
     * @details オリジンサーバー以外からの情報を返します。
     */
    static get NonAuthoritativeInformation(): number { return 203; }
    /**
     * @brief 204 No Content
     * @details レスポンスボディがありません。
     */
    static get NoContent(): number { return 204; }
    /**
     * @brief 205 Reset Content
     * @details クライアントはフォームなどをリセットする必要があります。
     */
    static get ResetContent(): number { return 205; }
    /**
     * @brief 206 Partial Content
     * @details 部分的なレスポンスを返します（範囲リクエスト）。
     */
    static get PartialContent(): number { return 206; }
    /**
     * @brief 207 Multi-Status
     * @details WebDAV拡張。複数のステータスを返します。
     */
    static get MultiStatus(): number { return 207; }
    /**
     * @brief 208 Already Reported
     * @details WebDAV拡張。すでに報告済みのリソースです。
     */
    static get AlreadyReported(): number { return 208; }
    /**
     * @brief 226 IM Used
     * @details インスタントメッセージングで使用される拡張コードです。
     */
    static get IMUsed(): number { return 226; }

    /**
     * @brief 300 Multiple Choices
     * @details 複数の選択肢が存在します。
     */
    static get MultipleChoices(): number { return 300; }
    /**
     * @brief 301 Moved Permanently
     * @details リソースが恒久的に移動しました。
     */
    static get MovedPermanently(): number { return 301; }
    /**
     * @brief 302 Found
     * @details リソースが一時的に移動しました。
     */
    static get Found(): number { return 302; }
    /**
     * @brief 303 See Other
     * @details 他のURIを参照してください。
     */
    static get SeeOther(): number { return 303; }
    /**
     * @brief 304 Not Modified
     * @details リソースは変更されていません。
     */
    static get NotModified(): number { return 304; }
    /**
     * @brief 305 Use Proxy
     * @details プロキシを使用する必要があります。
     */
    static get UseProxy(): number { return 305; }
    /**
     * @brief 307 Temporary Redirect
     * @details 一時的にリダイレクトされます。
     */
    static get TemporaryRedirect(): number { return 307; }
    /**
     * @brief 308 Permanent Redirect
     * @details 恒久的にリダイレクトされます。
     */
    static get PermanentRedirect(): number { return 308; }

    /**
     * @brief 400 Bad Request
     * @details サーバーがリクエストを理解できません。不正な構文やパラメータの場合に返されます。
     */
    static get BadRequest(): number { return 400; }
    /**
     * @brief 401 Unauthorized
     * @details 認証が必要ですが、認証情報が提供されていないか無効です。
     */
    static get Unauthorized(): number { return 401; }
    /**
     * @brief 402 Payment Required
     * @details 支払いが必要な場合に使用されます（現在は予約されています）。
     */
    static get PaymentRequired(): number { return 402; }
    /**
     * @brief 403 Forbidden
     * @details サーバーがリクエストを理解したが、権限がないため拒否されました。
     */
    static get Forbidden(): number { return 403; }
    /**
     * @brief 404 Not Found
     * @details サーバーは要求されたリソースを見つけることができません。ブラウザでは、これはURLが認識されないことを意味します。
     */
    static get NotFound(): number { return 404; }
    /**
     * @brief 405 Method Not Allowed
     * @details リクエストメソッドがサポートされていません。
     */
    static get MethodNotAllowed(): number { return 405; }
    /**
     * @brief 406 Not Acceptable
     * @details リクエストしたリソースがAcceptヘッダーで許可されていません。
     */
    static get NotAcceptable(): number { return 406; }
    /**
     * @brief 407 Proxy Authentication Required
     * @details プロキシ認証が必要です。
     */
    static get ProxyAuthenticationRequired(): number { return 407; }
    /**
     * @brief 408 Request Timeout
     * @details サーバーがクライアントからのリクエストをタイムアウトしました。
     */
    static get RequestTimeout(): number { return 408; }
    /**
     * @brief 409 Conflict
     * @details リクエストが現在のリソースの状態と競合しています。
     */
    static get Conflict(): number { return 409; }
    /**
     * @brief 410 Gone
     * @details リクエストされたリソースは恒久的に削除されました。
     */
    static get Gone(): number { return 410; }
    /**
     * @brief 411 Length Required
     * @details Content-Lengthヘッダーが必要です。
     */
    static get LengthRequired(): number { return 411; }
    /**
     * @brief 412 Precondition Failed
     * @details 前提条件が失敗しました。
     */
    static get PreconditionFailed(): number { return 412; }
    /**
     * @brief 413 Payload Too Large
     * @details リクエストペイロードが大きすぎます。
     */
    static get PayloadTooLarge(): number { return 413; }
    /**
     * @brief 414 URI Too Long
     * @details リクエストURIが長すぎます。
     */
    static get URITooLong(): number { return 414; }
    /**
     * @brief 415 Unsupported Media Type
     * @details サポートされていないメディアタイプです。
     */
    static get UnsupportedMediaType(): number { return 415; }
    /**
     * @brief 416 Range Not Satisfiable
     * @details リクエストした範囲が満たせません。
     */
    static get RangeNotSatisfiable(): number { return 416; }
    /**
     * @brief 417 Expectation Failed
     * @details Expectヘッダーで指定された期待値にサーバーが応えられません。
     */
    static get ExpectationFailed(): number { return 417; }
    /**
     * @brief 418 I'm a teapot
     * @details エイプリルフールのジョークコードです。ティーポットはコーヒーを淹れられません。
     */
    static get ImATeapot(): number { return 418; }
    /**
     * @brief 421 Misdirected Request
     * @details リクエストが誤ったサーバーに送信されました。
     */
    static get MisdirectedRequest(): number { return 421; }
    /**
     * @brief 422 Unprocessable Entity
     * @details リクエストは理解できたが処理できません（バリデーションエラー等）。
     */
    static get UnprocessableEntity(): number { return 422; }
    /**
     * @brief 423 Locked
     * @details リソースがロックされています。
     */
    static get Locked(): number { return 423; }
    /**
     * @brief 424 Failed Dependency
     * @details 依存関係の失敗によりリクエストが失敗しました。
     */
    static get FailedDependency(): number { return 424; }
    /**
     * @brief 425 Too Early
     * @details リクエストが早すぎます。
     */
    static get TooEarly(): number { return 425; }
    /**
     * @brief 426 Upgrade Required
     * @details プロトコルのアップグレードが必要です。
     */
    static get UpgradeRequired(): number { return 426; }
    /**
     * @brief 428 Precondition Required
     * @details 前提条件が必要です。
     */
    static get PreconditionRequired(): number { return 428; }
    /**
     * @brief 429 Too Many Requests
     * @details リクエストが多すぎます（レートリミット）。
     */
    static get TooManyRequests(): number { return 429; }
    /**
     * @brief 431 Request Header Fields Too Large
     * @details リクエストヘッダーが大きすぎます。
     */
    static get RequestHeaderFieldsTooLarge(): number { return 431; }
    /**
     * @brief 451 Unavailable For Legal Reasons
     * @details 法的理由により利用できません。
     */
    static get UnavailableForLegalReasons(): number { return 451; }

    /**
     * @brief 500 Internal Server Error
     * @details サーバー内部で予期しないエラーが発生しました。
     */
    static get InternalServerError(): number { return 500; }
    /**
     * @brief 501 Not Implemented
     * @details サーバーがリクエストされた機能を実装していません。
     */
    static get NotImplemented(): number { return 501; }
    /**
     * @brief 502 Bad Gateway
     * @details サーバーが不正なレスポンスを受け取りました。
     */
    static get BadGateway(): number { return 502; }
    /**
     * @brief 503 Service Unavailable
     * @details サービスが一時的に利用できません。
     */
    static get ServiceUnavailable(): number { return 503; }
    /**
     * @brief 504 Gateway Timeout
     * @details ゲートウェイまたはプロキシがタイムアウトしました。
     */
    static get GatewayTimeout(): number { return 504; }
    /**
     * @brief 505 HTTP Version Not Supported
     * @details サーバーがリクエストされたHTTPバージョンをサポートしていません。
     */
    static get HTTPVersionNotSupported(): number { return 505; }
    /**
     * @brief 506 Variant Also Negotiates
     * @details ネゴシエーションエラーが発生しました。
     */
    static get VariantAlsoNegotiates(): number { return 506; }
    /**
     * @brief 507 Insufficient Storage
     * @details サーバーのストレージ容量が不足しています。
     */
    static get InsufficientStorage(): number { return 507; }
    /**
     * @brief 508 Loop Detected
     * @details サーバーが無限ループを検出しました。
     */
    static get LoopDetected(): number { return 508; }
    /**
     * @brief 510 Not Extended
     * @details 拡張が必要です。
     */
    static get NotExtended(): number { return 510; }
    /**
     * @brief 511 Network Authentication Required
     * @details ネットワーク認証が必要です。
     */
    static get NetworkAuthenticationRequired(): number { return 511; }
}

export default HTTPStatus;

// CommonJS対応
// @ts-ignore: node.js互換性のCommonJSエクスポートを許可します
if (typeof module !== "undefined" && typeof module.exports !== "undefined") {
    // @ts-ignore: node.js互換性のCommonJSエクスポートを許可します
    module.exports = HTTPStatus;
}