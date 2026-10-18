< !DOCTYPE html >
    <html lang="vi">
        <head>
            <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Thực hành JavaScript: Mảng, Đối tượng và DOM</title>
                    <style>
                        body {
                            font - family: Arial, sans-serif;
                        margin: 20px;
                        background-color: #f4f4f9;
        }
                        h2 {
                            color: #333;
        }
                        .box {
                            background: #fff;
                        padding: 15px;
                        margin-bottom: 15px;
                        border-radius: 5px;
                        box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        }
                        ul {
                            padding - left: 20px;
        }
                    </style>
                </head>
                <body>

                    <h2>Kết quả Thực hành JavaScript</h2>

                    <!-- Khu vực hiển thị mảng user qua DOM -->
                    <div class="box">
                        <h3>1. Danh sách Users sau khi thao tác (Mảng & DOM)</h3>
                        <ul id="user-list"></ul>
                    </div>

                    <!-- Khu vực hiển thị đối tượng cá nhân qua DOM -->
                    <div class="box">
                        <h3>2. Thông tin Đối tượng Cá nhân</h3>
                        <p id="person-info"></p>
                    </div>

                    <script>
        // ==========================================
                        // PHẦN 1: THAO TÁC VỚI MẢNG CÁC USER OBJECTS
                        // ==========================================

                        // Tạo một mảng các user objects, mỗi object có thuộc tính id và tên
                        let users = [
                        {id: 1, tên: "Nguyễn Văn An" },
                        {id: 2, tên: "Trần Thị Bình" },
                        {id: 3, tên: "Lê Hoàng Cường" }
                        ];

                        // Thêm một object mới vào mảng
                        users.push({id: 4, tên: "Phạm Thị Dung" });

                        // Cập nhật tên của một user dựa trên id của họ (ví dụ: cập nhật user có id = 2)
                        let targetIdToUpdate = 2;
        let userToUpdate = users.find(u => u.id === targetIdToUpdate);
                        if (userToUpdate) {
                            userToUpdate.tên = "Trần Văn Bình (Đã cập nhật)";
        }

                        // Xóa một user khỏi mảng dựa trên id (ví dụ: xóa user có id = 3)[cite: 17]
                        let targetIdToDelete = 3;
        users = users.filter(u => u.id !== targetIdToDelete);


                        // ==========================================
                        // PHẦN 2: THAO TÁC VỚI ĐỐI TƯỢNG (OBJECT)
                        // ==========================================

                        // Tạo một đối tượng đại diện cho một người với các thuộc tính tên, tuổi và thành phố[cite: 17]
                        let person = {
                            tên: "Hoàng Minh",
                        tuổi: 20,
                        thành phố: "Hà Nội"
        };

                        // Thêm thuộc tính email vào object[cite: 17]
                        person.email = "hoangminh@example.com";

                        // Xóa thuộc tính tuổi[cite: 17]
                        delete person.tuổi;


                        // ==========================================
                        // PHẦN 3: THAO TÁC VỚI DOM ĐỂ HIỂN THỊ KẾT QUẢ
                        // ==========================================

                        // Hiển thị danh sách mảng users lên trang web thông qua DOM
                        let userListUl = document.getElementById("user-list");
        users.forEach(user => {
                            let li = document.createElement("li");
                        li.textContent = `ID: ${user.id} - Tên: ${user.tên}`;
                        userListUl.appendChild(li);
        });

                        // Hiển thị thông tin đối tượng person lên trang web thông qua DOM
                        let personInfoP = document.getElementById("person-info");
                        personInfoP.innerHTML = `<strong>Tên:</strong> ${person.tên} <br>
                            <strong>Thành phố:</strong> ${person.thành phố} <br>
                                <strong>Email:</strong> ${person.email} <br>
                                    <strong>Thuộc tính tuổi sau khi xóa:</strong> ${person.tuổi}`;
                                </script>
                            </body>
                        </html>