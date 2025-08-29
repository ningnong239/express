// นำเข้า express
const express = require("express");
const app = express();

// กำหนด port
const port = 3000;

// สร้าง endpoint GET /profile
app.get("/profile", (req, res) => {
  res.status(200).json({
    data: {
      name: "john",
      age: 20,
    },
  });
});

// ให้ server รันบน port ที่กำหนด
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
