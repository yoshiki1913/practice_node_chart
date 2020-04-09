// リクエストオジェクト呼び出し
let xhr = new XMLHttpRequest();

// apiリクエスト
xhr.open('GET', 'http://localhost:3000/list')
xhr.send()

// 受け取り処理
xhr.onreadystatechange = function() {
    // 通信成功時
    if (xhr.readyState == 4 && xhr.status == 200) {
        // レスポンスデータパース
        let response = JSON.parse(xhr.responseText)

        // データ整形
        let labelList = []
        let positiveList = []
        for (let index in response) {
            // labelListに格納
            let date = dateFormat(response[index].date)
            labelList.push(date)
            // positiveListに格納
            positiveList.push(response[index].positive_count)
        }
        // 線グラフ生成関数呼び出し
        setLineChart(labelList, positiveList)
    }
}

// 線グラフ生成
function setLineChart(labelList, positiveList) {
    let line = document.getElementById('line').getContext('2d');
    let lineChart = new Chart(line, {
        type: 'line',
        data: {
            // 引数labelListを設定
            labels: labelList,
            datasets: [
                {
                    label: '感染者数',
                    backgroundColor: 'rgb(255, 99, 132)',
                    borderColor: 'rgb(255, 99, 132)',
                    // 引数positiveListを設定
                    data: positiveList,
                },
            ],
        },
        options: {
            title: {
            display: true,
            text: '東京都？コロナ感染者数'
        }}
    });
}

// 日付フォーマット
function dateFormat(date) {
    var today = new Date(date);
    // var year = today.getFullYear();
    var month = today.getMonth() + 1;
    var day = today.getDate();
    return /*year + '年' + */month + '月' + day + '日'
}