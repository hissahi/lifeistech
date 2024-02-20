// ページ読み込み時にデータを取得して表示
document.addEventListener('DOMContentLoaded', function () {
    fetchDataAndDisplay();

    // fetchDataAndDisplay()関数を定期的に実行
    setInterval(fetchDataAndDisplay, 250);
});

function fetchDataAndDisplay() {
    // データを取得して表に表示
    fetch('get_app')
        .then(response => response.json())
        .then(data => {
            const postTable = document.getElementById('postTable');
            postTable.innerHTML = ''; // 表をクリア

            // データを逆順で表示
            for (let i = data.length - 1; i >= 0; i--) {
                const post = data[i];
                const row = document.createElement('tr');

                row.innerHTML = `
                    <td style="font-family: sans-serif;">
                        <button onclick="redirectToThread('${post.thread_id}', '${post.post}')" class="button">
                        <font color="#555" size="1px">${post.time} <br>
                        <font color="#000" size="4px">${post.post}
                        </button>
                    </td>
                `;
                postTable.appendChild(row);
            }
        });
}

function redirectToThread(threadId, username) {
    const url = `http://lifeistech.starfree.jp/thread/?thread=${threadId}&name=${encodeURIComponent(username)}`;
    window.location.href = url;
}