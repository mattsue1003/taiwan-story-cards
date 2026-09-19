const EVENTS = [
  {
    "id": "01",
    "title": "921 大地震",
    "year": "1999",
    "category": "災害與健康",
    "prompt": "你看到這張圖，第一個浮現的情緒詞是什麼？",
    "image": "cards/event01.png",
    "question": "這張台灣重要事件圖卡屬於哪一類主題？"
  },
  {
    "id": "02",
    "title": "八八風災",
    "year": "2009",
    "category": "災害與健康",
    "prompt": "在害怕、擔心之外，也可能感到哪些力量或支持？",
    "image": "cards/event02.png",
    "question": "這張台灣重要事件圖卡屬於哪一類主題？"
  },
  {
    "id": "03",
    "title": "COVID-19 疫情",
    "year": "2020 起",
    "category": "災害與健康",
    "prompt": "同一段防疫經驗，家人、工作人員和長者可能有什麼不同感受？",
    "image": "cards/event03.png",
    "question": "這張台灣重要事件圖卡屬於哪一類主題？"
  },
  {
    "id": "04",
    "title": "SARS 疫情",
    "year": "2003",
    "category": "災害與健康",
    "prompt": "如果你當時在現場，會想知道哪些資訊才比較安心？",
    "image": "cards/event04.png",
    "question": "這張台灣重要事件圖卡屬於哪一類主題？"
  },
  {
    "id": "05",
    "title": "0403 花蓮地震",
    "year": "2024",
    "category": "災害與健康",
    "prompt": "面對突發事件，安心、緊張與感謝可以同時出現嗎？",
    "image": "cards/event05.png",
    "question": "這張台灣重要事件圖卡屬於哪一類主題？"
  },
  {
    "id": "06",
    "title": "高雄氣爆",
    "year": "2014",
    "category": "災害與健康",
    "prompt": "這張圖讓你想到哪些需要被照顧的感受？",
    "image": "cards/event06.png",
    "question": "這張台灣重要事件圖卡屬於哪一類主題？"
  },
  {
    "id": "07",
    "title": "八仙樂園塵爆",
    "year": "2015",
    "category": "災害與健康",
    "prompt": "你會如何在保留感受的同時，尊重不想談的人？",
    "image": "cards/event07.png",
    "question": "這張台灣重要事件圖卡屬於哪一類主題？"
  },
  {
    "id": "08",
    "title": "太魯閣號事故",
    "year": "2021",
    "category": "災害與健康",
    "prompt": "新聞事件可能讓不同的人感到悲傷、憤怒或想幫忙嗎？",
    "image": "cards/event08.png",
    "question": "這張台灣重要事件圖卡屬於哪一類主題？"
  },
  {
    "id": "09",
    "title": "2021 水情吃緊",
    "year": "2021",
    "category": "災害與健康",
    "prompt": "當資源有限時，你會感到壓力、團結，還是想出新方法？",
    "image": "cards/event09.png",
    "question": "這張台灣重要事件圖卡屬於哪一類主題？"
  },
  {
    "id": "10",
    "title": "災後社區重建",
    "year": "1999 後",
    "category": "災害與健康",
    "prompt": "從失落走向重建，哪些情緒可能一路陪著大家？",
    "image": "cards/event10.png",
    "question": "這張台灣重要事件圖卡屬於哪一類主題？"
  },
  {
    "id": "11",
    "title": "解嚴",
    "year": "1987",
    "category": "民主與社會",
    "prompt": "一個限制解除時，除了開心，還可能有什麼感覺？",
    "image": "cards/event11.png",
    "question": "這張台灣重要事件圖卡屬於哪一類主題？"
  },
  {
    "id": "12",
    "title": "開放兩岸探親",
    "year": "1987",
    "category": "民主與社會",
    "prompt": "重逢、緊張、陌生與期待可以同時存在嗎？",
    "image": "cards/event12.png",
    "question": "這張台灣重要事件圖卡屬於哪一類主題？"
  },
  {
    "id": "13",
    "title": "解除報禁",
    "year": "1988",
    "category": "民主與社會",
    "prompt": "當能看見更多聲音時，你會有什麼感受？",
    "image": "cards/event13.png",
    "question": "這張台灣重要事件圖卡屬於哪一類主題？"
  },
  {
    "id": "14",
    "title": "全民健保上路",
    "year": "1995",
    "category": "民主與社會",
    "prompt": "得到一項公共服務時，安心與疑問可能如何交織？",
    "image": "cards/event14.png",
    "question": "這張台灣重要事件圖卡屬於哪一類主題？"
  },
  {
    "id": "15",
    "title": "野百合學運",
    "year": "1990",
    "category": "民主與社會",
    "prompt": "集體表達時，你會感到勇氣、緊張還是被支持？",
    "image": "cards/event15.png",
    "question": "這張台灣重要事件圖卡屬於哪一類主題？"
  },
  {
    "id": "16",
    "title": "首次總統直選",
    "year": "1996",
    "category": "民主與社會",
    "prompt": "參與重要選擇時，什麼會讓你感到踏實？",
    "image": "cards/event16.png",
    "question": "這張台灣重要事件圖卡屬於哪一類主題？"
  },
  {
    "id": "17",
    "title": "首次政黨輪替",
    "year": "2000",
    "category": "民主與社會",
    "prompt": "改變發生時，期待與不確定會怎麼共存？",
    "image": "cards/event17.png",
    "question": "這張台灣重要事件圖卡屬於哪一類主題？"
  },
  {
    "id": "18",
    "title": "太陽花學運",
    "year": "2014",
    "category": "民主與社會",
    "prompt": "不同意見相遇時，什麼感受會幫助你繼續傾聽？",
    "image": "cards/event18.png",
    "question": "這張台灣重要事件圖卡屬於哪一類主題？"
  },
  {
    "id": "19",
    "title": "同婚合法",
    "year": "2019",
    "category": "民主與社會",
    "prompt": "被看見、被接納與仍需適應，可以同時發生嗎？",
    "image": "cards/event19.png",
    "question": "這張台灣重要事件圖卡屬於哪一類主題？"
  },
  {
    "id": "20",
    "title": "首位女性總統就任",
    "year": "2016",
    "category": "民主與社會",
    "prompt": "看到社會角色改變時，你會想到哪些期待？",
    "image": "cards/event20.png",
    "question": "這張台灣重要事件圖卡屬於哪一類主題？"
  },
  {
    "id": "21",
    "title": "臺北捷運通車",
    "year": "1996",
    "category": "建設與生活",
    "prompt": "新的交通工具出現，生活會多出哪些方便或不安？",
    "image": "cards/event21.png",
    "question": "這張台灣重要事件圖卡屬於哪一類主題？"
  },
  {
    "id": "22",
    "title": "臺灣高鐵通車",
    "year": "2007",
    "category": "建設與生活",
    "prompt": "縮短距離之後，你會更期待見面，還是更忙碌？",
    "image": "cards/event22.png",
    "question": "這張台灣重要事件圖卡屬於哪一類主題？"
  },
  {
    "id": "23",
    "title": "台北 101 開幕",
    "year": "2004",
    "category": "建設與生活",
    "prompt": "一座新地標出現時，你會感到驕傲、好奇或有壓力？",
    "image": "cards/event23.png",
    "question": "這張台灣重要事件圖卡屬於哪一類主題？"
  },
  {
    "id": "24",
    "title": "臺灣加入 WTO",
    "year": "2002",
    "category": "建設與生活",
    "prompt": "連結世界可能帶來機會，也可能帶來哪些擔心？",
    "image": "cards/event24.png",
    "question": "這張台灣重要事件圖卡屬於哪一類主題？"
  },
  {
    "id": "25",
    "title": "蘇花改通車",
    "year": "2020",
    "category": "建設與生活",
    "prompt": "一條路變得更安全時，誰的生活會被改變？",
    "image": "cards/event25.png",
    "question": "這張台灣重要事件圖卡屬於哪一類主題？"
  },
  {
    "id": "26",
    "title": "2008 全球金融海嘯",
    "year": "2008",
    "category": "建設與生活",
    "prompt": "經濟消息會如何影響家庭、工作與心情？",
    "image": "cards/event26.png",
    "question": "這張台灣重要事件圖卡屬於哪一類主題？"
  },
  {
    "id": "27",
    "title": "臺灣援助 2011 日本地震",
    "year": "2011",
    "category": "建設與生活",
    "prompt": "看見遠方的人需要幫忙時，你會有什麼感受？",
    "image": "cards/event27.png",
    "question": "這張台灣重要事件圖卡屬於哪一類主題？"
  },
  {
    "id": "28",
    "title": "故宮南院開館",
    "year": "2015",
    "category": "建設與生活",
    "prompt": "新的文化空間開放時，你會期待看見什麼？",
    "image": "cards/event28.png",
    "question": "這張台灣重要事件圖卡屬於哪一類主題？"
  },
  {
    "id": "29",
    "title": "臺北世大運",
    "year": "2017",
    "category": "建設與生活",
    "prompt": "和不同地方的人一起活動，會帶來哪些感受？",
    "image": "cards/event29.png",
    "question": "這張台灣重要事件圖卡屬於哪一類主題？"
  },
  {
    "id": "30",
    "title": "口罩生產與社區分送",
    "year": "2020",
    "category": "建設與生活",
    "prompt": "在共同面對挑戰時，哪些行動讓你感到被照顧？",
    "image": "cards/event30.png",
    "question": "這張台灣重要事件圖卡屬於哪一類主題？"
  },
  {
    "id": "31",
    "title": "少棒隊世界冠軍",
    "year": "1969",
    "category": "文化與運動",
    "prompt": "團隊勝利會讓不同的人感到什麼？",
    "image": "cards/event31.png",
    "question": "這張台灣重要事件圖卡屬於哪一類主題？"
  },
  {
    "id": "32",
    "title": "2004 雅典奧運跆拳道金牌",
    "year": "2004",
    "category": "文化與運動",
    "prompt": "長期努力得到結果時，你會想到驕傲、放鬆還是責任？",
    "image": "cards/event32.png",
    "question": "這張台灣重要事件圖卡屬於哪一類主題？"
  },
  {
    "id": "33",
    "title": "2023 世界棒球經典賽勝利時刻",
    "year": "2023",
    "category": "文化與運動",
    "prompt": "一起歡呼的時刻，場內外的人感受會一樣嗎？",
    "image": "cards/event33.png",
    "question": "這張台灣重要事件圖卡屬於哪一類主題？"
  },
  {
    "id": "34",
    "title": "金曲獎首屆頒獎",
    "year": "1990",
    "category": "文化與運動",
    "prompt": "一首歌喚起回憶時，你的情緒會往哪裡走？",
    "image": "cards/event34.png",
    "question": "這張台灣重要事件圖卡屬於哪一類主題？"
  },
  {
    "id": "35",
    "title": "《悲情城市》獲金獅獎",
    "year": "1989",
    "category": "文化與運動",
    "prompt": "作品被世界看見時，創作者和家鄉的人可能怎麼想？",
    "image": "cards/event35.png",
    "question": "這張台灣重要事件圖卡屬於哪一類主題？"
  },
  {
    "id": "36",
    "title": "臺灣燈會",
    "year": "1990 起",
    "category": "文化與運動",
    "prompt": "節慶的熱鬧對每個人都一樣舒服嗎？",
    "image": "cards/event36.png",
    "question": "這張台灣重要事件圖卡屬於哪一類主題？"
  },
  {
    "id": "37",
    "title": "媽祖遶境",
    "year": "每年",
    "category": "文化與運動",
    "prompt": "參與傳統活動時，你會感到歸屬、疲累或好奇？",
    "image": "cards/event37.png",
    "question": "這張台灣重要事件圖卡屬於哪一類主題？"
  },
  {
    "id": "38",
    "title": "客家義民祭",
    "year": "每年",
    "category": "文化與運動",
    "prompt": "一個文化傳統傳下來時，誰會感到驕傲或壓力？",
    "image": "cards/event38.png",
    "question": "這張台灣重要事件圖卡屬於哪一類主題？"
  },
  {
    "id": "39",
    "title": "921 震後校園重建",
    "year": "1999 後",
    "category": "文化與運動",
    "prompt": "回到熟悉的地方時，安心和記憶會一起回來嗎？",
    "image": "cards/event39.png",
    "question": "這張台灣重要事件圖卡屬於哪一類主題？"
  },
  {
    "id": "40",
    "title": "疫情中的社區互助",
    "year": "2020–2022",
    "category": "文化與運動",
    "prompt": "被幫助或幫助別人時，你的身體和心情有什麼變化？",
    "image": "cards/event40.png",
    "question": "這張台灣重要事件圖卡屬於哪一類主題？"
  }
];

