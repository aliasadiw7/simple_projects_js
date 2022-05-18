let num = ['1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];

btn = () => {
    let color = '';
    for (let i = 0; i < 6; i++) {
        color += num[Math.floor(Math.random() * num.length)];
    }
    document.getElementById('background').style.background = `#${color}`;
    document.getElementById('color').innerHTML = `${color}`;
}