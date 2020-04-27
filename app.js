// var hello = 'Hello World';
// alert(hello);

// alert(5 + 3)

// alert("Hello" + "World");

// var str1 = "Hello";
// var str2= "World!"
// alert(str1 + str2);

// if文
// var orang = 100;
// var apple = 120;

// if (orang < aplle){
//   alert("みかんの値段は、りんごより安い");
// }
// else if (orange == apple){
//   alert("みかんとりんごが同じ価格");
// }
// else{
//   alert("みかんの値段がりんごより安い");
// }

// while文
// var max = 100;
// var num = 1;
// var count = 0;

// while(num < max){
//   num = num * 2;
//   count = count + 1;
// }
// alert("２を掛け続けて" + max + "を超えるのに必要だった回数は" + count + "回です。");

// for文
// var i;
// var num = 0;

// for(i = 1; i < 11; i++){
//   num = num + i;
// }
// alert("１から１０まで足し算した結果は" + num + "です");

// js 2章確認問題
// alert(2 + 2)
// alert(2 - 2)
// alert(2 * 2)
// alert(2 / 2)

// var alertString;
// alertString = addString("webcamp");

// alert(alertString);

// function addString(strA){
//   var addStr = "Hello" + strA;
//   return addStr;
// }

// var promptStr = prompt('何か好きな文字を入力して下さい。')

// alert(promptStr);

// var user_hand = prompt('じゃんけんの手をグー、チョキ、パーから選んで下さい。');
// alert('あなたの選んだ手は、' + user_hand + 'です') ;


// じゃんけんプログラム　ここから
var user_hand = prompt('じゃんけんの手をグー、チョキ、パーから選んで下さい');
while((user_hand != "グー")&&(user_hand != "チョキ")&&(user_hand != "パー")&&(user_hand != null)){
  alert("グー・チョキ・パーのいずれかを入力して下さい")
  user_hand = prompt('じゃんけんの手をグー、チョキ、パーから選んで下さい');
}

var js_hand = getJShand();
var judge = WinLose(user_hand, js_hand);

if (user_hand != null ){
  alert('あなたの選んだ手は' + user_hand + 'です。 \nJavaScriptの選んだ手は' + js_hand + 'です。\n結果は' + judge + 'です。');
}
else {
  alert("またチャレンジしてね")
}

function getJShand(){
  var js_hand_num = Math.floor(Math.random() * 3);
  var hand_name;

  if (js_hand_num == 0){
    hand_name = 'グー';
  }else if(js_hand_num == 1){
    hand_name = 'チョキ';
  }else if (js_hand0_num == 2){
    hand_name = 'パー';
  }
  return hand_name;
}

function WinLose(user, js){
  var WinLoseStr;

  if(user == "グー"){
    if (js == "グー"){
      WinLoseStr = "あいこ";
    }else if(js == "チョキ"){
      WinLoseStr = "勝ち";
    }else if (js == "パー"){
      WinLoseStr = "負け";
    }
  }
  else if(user == "チョキ"){
    if (js == "グー"){
      WinLoseStr = "負け";
    }else if(js == "チョキ"){
      WinLoseStr = "あいこ";
    }else if (js == "パー"){
      WinLoseStr = "勝ち";
    }
  }
  else if(user == "パー"){
    if (js == "グー"){
      WinLoseStr = "勝ち";
    }else if(js == "チョキ"){
      WinLoseStr = "負け";
    }else if (js == "パー"){
      WinLoseStr = "あいこ";
    }
  }
  return WinLoseStr;
}

// じゃんけんプログラム　ここまで