const CATEGORIES = ["災害與健康", "民主與社會", "建設與生活", "文化與運動"];
const activity = document.querySelector("#activity");
const stageImage = document.querySelector("#stageImage");
const roundLabel = document.querySelector("#roundLabel");
const eventMeta = document.querySelector("#eventMeta");
const answerBox = document.querySelector("#answerBox");
const answerTitle = document.querySelector("#answerTitle");
const promptText = document.querySelector("#promptText");
const quizQuestion = document.querySelector("#quizQuestion");
const quizOptions = document.querySelector("#quizOptions");
const answerStatus = document.querySelector("#answerStatus");
const gallery = document.querySelector("#galleryGrid");
const categoryFilter = document.querySelector("#categoryFilter");
const fullscreenButton = document.querySelector("#fullscreenButton");
const randomButton = document.querySelector("#randomButton");
const revealButton = document.querySelector("#revealButton");
const nextButton = document.querySelector("#nextButton");
const previousButton = document.querySelector("#previousButton");
let currentIndex = 0;

function currentEvent() { return EVENTS[currentIndex]; }

function quizChoices(event, seed) {
  const others = CATEGORIES.filter((category) => category !== event.category);
  const picked = [event.category, others[seed % others.length], others[(seed + 1) % others.length]];
  const offset = seed % picked.length;
  return picked.map((_, index) => picked[(index + offset) % picked.length]);
}

