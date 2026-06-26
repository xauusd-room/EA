const WORKER_URL =
"https://plain-bar-98a8.aaa375750526.workers.dev";


const loginBtn =
document.getElementById("login");


const editor =
document.getElementById("editor");


const status =
document.getElementById("status");



// 登录按钮
loginBtn.onclick = function(){

    window.location.href =
    WORKER_URL + "/auth";

};



// 检查登录状态
const params =
new URLSearchParams(
window.location.search
);


if(params.get("login")==="success"){

    loginBtn.style.display="none";

    editor.style.display="block";

    status.innerHTML =
    "GitHub 登录成功";

}
