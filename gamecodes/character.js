document.addEventListener('DOMContentLoaded', function() {
const character = {
        // 更新等级显示
        updateLevelDisplay: function() {
            document.getElementById('level').textContent = `等级: lv${game.gameState.level}`;
            
        },

        // 增加等级
        addLevel: function(amount) {
            if (game.gameState.level + amount < 100) {
                game.gameState.level += amount;
                console.log(`等级增加：${game.gameState.level}`);
                this.updateLevelDisplay();
            } else {
                game.gameState.level = 100;
                console.log(`等级最大：${game.gameState.level}`);
                this.updateLevelDisplay();
            }
            
        },

        // 减少等级
        subtractLevel: function(amount) {
            if (game.gameState.level >= amount) {
                game.gameState.level -= amount;
                this.updateLevelDisplay();
                return true;
            } else {
                console.log('无法继续降低等级！');
                return false;
            }
        },


        // 更新等级显示
        updatePercentageDisplay: function() {
            document.getElementById('percentage').textContent = `程度: ${game.gameState.percentage}%`;
            
        },

        // 增加等级
        addPercentage: function(amount) {
            if (game.gameState.percentage + amount < 100) {
                game.gameState.percentage += amount;
                console.log(`程度增加：${game.gameState.percentage}`);
                this.updatePercentageDisplay();
            } else {
                game.gameState.percentage = 100;
                console.log(`程度最大：${game.gameState.percentage}`);
                this.updatePercentageDisplay();
            }
            
        },

        // 减少等级
        subtractPercentage: function(amount) {
            if (game.gameState.percentage >= amount) {
                game.gameState.percentage -= amount;
                this.updatePercentageDisplay();
                return true;
            } else {
                console.log('无法继续降低程度！');
                return false;
            }
        },


};

window.character = character;

character.updateLevelDisplay();
character.updatePercentageDisplay();

});