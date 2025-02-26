

    // 存档和加载按钮事件
    document.querySelectorAll('.save-button').forEach(button => {
        button.addEventListener('click', function() {
            const currentSlot = this.parentElement.dataset.slot;
            window.game.currentSlot = currentSlot;
            window.game.saveGame();
        });
    });
    document.querySelectorAll('.load-button').forEach(button => {
        button.addEventListener('click', function() {
            const currentSlot = this.parentElement.dataset.slot;
            window.game.currentSlot = currentSlot;
            window.game.loadGame(currentSlot);
        });
    });


