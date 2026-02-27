const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;
const API_KEY = "duybao095";

app.use(cors());
app.use(express.json());


const videoList = [
    "https://image2url.com/r2/default/videos/1772112398939-158f2992-77c4-4325-bba0-d61f50885c5e.mp4",
    "https://image2url.com/r2/default/videos/1772112444544-fa82b7a5-0687-46bc-96d6-426b5f799358.mp4",
    "https://image2url.com/r2/default/videos/1772112476115-4adc1873-8102-4f2f-b277-96a92e5cf6ad.mp4",
    "https://image2url.com/r2/default/videos/1772112354000-7db06e1c-2bed-420f-ac20-70acafb498fd.mp4",
    "https://image2url.com/r2/default/videos/1772112307594-ec64c16c-7fdf-45ff-819a-0d5385d2abe2.mp4",
    "https://image2url.com/r2/default/videos/1772158031146-66803120-331d-42c3-a32d-833bd64e051a.mp4",
    "https://image2url.com/r2/default/videos/1772158064245-d1684c30-fa78-41cf-aed5-81416aea401f.mp4",
    "https://image2url.com/r2/default/videos/1772158089052-2391f896-d5c8-4549-baa2-7480f29837f5.mp4"
];

/* =========================
   TRANG CHỦ
========================= */

app.get("/", (req, res) => {
    res.send("API Random Video Chill - By Duy Bảo");
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