function renderQuiz(event) {
  const choices = quizChoices(event, currentIndex);
  const correct = choices.indexOf(event.category);
  quizQuestion.textContent = event.question;
  quizOptions.innerHTML = "";
  answerStatus.textContent = "先選一個主題，再邀請長輩說說自己的感受。";
  choices.forEach((choice, index) => {
    const button = document.createElement("button");
    button.className = "quiz-option";
    button.type = "button";
    button.textContent = `${String.fromCharCode(65 + index)}. ${choice}`;
    button.addEventListener("click", () => {
      [...quizOptions.children].forEach((item) => item.classList.remove("correct", "wrong"));
      if (index === correct) {
        button.classList.add("correct");
        answerStatus.textContent = "答對了！接著問問長輩：這個事件讓你想到什麼感受？";
      } else {
        button.classList.add("wrong");
        quizOptions.children[correct].classList.add("correct");
        answerStatus.textContent = `可以再想想：它屬於「${event.category}」。`;
      }
    });
    quizOptions.appendChild(button);
  });
}

function renderEvent(index) {
  currentIndex = (index + EVENTS.length) % EVENTS.length;
  const event = currentEvent();
  stageImage.src = event.image;
  stageImage.alt = `台灣重要事件圖卡第 ${event.id} 張`;
  roundLabel.textContent = `第 ${currentIndex + 1} / ${EVENTS.length} 張`;
  eventMeta.textContent = `${event.category}｜${event.year}`;
  promptText.textContent = event.prompt;
  answerTitle.textContent = event.title;
  answerBox.hidden = true;
  revealButton.textContent = "顯示答案";
  renderQuiz(event);
  document.querySelectorAll(".gallery-card").forEach((item, itemIndex) => {
    item.classList.toggle("selected", itemIndex === currentIndex);
  });
}

