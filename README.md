## Giới thiệu

Module `F8` cung cấp phương thức `create` để tạo ra một custom element cho ứng dụng web của bạn. Custom element này có thể được tùy chỉnh với các tuỳ chọn như dữ liệu mặc định và mẫu HTML.

## Cách sử dụng

Để sử dụng custom element, bạn cần nhúng module `F8` vào trong dự án của mình và sử dụng phương thức `create` như sau:

```javascript
F8.create(componentName, options);
```

Trong đó:

- `componentName` là tên của custom element.
- `options` là một đối tượng chứa các tuỳ chọn cho component bao gồm:
  - `data`: Hàm trả về dữ liệu mặc định của component.
  - `template`: Chuỗi HTML template.

## Luồng chạy

Khi custom element được tạo và kết nối vào DOM, các bước sau được thực hiện:

1. Khởi tạo component:

   - Tạo một instance của custom element.
   - Khởi tạo các thuộc tính như `state`, `nodeTexts`, `computedHTML`, và `templateNode`.

2. Xử lý innerHTML từ `computedHTML` vào thẻ template:

   - Chuyển đổi chuỗi `computedHTML` thành các phần tử HTML.
   - Gán vào trong `templateNode`.

3. Xử lý lại `templateNode` để thay thế định dạng `{{variable}}` bằng giá trị tương ứng trong `state`.

4. Thêm sự kiện cho các phần tử con:

   - Tìm các phần tử con có thuộc tính bắt đầu bằng `"v-on"`.
   - Thêm các sự kiện theo định dạng `"v-on:eventName="code"`.

5. Render component:
   - Append `templateNode` vào custom element.

## Cập nhật và sự kiện

Khi có sự kiện hoặc cập nhật trong component, các bước sau được thực hiện:

1. Xử lý sự kiện thay đổi:

   - Gán sự kiện cho phần tử con.
   - Khi sự kiện xảy ra, cập nhật `state` và render lại component.

2. Xử lý việc render lại component:
   - Lặp qua các `key` trong `state`.
   - So sánh với `code` để xác định `key` cần thay đổi.
   - Cập nhật các phần tử liên quan.

---
