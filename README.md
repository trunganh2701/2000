# BẮT ĐẦU Ở ĐÂY — SIX · KỶ NIỆM 6 THÁNG

Đây là phiên bản tạp chí web **kỷ niệm 6 tháng yêu nhau** được phát triển từ website 20/10 trước đó. Phong cách: **dễ thương, hài hước, lãng mạn**; giữ lại các chức năng gốc và thêm 6 thẻ bấm mở. Bạn không cần biết lập trình để thay tên, nội dung hay ảnh.

## 1. Chỉnh trước khi đăng

Mở `app/content.ts`. Những nội dung quan trọng cần điền, theo thứ tự:

1. Ở đầu file, sửa `HER` (tên người yêu) và `ME` (tên bạn).
2. Trong `issue`, sửa `date` và `dateLong` cho đúng **ngày kỷ niệm của riêng hai bạn** (chưa được cung cấp nên hiện đang là lời ghi chung).
3. Trong `feature.paragraphs`, sửa tâm thư thành trải nghiệm thực tế.
4. Trong `timeline.items`, thay nội dung mỗi **tháng 01–06** bằng sự kiện thực. Đừng giữ các câu có chữ “Hãy điền…”.
5. Trong `sixReasons.items`, đổi 6 lý do cho thật đúng tính cách của người yêu.
6. Trong `lookbook.items`, sửa tên nơi chụp và chú thích; có thể điền `date` nếu muốn.
7. Tùy chỉnh `secretLetter`, `quiz`, `coupons`, `wishes`, `finale`.
8. Thêm ảnh và nhạc nếu có, theo hướng dẫn bên dưới.

**Quan trọng:** Chỉ đổi chữ nằm trong dấu nháy kép; giữ dấu phẩy, ngoặc nhọn và dấu ngoặc vuông.

## 2. Danh sách ảnh (12 tấm)

| Tên file | Vị trí |
|---|---|
| `cover.jpg` | Bìa chính |
| `anatomy.jpg` | Chân dung có 5 điểm chạm |
| `lookbook-1.jpg` … `lookbook-10.jpg` | Album 10 khoảnh khắc |

Thêm các ảnh vào `public/photos/`. Sau khi tải ảnh lên, **bạn phải sửa trường `src` tương ứng trong `app/content.ts`**. Ví dụ `src: "/photos/cover.jpg"`; nếu vẫn là `src: ""` thì trang sẽ hiển thị ảnh giữ chỗ trang trí.

Nếu ảnh bị cắt mặt, đổi `position: "50% 45%"` (số thứ hai càng nhỏ thì trọng tâm càng lên phía trên).

Trong `anatomy`, `ratio: "3 / 4"` cần đúng với tỉ lệ ảnh. Sửa các điểm `x, y` theo phần trăm để khớp với ảnh thật, xem trên điện thoại trước khi gửi.

Có thể dùng ảnh jpg, png hoặc webp; nếu dùng tên file khác thì phải cập nhật đường dẫn trong `src`. Tối ưu ảnh trước khi đăng để website mở nhanh trên điện thoại.

## 3. Nhạc nền

Nếu muốn có nhạc, đặt một file được phép sử dụng vào `public/music/our-song.mp3`, tìm `music` trong `app/content.ts` và đổi:

```ts
src: "/music/our-song.mp3",
```

Không có nhạc thì để `src: ""`, nút phát nhạc sẽ không hiện. Nhạc chỉ phát khi người xem nhấn nút, không tự phát gây giật mình.

## 4. Các trang bên trong

| Nội dung | Trường dữ liệu |
|---|---|
| Bìa tạp chí SIX | `issue`, `cover` |
| Lá thư kỷ niệm | `feature` |
| 6 chương theo 6 tháng | `timeline` |
| Hồ sơ người yêu | `anatomy` |
| 6 tấm thẻ bí mật bấm mở | `sixReasons` |
| 10 bức ảnh | `lookbook` |
| Mật thư bấm để mở | `secretLetter` |
| 5 phiên bản của người yêu | `roles` |
| Trắc nghiệm hệ cặp đôi | `quiz` |
| Voucher hẹn hò | `coupons` |
| 3 điều hẹn nhau | `wishes` |
| Tái bút | `editorialNote` |
| Trang cuối (gia hạn tình yêu) | `finale` |

