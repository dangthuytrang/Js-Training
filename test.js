// Logic code
// dữ liệu Input
// data = { user, pass }--. > api-->fe/be-->token 
//fe: gói dữ liệu, lưu vào(local / cookies / session)


let users = [{
        username: "Thuy Trang",
        password: "1234"
    },
    {
        username: "Thuy Trang123",
        password: "12345"
    }
]

// Lấy dữ liệu 2 ô input -- validate dữ liệu
const username = document.getElementById("divinput");
const password = document.getElementById("divinput1");
const submit = document.getElementById("divsubmit");


// Gán sự kiện ô submit
submit.addEventListener("click", (e) => {
        e.preventDefault()
        const data = {
            username: username.value,
            password: password.value
        }
        console.log(data);



        // So sánh dữ liệu lấy được với mảng user
        for (let i = 0; i < users.length; i++) {
            if (data.username === users[i].username) {
                if (data.password === users[i].password) {
                    console.log("Login thành công");
                    break;
                }
            } else {
                console.log("Không tồn tại user");
            }

        }
    })
    // find
const result = users.find(user => user.username === data.username) //obj //null: null là 1 obj
if (result !== null) {
    if (result.password === data.password) {
        return `${result.username} đã đăng nhập thành công`
    }
    return "sai pass" // return k có else nữa
}
return `${data.username} chưa tồn tại`;

// filter

const result = users.filter(user => user.username === data.username); // array
if (Array.length !== 0) {
    if (result[0].password == data.password) {}
}
// [1,2,3] -->[2,4,6]; map, filter trả mảng mới
// map: số pt trả ra bằng mảng ban đầu, dữ liệu k fit dk: undefined/null
let arr = [1, 2, 3];
let newArr = arr.map(el => el * 2);
// filter: số pt nhỏ hơn hoặc bằng mảng cũ, có thể rỗng
let newArr1 = arr.filter(el => el * 2);
let newArr2 = arr.find(el => el % 2 == 0) // trả pt đầu tiên fit dk,object

// forEach k có return, hỗ trợ bất đồng bộ,map hỗ trợ async await