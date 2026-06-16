# Bé Đoán Con Vật - Magic Egg Pro

## Nâng cấp trong bản này
- Thay túi mù bằng trứng thần kỳ.
- Trứng rung, nứt dần, ló mắt/con vật.
- Đoán đúng: pháo hoa + âm thanh chiến thắng.
- Đoán sai: hiệu ứng bom sắp nổ + âm thanh bom.
- Sau khi đoán đúng: hiện video 5 giây.
- Có fallback bằng icon động vật nếu chưa gắn link video MP4.
- Vuốt lên/xuống kiểu TikTok.
- 100 con vật.
- HTML tĩnh, deploy Vercel không cần build.
- Không dùng service worker để tránh lỗi cache F5.

## Cách thêm video con vật thật

Trong `app.js`, mỗi con vật có trường:

```js
videoUrl: ""
```

Thay bằng link MP4 thật, ví dụ:

```js
videoUrl: "https://your-domain.com/videos/cat.mp4"
```

Khuyến nghị:
- Dùng file `.mp4`.
- Video dài 5–10 giây.
- Đặt video trong thư mục `/videos` khi deploy, hoặc dùng CDN.
- Nếu dùng Google Drive, cần link trực tiếp phát được bằng thẻ `<video>`, không phải link xem thông thường.

## Deploy Vercel
Kéo thả thư mục lên Vercel hoặc chạy:

```bash
vercel --prod
```


## V1.1 Animal Image Pack

- Added `assets/animals/*.webp` from the provided thumbnail pack.
- Added `ANIMAL_IMAGES` mapping in `app.js`.
- Animal images are shown in answer choices, egg reveal, info card, and fallback video modal.
- If a current animal does not have a safe matching image, the app falls back to the existing emoji.
- No storage schema, route, localStorage key, or deployment structure was changed.
