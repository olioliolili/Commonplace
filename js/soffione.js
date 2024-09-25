document.body.addEventListener('click', function(event) {
    // 创建一个新的数字元素
    const number = document.createElement('div');
    number.classList.add('number');

    // 随机生成 0 或 1
    const randomNum = Math.random() > 0.5 ? '1' : '0';
    number.textContent = randomNum;

    // 随机大小
    const size = Math.random() * 15 + 5; // 随机大小在20px到50px之间
    number.style.fontSize = size + 'px';

    // 随机旋转
    const rotation = Math.random() * 360; // 随机旋转角度
    number.style.transform = `rotate(${rotation}deg)`;

    // 随机透明度
    const opacity = Math.random() * 0.5 + 0.5; // 随机透明度在0.5到1之间
    number.style.opacity = opacity;

    // 将数字放在点击位置
    number.style.left = event.clientX + 'px';
    number.style.top = event.clientY + 'px';

    // 添加到页面上
    document.body.appendChild(number);

    // 动画结束后移除数字
    setTimeout(() => {
        document.body.removeChild(number);
    }, 6000); // 与动画时间一致
});