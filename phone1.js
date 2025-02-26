document.addEventListener('DOMContentLoaded', function () {
    const phone = document.getElementById('phone');
    let isOpen = false;
    let currentScreenStack = [];
    let phoneOptionIndex = 0;

    // 界面管理函数
    function showScreen(screenType) {
        const screens = phone.querySelectorAll('.phone-screen');
        screens.forEach(screen => {
            screen.classList.remove('active');
            if (screen.classList.contains(screenType)) {
                screen.classList.add('active');
            }
        });
    }

    function pushSubInterface(interfaceId) {
        const mainScreen = phone.querySelector('.main-screen');
        const subInterface = document.getElementById(interfaceId);
        
        mainScreen.classList.remove('active');
        subInterface.parentElement.classList.add('active');
        currentScreenStack.push(interfaceId);
        phoneOptionIndex = 0; // 重置选项索引
        updatePhoneOptionHighlight();
    }

    //移除当前子界面函数
    function popSubInterface() {

        console.log(`currentScreenStack: ${currentScreenStack}`);

        if (currentScreenStack.length === 0) return;//如果 currentScreenStack 是空的，函数直接返回，不做任何操作。这避免了在空堆栈上执行 pop 操作。
        
        currentScreenStack.pop();//从 currentScreenStack 中移除最后一个元素，这通常表示返回到上一个屏幕。
        const mainScreen = phone.querySelector('.main-screen');
        if (currentScreenStack.length === 0) {

            console.log(`currentScreenStack: ${currentScreenStack}`);

            showScreen('main-screen');
        } else {
            document.getElementById(currentScreenStack.slice(-1)[0]).parentElement.classList.add('active');
        }
        phoneOptionIndex = 0;
        updatePhoneOptionHighlight();
    }

    // 更新高亮逻辑
    function updatePhoneOptionHighlight() {
        const currentScreen = phone.querySelector('.phone-screen.active');
        let options = currentScreen.querySelectorAll('button:not(.back-button)');
        
        options.forEach((button, index) => {
            button.classList.toggle('highlighted', index === phoneOptionIndex);
        });
    }

    // 修改后的togglePhone函数
    function togglePhone() {
        if (isOpen) {
            phone.classList.remove('open');
            isOpen = false;
            window.phoneOn_mainOff = false;
            currentScreenStack = [];
            showScreen('main-screen');
        } else {

            console.log(`togglePhoneisOpen ${isOpen}`);

            phone.classList.add('open');
            isOpen = true;
            window.phoneOn_mainOff = true;
            showScreen('main-screen');
        }
        phoneOptionIndex = 0;
        updatePhoneOptionHighlight();
    }

    // 事件监听更新，点击手机使手机伸出
    phone.addEventListener('click', function (event) {
        event.stopPropagation();

        console.log(`isOpen ${isOpen}`);

        if (!isOpen) togglePhone();
    });


    // 点击手机以外的区域时隐藏
    document.addEventListener('click', function () {
        // console.log('Document clicked');
        popSubInterface()
        if (isOpen) { // 仅在展开时执行
            phone.classList.remove('open');
            isOpen = false;
            window.phoneOn_mainOff = false;
        }
    });
    
    // 子界面返回按钮处理
    phone.querySelectorAll('.back-button, .chat-button').forEach(button => {
        button.addEventListener('click', function(e) {
            e.stopPropagation();
            popSubInterface();
        });
    });

    // 更新按键处理
    document.addEventListener('keydown', function(event) {

        console.log(`isOpen ${isOpen}`);

        if (event.key === 'Tab') {
            event.preventDefault(); // 防止默认行为
            togglePhone();

        }


        if (!isOpen) return;

        const currentScreen = phone.querySelector('.phone-screen.active');
        let options = currentScreen.querySelectorAll('button:not(.back-button)');

        switch (event.key) {
            // case 'Tab':
            //     event.preventDefault();
            //     togglePhone();
            //     break;
            case 'w':
            case 'ArrowUp':
            case 'W':
                phoneOptionIndex = Math.max(0, phoneOptionIndex - 1);
                updatePhoneOptionHighlight();
                break;
            case 's':
            case 'ArrowDown':
            case 'S':
                phoneOptionIndex = Math.min(options.length - 1, phoneOptionIndex + 1);
                updatePhoneOptionHighlight();
                break;
            case ' ':
            case 'Enter':
                if (options[phoneOptionIndex]) {
                    options[phoneOptionIndex].click();
                    event.stopPropagation();
                }
                break;
        }
    });

    // 初始化按钮点击处理
    phone.querySelectorAll('.phone-button').forEach(button => {
        button.addEventListener('click', function(e) {
            e.stopPropagation();
            if (this.textContent === '信息') {
                pushSubInterface('info-interface');
            }
            // 添加其他按钮处理...
            if (this.textContent === '设置') {
                pushSubInterface('setting-interface');
            }
            if (this.textContent === '联系人') {
                pushSubInterface('contact-interface');
            }

        });
    });






    
});