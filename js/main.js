/**
 CAPSTONE_JS
 
 Người khởi tạo: NGUYỄN THANH TIẾN

 Ngày Khởi Tạo: 14/10/2022

 Virsion: 1.0.0

 */

 showHeaderTop = (id1, id2) => {
    let rotateI = document.getElementById(id2);
    rotateI.style.transition = 'all .5s'
    rotateI.style.transform = rotateI.style.transform === 'rotate(0deg)' ? 'rotate(180deg)' : 'rotate(0deg)';
    // rotateI.style.transform = rotateI.style.transform === 'rotate(0)' ? 'rotate(180deg)' : 'rotate(0)'
    let tagName = document.getElementById(id1);
    tagName.style.opacity = tagName.style.opacity === '0' ? '1' : '0';
    tagName.style.top = tagName.style.top === '-300%' ? '38px' : '-300%';  
 }
