### 📌구글 트렌드 크롤링 (RSS 웹 크롤링)

#### 💡 실행 방법
```
npm i
npm run dev
```

#### 💡 ejs url
```
http://localhost:3000/trends
```

#### 💡 사용 API
```
https://trends.google.co.kr/trends/trendingsearches/daily?geo=KR&hl=ko
위 사이트의 rss 사용
```

#### 💡 퍼가기 (실시간 데이터)
```
<script type="text/javascript" src="https://ssl.gstatic.com/trends_nrtr/3523_RC02/embed_loader.js"></script> <script type="text/javascript"> trends.embed.renderWidget("dailytrends", "", {"geo":"KR","guestPath":"https://trends.google.co.kr:443/trends/embed/"}); </script>
```

##### 💬 rss-parser (RSS 피드를 파싱하여 JavaScript 객체로 변환해주는 기능을 제공)
```
npm install rss-parser
```

