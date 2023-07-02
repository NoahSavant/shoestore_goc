# shoestore_goc
- Chạy Local project
![Screenshot (1042)](https://github.com/NoahSavant/shoestore_goc/assets/103120266/1a1d420f-21b8-41fd-8bc6-2dab08f901f6)
Bước 1: Tạo csdl có tên shoe_goc
<br>
![Screenshot (1036)](https://github.com/NoahSavant/shoestore_goc/assets/103120266/fbd2ea0b-5b03-4cd4-9426-4ea17ce05357)
Bước 2: Khởi chạy project (Lưu ý cần cấu hình lại lại file application.yml vì project đã được chỉnh sửa để deploy)
<br>
![image](https://github.com/NoahSavant/shoestore_goc/assets/103120266/a73c0390-44d3-4427-8597-0b765a57e88c) <br>
Kiểm tra trong csdl đã tạo được bảng shoes

<br>

![Screenshot (1034)](https://github.com/NoahSavant/shoestore_goc/assets/103120266/671706fc-bd35-499b-b2ab-a1f950bc18a5)
Bước 3: Thêm dữ liệu vào database qua api: http://localhost:8081/api/shoes (chú ý header có định dạng Content-Type:application/json)

<br>

![Screenshot (1041)](https://github.com/NoahSavant/shoestore_goc/assets/103120266/77a046f5-00f0-418a-9eba-022404fd645b)
Bước 4: truy cập đường dẫn http://localhost:8081/ sau khi đã thêm dữ liệu

<br>

![Screenshot (1040)](https://github.com/NoahSavant/shoestore_goc/assets/103120266/156afe1a-6aaa-4bb6-bc09-4e466291d8d2)
Bước 5: thực hiện các thao tác như yêu cầu.

- Deploy project
![Screenshot (1043)](https://github.com/NoahSavant/shoestore_goc/assets/103120266/0644964a-6a9d-42b2-a539-70684c45e8d7)

Truy cập đường dẫn (7 ngày kể từ ngày 2/7):  https://shoe-goc.onrender.com/

![Screenshot (1045)](https://github.com/NoahSavant/shoestore_goc/assets/103120266/5882c008-30f2-4152-ae64-123ca8f112ef)
Backend: render.com

![Screenshot (1044)](https://github.com/NoahSavant/shoestore_goc/assets/103120266/dcd360a8-4e78-4f9a-b781-a92fa97cb6f1)
Database host: cloudclusters 

![Screenshot (1046)](https://github.com/NoahSavant/shoestore_goc/assets/103120266/aea04a37-d8bc-408b-bf74-c6d2adc26f6f)
Dùng postman với domain live vừa deploy để push dữ liệu lên