function randomEvent() {
  let next = currentIndex;
  while (next === currentIndex && EVENTS.length > 1) next = Math.floor(Math.random() * EVENTS.length);
  renderEvent(next);
}

function renderGallery() {
  gallery.innerHTML = "";
  const selectedCategory = categoryFilter.value;
  EVENTS.forEach((event, index) => {
    if (selectedCategory !== "全部" && event.category !== selectedCategory) return;
    const button = document.createElement("button");
    button.className = "gallery-card";
    button.type = "button";
    button.innerHTML = `<img src="${event.image}" alt="" loading="lazy"><span>${event.id}｜${event.title}</span><small>${event.category}・${event.year}</small>`;
    button.addEventListener("click", () => {
      renderEvent(index);
      document.querySelector("#play").scrollIntoView({ behavior: "smooth", block: "start" });
    });
    gallery.appendChild(button);
  });
}

categoryFilter.addEventListener("change", renderGallery);
randomButton.addEventListener("click", randomEvent);
nextButton.addEventListener("click", () => renderEvent(currentIndex + 1));
previousButton.addEventListener("click", () => renderEvent(currentIndex - 1));
revealButton.addEventListener("click", () => {
  const hidden = answerBox.hidden;
  answerBox.hidden = !hidden;
  revealButton.textContent = hidden ? "隱藏答案" : "顯示答案";
});
fullscreenButton.addEventListener("click", async () => {
  try {
    if (document.fullscreenElement) await document.exitFullscreen();
    else await activity.requestFullscreen();
  } catch (error) {
    activity.classList.toggle("manual-fullscreen");
    fullscreenButton.textContent = activity.classList.contains("manual-fullscreen") ? "離開全螢幕" : "全螢幕帶領";
  }
});
document.addEventListener("fullscreenchange", () => {
  fullscreenButton.textContent = document.fullscreenElement === activity ? "離開全螢幕" : "全螢幕帶領";
});
document.addEventListener("keydown", (event) => {
  if (event.target.matches("input, textarea, button, select")) return;
  if (event.key === "ArrowRight") renderEvent(currentIndex + 1);
  if (event.key === "ArrowLeft") renderEvent(currentIndex - 1);
  if (event.key.toLowerCase() === "r" || event.key === " ") { event.preventDefault(); randomEvent(); }
});
renderGallery();
renderEvent(0);
