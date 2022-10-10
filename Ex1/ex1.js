
let cal = document.querySelector("#cal");
cal.addEventListener('click',handle);
function handle() {
    let ly = parseInt(document.querySelector('#ly').value);
    let hoa = parseInt(document.querySelector('#hoa').value);
    let sinh = parseInt(document.querySelector('#sinh').value);
    let average = (ly + hoa + sinh) / 3;
    document.querySelector("#average").innerHTML = `Điểm trung bình:  ${average}`;
}
