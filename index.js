// ✅ ملف index.js - السيرفر الوهمي للعبة PS3
const express = require('express');
const app = express();

// أي طلب GET من اللعبة سيتم الرد عليه بهذا النص
app.get('*', (req, res) => {
  console.log('📥 طلب من اللعبة:', req.url);
  res.send('✅ تم الاتصال بالسيرفر الوهمي بنجاح من PS3!');
});

// تشغيل السيرفر على المنفذ 3000 أو المنفذ المقدم من Railway
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`🚀 Fake PS3 Server يعمل على المنفذ ${port}`);
});
