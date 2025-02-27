

// gameData.js文件，用于存储游戏文本内容

const gameData = {
    characters: [
        { name: "Alice", role: "Warrior", level: 1 },
        { name: "Bob", role: "Mage", level: 2 }
    ],
    items: [
        { name: "Sword", type: "Weapon", attack: 10 },
        { name: "Shield", type: "Armor", defense: 5 }
    ],
    scenes: {
        merchant: {
            text: `商人`,

            background_path: 'pictures/background/grass.png',
            character_path: 'pictures/characters/girl1.png',

            options: [
                {
                    text: '购买物品1 (花费50金钱)',
                    cost: 50,
                    reward: 10,
                },
                {
                    text: '购买物品2 (花费30金钱)',
                    cost: 30,
                    reward: 0,
                },
                {
                    text: '购买《时光之书的残页》 (花费300金钱)',
                    cost: 300,
                    reward: 0,
                },
                {
                    text: '离开',
                    cost: 0,
                    reward: 0,
                    nextScene: 'chapter1'
                }
            ]
        },
        chapter1: {
            text: '你来到了一个分叉路口，前方有两条路。',
            background_path: 'pictures/characters/girl1.png',
            character_path: 'pictures/characters/girl1.png',

            options: [
                {
                    text: '走左边的路',
                    nextScene: 'chapter2A'
                },
                {
                    text: '走右边的路',
                    nextScene: 'chapter2B'
                },
                {
                    text: '转生成为女生（没做完）',
                    nextScene: 'chapterQfemale1'
                },
                {
                    text: '转生成为男生',
                    nextScene: 'chapterQfemboy1'
                }

            ]
        },
        chapter2A: {
            text: '你选择了左边的路，遇到了一片森林。',
            background_path: 'pictures/characters/girl1.png',
            character_path: 'pictures/characters/girl1.png',
            options: [

                {
                    text: '回去找商人',
                    nextScene: 'merchant'
                }

            ]  // 如果需要，可以添加更多交互选项
        },
        chapter2B: {
            text: '你选择了右边的路，发现了一座废弃的城堡。',
            background_path: 'pictures/characters/girl1.png',
            character_path: 'pictures/characters/girl1.png',

            options: [

                {
                    text: '回去找商人',
                    nextScene: 'merchant'
                }

            ]  // 如果需要，可以添加更多交互选项
        },





        chapterQfemboy1: {
            text: `感觉似乎已经过了挺久了。\n
            我在被大货车撞了后，成功转生为一个身软体柔的小伪娘。
            而今天，将是我，被迫迈出人生一大步的重要日子……`,
            background_path: 'pictures/background/bedroom1.png',
            character_path: 'pictures/characters/femboy1.png',

            options: [
                {
                    text: '回过神来',
                    nextScene: 'chapterQfemboy2'
                },
            ]
        },



        chapterQfemboy2: {
            text: `“喂，怎么突然停下来了？”\n
            “难道刚才说，想要成为一辈子的绿帽锁奴是开玩笑的吗？”\n
            我一抬头，望着眼前的人居然是一个犹如棕熊一般高的黑色巨汉，
            他此时正用他那蒲扇大的手掌，捏着旁边一个穿着水手服的女生……
            但是女生却的脸色红润，眼神中透露出一丝魅意，似乎已经微微发情。
            `,
            background_path: 'pictures/background/street1.png',
            character_path: 'pictures/characters/blackmale1.png',

            options: [
                {
                    text: '检查记忆',
                    nextScene: 'chapterQfemboy1'
                },
            ]
        },








        chapterQfemale1: {
            text: `我慢慢睁开眼睛，发现周围的环境变得陌生起来。
            我试图坐起身，却发现自己的身体变得异常柔软纤细。这时脑海中突然涌入大量信息，
            让我瞬间意识到自己穿越到了另一个平行世界，还变成了一个名叫柳轻衣的绝美女高中生。`,
            background_path: 'pictures/background/grass.png',
            character_path: 'pictures/characters/girl1.png',

            options: [
                {
                    text: '检查记忆',
                    nextScene: 'chapterQfemale2'
                },
            ]
        },

        chapterQfemale2: {
            text: `我仔细阅读着那些记忆碎片，了解到在这个世界里，
            黄种女性表面上依然瞧不起黑人，但在私底下却有不少媚黑的女性存在。
            她们表面上是清纯可爱的女学生，贤惠端庄的妻子，背地里却渴望被拥有大黑吊的黑人侵犯和调教。
            而柳轻衣本人是一位出身富贵家庭的千金小姐，
            但她内心深处却隐藏着一个淫靡的愿望——就是被粗壮有力的黑人性器彻底贯穿，体验被黑人支配的极致快感。
            `,
            background_path: 'pictures/background/grass.png',
            character_path: 'pictures/characters/girl1.png',

            options: [
                {
                    text: '欸欸欸',
                    nextScene: 'chapterQfemale3'
                },
            ]
        },


        chapterQfemale3: {
            text: `想到这里，我不禁兴奋地浑身颤抖。
            作为一个曾经的男性，我一直憧憬能变成女性体会性爱乐趣。
            如今终于有机会以一个美女的身份去享受那令人陶醉的快感，
            这简直就像一场梦幻般的美梦！

            `,
            background_path: 'pictures/background/grass.png',
            character_path: 'pictures/characters/girl1.png',

            options: [
                {
                    text: '检查时间',
                    nextScene: 'chapterQfemale4'
                },
            ]
        },


        chapterQfemale4: {
            text: `我看了一眼床头柜上的闹钟，时间尚早，
            离学校还有几个小时。我迫不及待地脱下了身上的睡衣，
            仔细打量起自己的容颜和身材。镜子里映照出的是一张俏丽精致的脸蛋，
            白嫩无瑕的皮肤宛如玉琢一般。乌黑柔顺的长发散落在肩头，散发着淡淡香气。

            `,
            background_path: 'pictures/background/grass.png',
            character_path: 'pictures/characters/girl1.png',

            options: [
                {
                    text: '向下看去',
                    nextScene: 'chapterQfemale5'
                },
            ]
        },



        chapterQfemale5: {
            text: `接着我向下望去，视线扫过锁骨，停留在胸前那两团雪白的乳肉上。
            虽然规模不算巨大，但形状圆润饱满，顶端粉红的蓓蕾让人遐想连连。
            再往下是盈盈一握的小蛮腰，光滑紧致，没有任何赘肉。
            双腿修长笔直，线条优美流畅。而最引人注目的当属那双白皙的大腿根部，一件蕾丝内裤紧紧包裹住神秘花园。
            `,
            background_path: 'pictures/background/grass.png',
            character_path: 'pictures/characters/girl1.png',

            options: [
                {
                    text: '细看内裤',
                    nextScene: 'chapterQfemale6'
                },
            ]
        },




        chapterQfemale6: {
            text: `当我注意到内裤正面印着"I love BBC"这几个字母时，
            体内仿佛燃起一股欲火。我忍不住伸手探进内裤，手指隔着布料轻轻抚摸起那道缝隙。
            一阵酥麻的感觉瞬间传遍全身，令我娇喘连连。我加快了手上的动作，享受着这种前所未有的女性的刺激体验。

            `,
            background_path: 'pictures/background/grass.png',
            character_path: 'pictures/characters/girl1.png',

            options: [
                {
                    text: '细看内裤',
                    nextScene: 'chapterQfemale2'
                },
            ]
        },



    }
};




