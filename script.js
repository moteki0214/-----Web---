const header = document.getElementById("header");
const footer = document.getElementById("footer")

header.innerHTML =`
    <h1>おおたウィンドオーケストラ</h1>
    <ul class="header-menu">
        <li><a href="index_1_home.html">ホーム</a></li>
        <li><a href="index_2_history.html">沿革</a></li>
        <li><a href="index_3_schedule.html">スケジュール</a></li>
        <li><a href="index_4_info.html">お問い合わせ</a></li>
    </ul>
`;

footer.innerHTML=`
    <p>&copy; 2024 example.com</p>
`;