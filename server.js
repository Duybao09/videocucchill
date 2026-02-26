const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;
const API_KEY = "htrang245";

app.use(cors());
app.use(express.json());

/* =========================
   DANH SÁCH VIDEO MP4
   👉 DÁN LINK CỦA BẠN Ở ĐÂY
========================= */

const videoList = [
    "https://example.com/chill1.mp4",
    "https://example.com/chill2.mp4",
    "https://example.com/chill3.mp4"
];

/* =========================
   TRANG CHỦ
========================= */

app.get("/", (req, res) => {
    res.send("🔥 API Random Video Chill - By Duy Bảo 🔥");
});

/* =========================
   API RANDOM VIDEO
========================= */

app.get("/api/chill", (req, res) => {

    if (req.query.apikey !== API_KEY) {
        return res.status(403).json({
            status: false,
            message: "Sai API key"
        });
    }

    if (videoList.length === 0) {
        return res.json({
            status: false,
            message: "Chưa có video trong list"
        });
    }

    const randomVideo = videoList[Math.floor(Math.random() * videoList.length)];

    res.json({
        status: true,
        author: "API BY DUYBAO",
        total_video: videoList.length,
        video: randomVideo
    });
});

/* ========================= */

app.listen(PORT, "0.0.0.0", () => {
    console.log("Server chạy tại port", PORT);
});
