const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("質問1: 鎖骨が目立つ？ (はい/いいえ): ", (answer1) => {
  rl.question("質問2: お尻に丸みがなく平ら？ (はい/いいえ): ", (answer2) => {
    rl.question("質問3: Gジャンはけっこう似合う？ (はい/いいえ): ", (answer3) => {
      // ここで性格診断を行う条件分岐を書きます
      if (answer1 === 'いいえ') {
        if (answer2 === 'いいえ') {
          console.log("あなたは骨格ストレートです！");
        } else if (answer2 === 'はい') {
          console.log("あなたは骨格ウェーブです。");
        } else {
          console.log("あなたの診断は難しいですね。");
        }
        
      } else {
        if (answer3 === 'はい') {
          console.log("あなたは骨格ナチュラルです。");
        } else if (answer3 === 'いいえ') {
          console.log("あなたは骨格ウェーブです。");
        } else {
          console.log("あなたの診断は難しいですね。");
        }
      }
      rl.close();
    });
  });
});