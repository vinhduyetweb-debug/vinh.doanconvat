# DOAN CON VAT - IMAGE PACK V1.1 REPORT

## Kết quả

- Tổng ảnh nhận được: 100 file `.webp`.
- Tổng con vật trong app: 100.
- Đã map ảnh an toàn: 81 con.
- Chưa map vì chưa có ảnh khớp chắc chắn: 19 con.
- Thiếu file theo mapping: 0.

## Con chưa có ảnh khớp chắc chắn

- Hamster
- Khủng long
- Gà trống
- Tôm hùm
- Bọ cạp
- Chồn hôi
- Lười
- Đười ươi
- Khỉ đột
- Bò rừng
- Nai sừng tấm
- Thú mỏ vịt
- Vượn cáo
- Chồn đất
- Bò yak
- Bồ nông
- Cò
- Lươn
- Dế

## Ghi chú kỹ thuật

- Ảnh đã đặt tại `assets/animals/`.
- Mapping nằm trong `app.js` bằng object `ANIMAL_IMAGES`.
- Mỗi animal có thêm trường `imageUrl`.
- UI dùng ảnh ở đáp án, trứng hé lộ, ảnh sau khi đoán đúng và popup video fallback.
- Con nào chưa có ảnh sẽ tự fallback về emoji cũ.
- Không đổi localStorage key, không đổi index/score/unlocked, không thêm backend/build tool.
