
// game.js文件

//定义全局可使用的函数

// 显示对话框
function showDialog(text, options) {
    const dialogContainer = document.getElementById('dialog-container');
    const dialogText = document.getElementById('dialog-text');
    const dialogOptions = document.getElementById('dialog-options');
 
    // 填充文字
    dialogText.textContent = text;
 
    // 清空旧的选项
    dialogOptions.innerHTML = '';
 
    // 动态生成选项按钮
    options.forEach((option) => {
        const button = document.createElement('button');
        button.textContent = option.text;
        button.classList.add('option-button');
        button.addEventListener('click', () => {
            if (option.callback) {
                option.callback(); // 调用选项的回调函数
            }
            // hideDialog(); // 隐藏对话框
        });
        dialogOptions.appendChild(button);
    });
 
    // 显示容器
    dialogContainer.classList.remove('hidden');
}
 
// 隐藏对话框
function hideDialog() {
    const dialogContainer = document.getElementById('dialog-container');
    dialogContainer.classList.add('hidden');
}

// 示例JavaScript代码结构，需要详细实现各个部分
document.addEventListener('DOMContentLoaded', function() {
    const game = {

        currentOptionIndex: 0, // 当前轮询到的选项索引

        saveSlots: {},
        currentSlot: '1', // 默认存档槽
        gameState: {

            currentScene: 'merchant', // 初始场景

            character: 'qq',
            background: null,
            inventory: [],
            money: 1000,
            phone: { /* 手机功能状态 */ },
            level: 1,
            percentage :1
        },

        // 更新金钱显示
        updateMoneyDisplay: function() {
            document.getElementById('money').textContent = `金钱: $${this.gameState.money}`;
        },

        // 增加金钱
        addMoney: function(amount) {
            this.gameState.money += amount;
            this.updateMoneyDisplay();
        },

        // 减少金钱
        subtractMoney: function(amount) {
            if (this.gameState.money >= amount) {
                this.gameState.money -= amount;
                this.updateMoneyDisplay();
                return true;
            } else {
                console.log('金钱不足！');
                return false;
            }
        },

        // 保存游戏
        saveGame: function() {
            if (this.currentSlot) {
                this.saveSlots[this.currentSlot] = this.gameState;
                localStorage.setItem('saveSlots', JSON.stringify(this.saveSlots)); // 存储到本地存储

                console.log(`游戏已保存到 ${this.currentSlot}`);
            }
        },



        // 加载游戏
        loadGame: function(slot) {
            
            const savedSlots = JSON.parse(localStorage.getItem('saveSlots')) || {};
            const savedState = savedSlots[slot];

            console.log(localStorage.getItem('saveSlots'));

            if (savedState) {
                Object.assign(this.gameState, savedState);
                this.updateMoneyDisplay();
                this.updateDisplay();
                console.log('游戏已加载。');
            } else {
                console.log('没有存档。');
            }
        },


        // 在 game 对象中添加以下方法
        exportSave: function() {


            this.saveSlots[this.currentSlot] = this.gameState;

            // console.log(`当前导出槽位 ${this.saveSlots}`);


            const data = JSON.stringify(this.saveSlots, null, 2);
            const blob = new Blob([data], { type: 'application/json' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `game_save_${new Date().toISOString().slice(0,10)}.json`;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
        },




        importSave: function(file) {
            return new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.onload = (e) => {
                    try {
                        const imported = JSON.parse(e.target.result);
                        if (typeof imported === 'object' && !Array.isArray(imported)) {
                            this.saveSlots = imported;
                            localStorage.setItem('saveSlots', JSON.stringify(imported));
                            this.loadGame(this.currentSlot);
                            resolve(true);
                        } else {
                            reject('无效的存档格式');
                        }
                    } catch (error) {
                        reject('解析存档失败: ' + error.message);
                    }
                };
                reader.onerror = () => reject('读取文件失败');
                reader.readAsText(file);
            });
        },

        // 在 game 对象中添加
        handleImport: function(event) {
            const file = event.target.files[0];
            if (!file) return;

            this.importSave(file)
                .then(() => {
                    showDialog('存档导入成功！', [{
                        text: '确定',
                        callback: () => location.reload() // 刷新页面应用新存档
                    }]);
                })
                .catch(error => {
                    showDialog(`导入失败: ${error}`, [{ text: '确定' }]);
                    console.error('导入错误:', error);
                });
            
            // 清除输入以允许重复导入
            event.target.value = '';
        },

        // 更新游戏显示
        updateDisplay: function () {
            const scene = gameData.scenes[this.gameState.currentScene];
            if (!scene) {
                console.error('场景未找到:', this.gameState.currentScene);
                return;
            }

            document.getElementById('title').textContent = `当前场景: ${this.gameState.currentScene}`;
 
            // 显示当前场景的文本和选项
            showDialog(scene.text, scene.options.map(option => ({
                text: option.text,
                callback: () => {
                    this.handleOptionClick(option); // 处理选项点击
                }
            })));


            
            // 更新背景图片
            const backgroundElement = document.getElementById('background');
            if (backgroundElement) {
                backgroundElement.style.backgroundImage = `url('${scene.background_path}')`;
            } else {
                console.error('背景元素未找到');
            }
            // 更新人物图片
            const characterElement = document.getElementById('character');

            console.log('人物图片路径:', characterElement.style.backgroundImage);


            if (characterElement) {
                characterElement.style.backgroundImage = `url('${scene.character_path}')`;
            } else {
                console.error('背景元素未找到');
            }


            console.log('执行到下一章')
            this.currentOptionIndex = 0;

            // 初始化选项高亮
            this.updateOptionHighlight();




        },


        updateOptionHighlight: function() {
            const optionButtons = document.querySelectorAll('.option-button');
            optionButtons.forEach((button, index) => {
                if (index === this.currentOptionIndex) {
                    button.classList.add('highlighted');
                } else {
                    button.classList.remove('highlighted');
                }
            });
        },


        // 处理选项点击
        handleOptionClick: function (option) {
            if (option.cost) {
                // 如果选项有花费，检查金钱是否足够
                if (!this.subtractMoney(option.cost)) {
                    return;
                }
                console.log('你花费了 $' + option.cost);
            }
 
            if (option.reward) {
                // 增加奖励金钱
                this.addMoney(option.reward);
                console.log('你获得了 $' + option.reward);
            }
 
            if (option.nextScene) {
                // 切换到下一个场景
                this.gameState.currentScene = option.nextScene;
                this.updateDisplay();
            } else if (option.text === '离开') {
                console.log('你选择了离开，游戏结束或返回主菜单。');
                // 可以添加逻辑，例如返回主菜单或结束游戏
            } else {
                console.log('没有后续章节，游戏结束或待扩展。');
            }
        },



        handleKeyDown: function(event) {

            // 检查 phoneOn_mainOff 状态
            if (window.phoneOn_mainOff) {
                return; // 如果为 true，则直接退出函数
            }

            const optionButtons = document.querySelectorAll('.option-button');
            if (optionButtons.length === 0) return;
 
            switch (event.key) {
                case 'ArrowUp':
                case 'w':
                case 'W':
                    this.currentOptionIndex =
                        (this.currentOptionIndex - 1 + optionButtons.length) % optionButtons.length;
                    break;
                case 'ArrowDown':
                case 's':
                case 'S':
                    this.currentOptionIndex =
                        (this.currentOptionIndex + 1) % optionButtons.length;
                    break;
                case 'Enter':
                case ' ':
                    optionButtons[this.currentOptionIndex].click();
                    break;
            }
 
            this.updateOptionHighlight();
        },


        // 添加键盘事件监听器
        addKeyListener: function() {
            document.addEventListener('keydown', this.handleKeyDown.bind(this));
        },
 
        // 移除键盘事件监听器
        removeKeyListener: function() {
            document.removeEventListener('keydown', this.handleKeyDown.bind(this));
        },
 
        // 重启键盘事件监听器
        restartKeyListener: function() {
            this.removeKeyListener();
            this.addKeyListener();
        }


    };


    // 从本地存储加载游戏
    game.loadGame(game.currentSlot);


    // 初始化金钱显示
    game.updateMoneyDisplay();

    // 暴露 `game` 对象到全局作用域
    window.game = game;

    // 示例：打印所有角色（假设有 gameData）
    console.log(gameData);
    gameData.characters.forEach(character => {
        console.log(`角色: ${character.name}, 职业: ${character.role}, 等级: ${character.level}`);
    });


    // 添加键盘事件监听器
    game.addKeyListener();


    // 初始化第一章对话
    game.updateDisplay();






});



