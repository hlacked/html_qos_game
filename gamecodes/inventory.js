document.addEventListener('DOMContentLoaded', function () {
    const inventory = document.getElementById('inventory');
    let isOpen = false;
 
    // 点击背包时切换展开状态
    inventory.addEventListener('click', function (event) {
        // console.log('Inventory clicked');
        event.stopPropagation(); // 阻止事件冒泡
        isOpen = !isOpen;
        inventory.classList.toggle('open', isOpen);
    });
 
    // 点击背包以外的区域时隐藏背包
    document.addEventListener('click', function () {
        // console.log('Document clicked');
        if (isOpen) {
            inventory.classList.remove('open');
            isOpen = false;
        }
    });
});