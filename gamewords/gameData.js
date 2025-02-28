

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
                    text: '回去找商人',
                    nextScene: 'merchant'
                },
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
                    text: '欸欸欸',
                    nextScene: 'chapterQfemboy3'
                },
            ]
        },


        chapterQfemboy3: {
            text: `这个黑色巨汉显然是个霸道又凶残的人，那个女生的身体被那巨汉的手掌完全包裹着，几乎无法动弹……但是，不得不说，这个女生和面前的巨汉一样让人感到震撼！

            `,
            background_path: 'pictures/background/street1.png',
            character_path: 'pictures/characters/blackmale1.png',

            options: [
                {
                    text: '眼睛从黑人身上移开',
                    nextScene: 'chapterQfemboy4'
                },
            ]
        },


        chapterQfemboy4: {
            text: `因为这巨汉的手掌一看就可以轻松提起一个篮球，结果居然还不能把眼前的这个女生的胸部给完全覆盖住！仅仅是只能盖住了不到三分之二的位置……剩下的三分之一的部分，正白花花地暴露在我的面前！
            `,
            background_path: 'pictures/background/street1.png',
            character_path: 'pictures/characters/blackmale1.png',

            options: [
                {
                    text: '看向乳房',
                    nextScene: 'chapterQfemboy5'
                },
            ]
        },


        chapterQfemboy5: {
            text: `
            
            那是一对挺拔饱满的乳房，诱人而又傲人……配合上女生那皮肤白皙光滑，仿佛凝脂一般，整个肉体浑然天成，浑身都在散发着令任何男性都无法抵挡的诱惑。

            `,
            background_path: 'pictures/background/street1.png',
            character_path: 'pictures/characters/blackmale1.png',

            options: [
                {
                    text: '继续',
                    nextScene: 'chapterQfemboy6'
                },
            ]
        },



        chapterQfemboy6: {
            text: `
            
            不仅如此，眼前女生这一身暴露而性感的水手服……居然还是暴露出南半球、十分令人口干舌燥的款式！而她的裙子也短到几乎能看到她的臀部，露出了大片美丽的臀肉，每一寸肌肤都充满了诱人的曲线和柔软的质感。

            `,
            background_path: 'pictures/background/street1.png',
            character_path: 'pictures/characters/blackmale1.png',

            options: [
                {
                    text: '继续',
                    nextScene: 'chapterQfemboy7'
                },
            ]
        },





        chapterQfemboy7: {
            text: `
            
            她的腿上则是穿着一对白色丝袜，光滑而有光泽，仿佛是为了更加突显她的傲人曲线而存在……与此同时，那丝袜更是勒住了她丰腴的大腿肉，形成了一道令人心跳加速的肉痕，仅仅是看一眼，就能引起男性无尽的遐想。

            `,
            background_path: 'pictures/background/street1.png',
            character_path: 'pictures/characters/blackmale1.png',

            options: [
                {
                    text: '继续',
                    nextScene: 'chapterQfemboy8'
                },
            ]
        },



        chapterQfemboy8: {
            text: `
            
            此时，这个女生正微微低着头，长发轻轻垂落在肩上，她的眼神湿润而迷离，仿佛有着什么深深的秘密。她的唇红齿白，微微张开，似乎在诱惑着人们的欲望。

            `,
            background_path: 'pictures/background/street1.png',
            character_path: 'pictures/characters/blackmale1.png',

            options: [
                {
                    text: '继续',
                    nextScene: 'chapterQfemboy9'
                },
            ]
        },



        chapterQfemboy9: {
            text: `
            
            仅仅是看了这么一下，我依旧是不由自主地被她的美丽所吸引，心中升起一股无法抑制的欲望……然而，这个女生叫萌萌，是我现在的未婚妻。

            `,
            background_path: 'pictures/background/street1.png',
            character_path: 'pictures/characters/blackmale1.png',

            options: [
                {
                    text: '继续',
                    nextScene: 'chapterQfemboy10'
                },
            ]
        },



        chapterQfemboy10: {
            text: `
            
            我心中涌起一股矛盾的情感，既欣喜于能够拥有如此美丽的女人，又不禁感到遗憾和无奈。毕竟，我们才刚刚从恋人升级为未婚夫妻不到一个月。我原本以为我们有足够的时间来慢慢了解彼此，但现在却发现自己面临着一个巨大的困境。

            `,
            background_path: 'pictures/background/street1.png',
            character_path: 'pictures/characters/blackmale1.png',

            options: [
                {
                    text: '继续',
                    nextScene: 'chapterQfemboy11'
                },
            ]
        },



        chapterQfemboy11: {
            text: `
            
            作为一个上辈子都没有能够拥有女朋友的老处男，这一次的转生让我产生了对自己新人生的期望！我渴望能够在这个世界上找到属于自己的幸福，不再孤单一人度过余生……于是，我拼了老命也要追求一个漂亮的女朋友，以证明自己的价值和魅力。

            `,
            background_path: 'pictures/background/street1.png',
            character_path: 'pictures/characters/blackmale1.png',

            options: [
                {
                    text: '继续',
                    nextScene: 'chapterQfemboy12'
                },
            ]
        },



        chapterQfemboy12: {
            text: `
            
            然而，就在我们两情相悦，正准备迎接与未婚妻的第一次时，我却得知了一个令我震惊的事实！
            原来，在这个世界里，为了这个区域的稳定，我……必须将未婚妻的第一次送给黑爹！那个强壮到离谱的黑人！

            `,
            background_path: 'pictures/background/street1.png',
            character_path: 'pictures/characters/blackmale1.png',

            options: [
                {
                    text: '继续',
                    nextScene: 'chapterQfemboy13'
                },
            ]
        },



        chapterQfemboy13: {
            text: `
            
            就仅仅是因为，他是我转生后所在地区的英雄，负责保护我们免受各种威胁和危险的侵害……这个区域的人民都对他充满敬畏和崇拜，认为他是他们的守护神。但是，为了维持这个区域的稳定，他竟然要求我献上我的未婚妻的第一次。

            `,
            background_path: 'pictures/background/street1.png',
            character_path: 'pictures/characters/blackmale1.png',

            options: [
                {
                    text: '继续',
                    nextScene: 'chapterQfemboy14'
                },
            ]
        },



        chapterQfemboy14: {
            text: `
            
            　　什么鬼！哪里来的中世纪初夜权啊？
            　　这到底是英雄还是中世纪领主啊？
            　　为什么我要牺牲我心爱的未婚妻，将她的第一次交给一个陌生的男人？
            
            `,
            background_path: 'pictures/background/street1.png',
            character_path: 'pictures/characters/blackmale1.png',

            options: [
                {
                    text: '继续',
                    nextScene: 'chapterQfemboy15'
                },
            ]
        },



        chapterQfemboy15: {
            text: `
            
            　　……\n
            　　结果没想到的是，在这个转生的异世界里面，居然还真的有初夜权这个东西！\n
            　　之前，因为不知道这件事，就和对方起了争执，结果害得自己转生后的父亲被捉到地牢里面，关到现在还没出来……母亲也被一车子的黑衣人给塞进车辆里面后带走了后，就音讯全无。
            
            `,
            background_path: 'pictures/background/street1.png',
            character_path: 'pictures/characters/blackmale1.png',

            options: [
                {
                    text: '继续',
                    nextScene: 'chapterQfemboy16'
                },
            ]
        },



        chapterQfemboy16: {
            text: `
            
            　　这些不幸的事件让我陷入了无尽的困境，而且，我，作为一个毫无特权的平民，没有任何经济来源后，竟然连最简单的生活费也成了问题！
            　　我感觉，自己应该是转生者中最不幸的一个了……虽然享受了转生后一些金手指的好处，但大部分都是对体力属性的提升，这在日常生活中并没有太大的作用。
            　　体力的提高，带来的好消息是我连续六年成为了马拉松冠军保持者，但坏消息是与那些职业选手相比，我仍然有相当大的差距……尽管在父母出事之后，我每天都在努力寻找工作，希望能够改变我的困境。
            
            `,
            background_path: 'pictures/background/street1.png',
            character_path: 'pictures/characters/blackmale1.png',

            options: [
                {
                    text: '继续',
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
                {
                    text: '回去找商人',
                    nextScene: 'merchant'
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