## 5. Đưa lên Internet KHÔNG cần VS Code hoặc Node.js

### Bước 1. GitHub

1. Đăng nhập https://github.com/ và tạo repository mới, chẳng hạn `six-months-with-you`. Chọn **Private** nếu muốn giữ mã nguồn cá nhân không công khai.
2. Giải nén ZIP, **mở thư mục `six-months-anniversary` bên trong**, rồi tải các file/thư mục trong đó lên repository bằng **Add file → Upload files**. Phải có `app/`, `public/`, `package.json` nằm cùng cấp tại thư mục gốc GitHub. **Không tải nguyên ZIP lên**.
3. Bấm **Commit changes** để lưu.

### Bước 2. Vercel

1. Đăng nhập https://vercel.com/new qua GitHub.
2. Import repository `six-months-with-you`.
3. Framework: **Next.js**; Root Directory: **./** nếu đúng cấu trúc.
4. Chọn **Deploy**. Vercel sẽ tự cài dependencies và build trực tuyến.
5. Mở URL có đuôi `.vercel.app` mà Vercel cung cấp và kiểm tra bằng điện thoại.

### Bước 3. Chỉnh sau khi đăng

Mở `app/content.ts` trên GitHub → biểu tượng bút chì → sửa chữ trong dấu nháy → **Commit changes**. Vercel tự triển khai bản mới (nếu kết nối GitHub đã được thiết lập thành công).

## 6. Trường hợp muốn chạy trên máy tính (tùy chọn)

Máy phải cài Node.js và npm, trong thư mục dự án chạy:

```bash
npm install
npm run dev
```

Mở http://localhost:3000. Trước khi gửi, thử `npm run build`.

## 7. Các giới hạn cần biết

- Đây là **template cá nhân**; tên và ngày kỷ niệm cần tự thay. Nội dung Timeline đang có các câu hướng dẫn mẫu, không phải các kỷ niệm mà AI biết về bạn.
- Mục **Ba điều hẹn nhau** chỉ lưu dữ liệu trong trình duyệt người nhận và mở bảng chia sẻ / sao chép nội dung. Nó **không tự gửi** tin nhắn đến bạn. `sendTo` chỉ là link để mở Messenger hoặc Zalo, người nhận vẫn cần dán/gửi tin.
- Voucher chỉ ghi nhận lựa chọn trên trang và cho phép sao chép thông điệp, **không tự thông báo về bạn**.
- Website được xuất bản bằng Vercel thường có URL truy cập công khai; repository Private **không làm website tự động có mật khẩu**. Đừng đưa thông tin nhạy cảm, địa chỉ hoặc ảnh quá riêng tư lên website khi chưa kiểm tra quyền truy cập.
- Chưa có ảnh vẫn xem được bố cục vì đã có ảnh giữ chỗ trang trí.

## 8. Kiểm tra trước khi chia sẻ

- [ ] Đổi tên và ngày thật
- [ ] Sửa 6 cột mốc thành chuyện thật
- [ ] Đổi 6 lý do và tâm thư thành lời của chính bạn
- [ ] Thêm ảnh bìa + ảnh chân dung + ảnh album
- [ ] Chỉnh điểm chạm trên ảnh chân dung
- [ ] Thử mở phong bì, lật 6 thẻ, trắc nghiệm, mật thư và voucher
- [ ] Kiểm tra Ba điều hẹn nhau không tự gửi; thử thao tác sao chép / nhắn tin
- [ ] Mở trên điện thoại và kiểm tra ảnh có bị cắt mặt hoặc chữ bị tràn
- [ ] Nếu build Vercel báo lỗi, mở **Build Logs** và gửi nội dung lỗi để xử lý

**Chúc hai bạn một dịp kỷ niệm 6 tháng thật vui và đáng nhớ!**
