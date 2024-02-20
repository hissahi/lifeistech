   // フォームの送信イベントを処理
        document.getElementById('postForm').addEventListener('submit', function (e) {
            e.preventDefault();

            // フォームから投稿内容を取得
        const postContent = document.getElementById('postContent').value;

        document.getElementById('postContent').value = ''; // フォームをクリア

        // データをサーバーに送信して追加
        fetch('/system/php/add.php', {
            method: 'POST',
        body: JSON.stringify({ postContent }),
        headers: {
            'Content-Type': 'application/json'
            }
        })
       .then(response => response.json())
        .then(data => {
            if (data.success) {
                fetchDataAndDisplay(); // データを再読み込みして表示
                clearForm(); // フォームをクリア
            } else {
                alert('エラー: 投稿に失敗しました。時間をおいて再投稿してください。');
            }
        });
    });