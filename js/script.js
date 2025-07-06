      // DOMが読み込まれた後にJSONファイルを読み込んでpropsに設定
      document.addEventListener('DOMContentLoaded', async function () {
        try {
          // 両方のJSONファイルを並行して読み込み
          const [partsResponse, pageResponse] = await Promise.all([
            fetch('/sample-default-parts.json'),
            fetch('/sample-page.json'),
          ])

          const partsData = await partsResponse.json()
          const pageData = await pageResponse.json()

          // main-editorに両方のプロパティを設定
          const mainEditor = document.getElementById('main-editor')
          if (mainEditor) {
            mainEditor.parts = partsData
            mainEditor.page = pageData
            console.log('sample-default-parts.jsonを読み込みました:', partsData)
            console.log('sample-page.jsonを読み込みました:', pageData)
            console.log('両方のデータをmain-editorに設定しました')
          }
        } catch (error) {
          console.error('JSONファイルの読み込みに失敗しました:', error)
        }

        // Vueコンポーネントからのカスタムイベントをリッスン
        document.addEventListener('dataFromVue', function (event) {
          console.log('dataFromVueイベントを受信しました')
          console.log('event:', event)
          console.log('event.detail:', event.detail)

          // データを表示するための処理
          displayReceivedData(event.detail)
        })
      })

      // 受信したデータを表示する関数
      function displayReceivedData(data) {
        // 既存の表示エリアがあれば削除
        const existingDisplay = document.getElementById('received-data-display')
        if (existingDisplay) {
          existingDisplay.remove()
        }

        // 新しい表示エリアを作成
        const displayDiv = document.createElement('div')
        displayDiv.id = 'received-data-display'
        displayDiv.style.cssText = `
          margin: 20px 0;
          padding: 15px;
          border: 2px solid #28a745;
          border-radius: 8px;
          background: #d4edda;
          font-family: monospace;
          white-space: pre-wrap;
        `

        // HTMLエスケープ関数を追加
        function escapeHtml(str) {
          if (typeof str !== 'string') return str
          return str
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;')
        }

        // データ内のエスケープ文字を再帰的に処理する関数
        function processEscapedData(obj) {
          if (typeof obj === 'string') {
            return obj
          } else if (Array.isArray(obj)) {
            return obj.map(item => processEscapedData(item))
          } else if (obj && typeof obj === 'object') {
            const processed = {}
            for (const [key, value] of Object.entries(obj)) {
              processed[key] = processEscapedData(value)
            }
            return processed
          }
          return obj
        }

        // データ内のエスケープ文字を処理
        const processedData = processEscapedData(data.data)
        // JSON文字列をHTMLエスケープ
        const jsonStr = JSON.stringify(processedData, null, 2)
        const escapedJson = escapeHtml(jsonStr)

        displayDiv.innerHTML = `
          <h4 style="margin: 0 0 10px 0; color: #155724;">Vueから受信したデータ:</h4>
          <div style="background: white; padding: 10px; border-radius: 4px; overflow-x: auto;">
            <strong>データタイプ:</strong> ${data.type}<br>
            <strong>タイムスタンプ:</strong> ${data.timestamp}<br>
            <strong>カウント:</strong> ${data.count}<br>
            <strong>データ内容:</strong><br>
            <pre style="margin: 5px 0 0 0;">${escapedJson}</pre>
          </div>
        `

        // 最初のdemo-sectionの後に挿入
        const firstSection = document.querySelector('.demo-section')
        if (firstSection) {
          firstSection.parentNode.insertBefore(displayDiv, firstSection.nextSibling)
        }
      }