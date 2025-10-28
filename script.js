const root = document.getElementById("root");

const addClassToRoot = (className) =>
  root.classList.add(...(Array.isArray(className) ? className : [className]));

const removeClassesFromRoot = (className) =>
  root.classList.remove(
    ...(Array.isArray(className) ? className : [className])
  );

//  Random Quotes Generator

const randomQuotesGenerator = () => {
  const quotes = [
    "The best way to predict the future is to create it. — Peter Drucker",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. — Winston Churchill",
    "The only way to do great work is to love what you do. — Steve Jobs",
    "Don't watch the clock; do what it does. Keep going. — Sam Levenson",
    "It does not matter how slowly you go, as long as you do not stop. — Confucius",
    "Opportunities don't happen, you create them. — Chris Grosser",
    "You miss 100% of the shots you don’t take. — Wayne Gretzky",
    "In the middle of every difficulty lies opportunity. — Albert Einstein",
    "What lies behind us and what lies before us are tiny matters compared to what lies within us. — Ralph Waldo Emerson",
    "The harder you work for something, the greater you'll feel when you achieve it. — Anonymous",
    "Success is not how high you have climbed, but how you make a positive difference to the world. — Roy T. Bennett",
    "Dream big and dare to fail. — Norman Vaughan",
    "Don’t let yesterday take up too much of today. — Will Rogers",
    "The future belongs to those who believe in the beauty of their dreams. — Eleanor Roosevelt",
    "It always seems impossible until it's done. — Nelson Mandela",
    "The way to get started is to quit talking and begin doing. — Walt Disney",
    "Success usually comes to those who are too busy to be looking for it. — Henry David Thoreau",
    "It’s not whether you get knocked down, it’s whether you get up. — Vince Lombardi",
    "Your time is limited, so don’t waste it living someone else’s life. — Steve Jobs",
    "Everything you’ve ever wanted is on the other side of fear. — George Addair",
  ];

  root.replaceChildren();

  const randomQuotesDom = `  <div class="quote-container">
            <p id="para">Honestly is the best policy.</p>
            <button id="btn">Generate Quote</button>      
        </div>`;

  root.insertAdjacentHTML("afterbegin", randomQuotesDom);
  addClassToRoot("center");

  const para = document.getElementById("para");
  const btn = document.getElementById("btn");

  btn.addEventListener("click", () => {
    const randomNumber = Math.floor(Math.random() * quotes.length);
    para.textContent = quotes[randomNumber];
    //  console.log(quotes[randomNumber])
  });
};

// Background Changer

const backgroundChanger = () => {
  const bgContainer = `  <div id="color-container" class=" flex justify-center align-center">
        <div>
          <button class=" btn"  style= "background-color:red;"></button>
          <p>Red</p>
        </div>
        <div>
          <button class=" btn" style= "background-color:green;"></button>
          <p>Green</p>
        </div>
        <div>
          <button class=" btn" style= "background-color:blue;"></button>
          <p>Blue</p>
        </div>
        <div>
        <input type="color" name="colorName" id="random" class="" value="#222222" />
          <p style="margin-top: 5px">Random</p>
        </div>
      </div>`;

  root.replaceChildren();

  root.insertAdjacentHTML("afterbegin", bgContainer);

  document.getElementById("color-container").addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
      // console.log("hello")
      document.body.style.backgroundColor = e.target.style.backgroundColor;
    }

    if (e.target.tagName === "INPUT") {
      e.target.addEventListener("input", () => {
        document.body.style.backgroundColor = e.target.value;
      });
    }
  });
};

// Love calculator

const loveCalculator = () => {
  const loveCalDom = `  <div class="love-calculator ">
                <h2 style="margin:30px 0; font-size:30px;" class="text-center">Love Calculoator</h2>
                <form>
                  <div class="flex">
                    <label for="boy">Boy</label>
                    <input type="text" id="boy">
                  </div >
                  <div style="margin: 20px 0;" class="flex">
                    <label for="girl">Girl</label>
                    <input type="text" id="girl">
                  </div>

                  <div class="flex justify-center flex-col">
                    <button id="love-calculate" >Calculate</button>
                  </div>
                </form>
                
              </div>`;

  root.replaceChildren();

  root.insertAdjacentHTML("afterbegin", loveCalDom);
  addClassToRoot(["flex", "justify-center"]);
  const btn = document.getElementById("love-calculate");

  btn.addEventListener("click", (e) => {
    e.preventDefault();
    let l1 = document.getElementById("boy").value.length;
    let l2 = document.getElementById("girl").value.length;
    if (l1 && l2) {
      let result = Math.pow(l1 + l2, 2) % 101;
      let para = document.createElement("p");
      para.textContent = `Result: ${result}%`;
      btn.before(para);
    }
  });
};

//  Income Tax Caculator

const incomeTaxCalculator = () => {
  const dom = ` <div class="incometax-calculator ">
                <h2 style="margin:30px 0; font-size:30px;" class="text-center">Tax Calculator</h2>
                <form>
                  <div class="flex" style="margin: 20px 0;">
                    <label for="income">Income</label>
                    <input type="text" id="income">
                  </div >
                  <div class="">
                    <button id="tax-calculate" >Calculate</button>
                  </div>
                </form>
              </div>`;

  root.replaceChildren();
  root.insertAdjacentHTML("afterbegin", dom);
  addClassToRoot(["flex", "justify-center"]);
  const form = document.querySelector("form");

  const btn = document.getElementById("tax-calculate");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const income = document.querySelector("#income");

    const amount = parseInt(income.value);

    let totalTax = 0;
    if (amount <= 1200000) totalTax = 0;
    else if (amount <= 160000) {
      totalTax = (amount - 1200000) * 0.15;
    } else if (amount <= 2000000) {
      totalTax = (amount - 1600000) * 0.2 + 60000;
    } else if (amount <= 2400000) {
      totalTax = (amount - 2000000) * 0.25 + 60000 + 80000;
    } else {
      totalTax = (amount - 2400000) * 0.3 + 60000 + 80000 + 100000;
    }

    let para = document.createElement("p");
    para.textContent = `Total Tax: ${totalTax}`;
    btn.before(para);
    para.classList.add("text-center");
  });
};

//  Cricket Quiz

const quizGame = () => {
  const cricketQuiz = [
    {
      id: 1,
      question: "Who is known as the 'God of Cricket'?",
      options: [
        "Virat Kohli",
        "Sachin Tendulkar",
        "Ricky Ponting",
        "Brian Lara",
      ],
      answer: "Sachin Tendulkar",
      isChecked: false,
      selected: "",
    },
    {
      id: 2,
      question: "Which country won the first ever Cricket World Cup in 1975?",
      options: ["Australia", "India", "West Indies", "England"],
      answer: "West Indies",
      isChecked: false,
      selected: "",
    },
    {
      id: 3,
      question:
        "What is the maximum number of overs allowed per bowler in a 50-over match?",
      options: ["5", "10", "8", "12"],
      answer: "10",
      isChecked: false,
      selected: "",
    },
    {
      id: 4,
      question:
        "Who was the captain of India during the 2011 ICC Cricket World Cup?",
      options: ["Sourav Ganguly", "Rahul Dravid", "MS Dhoni", "Virat Kohli"],
      answer: "MS Dhoni",
      isChecked: false,
      selected: "",
    },
    {
      id: 5,
      question: "Which bowler has taken the most wickets in Test cricket?",
      options: [
        "Muttiah Muralitharan",
        "Shane Warne",
        "James Anderson",
        "Anil Kumble",
      ],
      answer: "Muttiah Muralitharan",
      isChecked: false,
      selected: "",
    },
    {
      id: 6,
      question: "In cricket, how many players are there on a team?",
      options: ["10", "11", "12", "9"],
      answer: "11",
      isChecked: false,
      selected: "",
    },
    {
      id: 7,
      question: "Which Indian cricketer is nicknamed 'Hitman'?",
      options: ["KL Rahul", "Rohit Sharma", "Hardik Pandya", "Shikhar Dhawan"],
      answer: "Rohit Sharma",
      isChecked: false,
      selected: "",
    },
    {
      id: 8,
      question: "Who scored the fastest century in ODI cricket?",
      options: [
        "AB de Villiers",
        "Chris Gayle",
        "Corey Anderson",
        "Shahid Afridi",
      ],
      answer: "AB de Villiers",
      isChecked: false,
      selected: "",
    },
    {
      id: 9,
      question: "What is the length of a cricket pitch in yards?",
      options: ["20", "22", "24", "25"],
      answer: "22",
      isChecked: false,
      selected: "",
    },
    {
      id: 10,
      question: "Which country hosted the 2023 ICC Cricket World Cup?",
      options: ["Australia", "India", "England", "South Africa"],
      answer: "India",
      isChecked: false,
      selected: "",
    },
  ];

  let index = 0;

  const dom = `<div class="quiz-container">
               <form id="quiz-form">
                 <div class="question-container">
                  <div class="question ">
                    <h2> Q${cricketQuiz[index].id}. ${cricketQuiz[index].question}  </h2>
                  </div>
                  <div class="options">
                    <div>
                      <input type="radio" id="option1" name="question${cricketQuiz[index].id}"  style="cursor: pointer;" value="${cricketQuiz[0].options[0]}">
                      <label for="option1" style="cursor: pointer;">${cricketQuiz[0].options[0]}</label>
                    </div>
                    <div>
                      <input type="radio" id="option2"  name="question${cricketQuiz[index].id}" style="cursor: pointer;"  value="${cricketQuiz[0].options[1]}">
                      <label for="option2" style="cursor: pointer;">${cricketQuiz[0].options[1]}</label>
                    </div>
                    <div>
                      <input type="radio" id="option3" name="question${cricketQuiz[index].id}"  style="cursor: pointer;" value="${cricketQuiz[0].options[2]}">
                      <label for="option3" style="cursor: pointer;">${cricketQuiz[0].options[2]}</label>
                    </div>
                    <div>
                      <input type="radio" id="option4" name="question${cricketQuiz[index].id}"  value="${cricketQuiz[0].options[3]}">
                      <label for="option4" style="cursor: pointer;">${cricketQuiz[0].options[3]}</label>
                    </div>
                  </div>
                 
                 </div>
               </form>
               <div class="action-button">
                <button id="previous">Previous</button>
                <button id="next">Next</button>
                <button id="submit" style="display:none;"> Submit</button>
                
               </div>

                <div><p id="score" style="font-size: 24px; font-weight: 800; text-align: center; display:none;">Scored: 0/4</p></div>
                <button class="quizPlayButton" style="display:none;">Play Again!</button>
              </div>`;

  root.replaceChildren();
  root.insertAdjacentHTML("afterbegin", dom);
  addClassToRoot("center");

  let score = 0;

  let question = document.querySelector(".question-container .question h2");
  let optionLabel = document.querySelectorAll(".options  label");
  let optionInput = document.querySelectorAll(".options  input");
  let options = document.querySelector(".options");
  const form = document.getElementById("quiz-form");
  const replayBtn = document.querySelector(".quizPlayButton");

  // console.log(question,optionLabel,optionInput)

  const nextBtn = document.querySelector("#next");
  const previousBtn = document.querySelector("#previous");
  const submitBtn = document.querySelector("#submit");
  previousBtn.style.display = "none";

  nextBtn.addEventListener("click", () => {
    // console.log( "hello",cricketQuiz[index].selected)
    index++;
    if (index === cricketQuiz.length - 1) {
      nextBtn.style.display = "none";
      submitBtn.style.display = "block";
      submitBtn.style.backgroundColor = "green";
    } else if (index > 0) {
      previousBtn.style.display = "block";
    }

    question.textContent = ` Q${cricketQuiz[index].id}. ${cricketQuiz[index].question}`;
    optionLabel.forEach((label, qn) => {
      label.textContent = `${cricketQuiz[index].options[qn]}`;
    });

    optionInput.forEach((input, op) => {
      input.value = `${cricketQuiz[index].options[op]}`;
      //  input.name = `${cricketQuiz[index].id}`
    });

    // console.log(cricketQuiz[index].isChecked);

    // check Which option was seleced previously
    console.log(`Next Score: ${score}`);
    const inputId = cricketQuiz[index].selected;

    if (inputId) {
      const input = document.getElementById(inputId);
      //  console.log(input)
      input.checked = true;
    }

    if (!cricketQuiz[index].isChecked) {
      form.reset();
      // console.log("form reset");
    }
  });

  previousBtn.addEventListener("click", () => {
    index--;
    if (index < cricketQuiz.length) {
      nextBtn.style.display = "block";
      submitBtn.style.display = "none";
    }

    if (index === cricketQuiz.length) {
      nextBtn.style.display = "none";
      submitBtn.style.display = "block";
    }
    if (index === 0) {
      previousBtn.style.display = "none";
      // console.log("previous button is clicked!");
    }

    question.textContent = ` Q${cricketQuiz[index].id}. ${cricketQuiz[index].question}`;
    optionLabel.forEach((label, op) => {
      label.textContent = `${cricketQuiz[index].options[op]}`;
    });

    optionInput.forEach((input, op) => {
      input.value = `${cricketQuiz[index].options[op]}`;
      //  input.name = `${cricketQuiz[index].id}`
    });

    console.log(`Previous Score: ${score}`);

    // which input was selected
    const inputId = cricketQuiz[index].selected;

    if (inputId) {
      const input = document.getElementById(inputId);
      input.checked = true;
    }

    // console.log(cricketQuiz[index].isChecked);

    if (!cricketQuiz[index].isChecked) {
      form.reset();
      console.log("form reset ");
    }
  });

  // options.addEventListener('c')


    replayBtn.addEventListener("click", () => {
         document.querySelector(".quizPlayButton").style.display = "none"
   document.getElementById("score").style.display = "none"

     form.style.display = "block"
    document.querySelector(".action-button").style.display = "flex"

      index = 0;
      score = 0;

      for (const question of cricketQuiz) {
      question.selected = "";
      question.isChecked = false;

      }

       question.textContent = ` Q${cricketQuiz[index].id}. ${cricketQuiz[index].question}`;
    optionLabel.forEach((label, qn) => {
      label.textContent = `${cricketQuiz[index].options[qn]}`;
    });

    optionInput.forEach((input, op) => {
      input.value = `${cricketQuiz[index].options[op]}`;
      //  input.name = `${cricketQuiz[index].id}`
    });
    
    });
  

  document.getElementById("submit").addEventListener("click", () => {
    let scorePara = document.getElementById("score");
    
    scorePara.textContent = `Scored: ${score}/${cricketQuiz.length}`;
    
    document.querySelector(".quizPlayButton").style.display = "block"
    scorePara.style.display="block"


    submitBtn.style.display = "none";
    nextBtn.style.display = "block";
    previousBtn.style.display = "none";


    form.style.display = "none"
    document.querySelector(".action-button").style.display = "none"
    form.reset();
  });

  optionInput.forEach((input) => {
    input.addEventListener("change", (e) => {
      cricketQuiz[index].isChecked = true;
      cricketQuiz[index].selected = input.id;
      // console.log(cricketQuiz[index].isChecked);
      if (e.target.value === cricketQuiz[index].answer) {
        score++;
      }
    });
  });
};

//  astrology app

const astrology = () => {
  const dom = ` <div class="astrology-container">

                <h2 class="text-center ">Astrology insight</h2>

                <form id="astrology-form">
                  <label for="firstName">First Name</label>
                  <input type="text" id="firstName" name="firstName" required>
                  <label for="surname">Surname</label>
                  <input type="text" id="surname" name="surname" required>
                  <label for="dob">Date of birth</label>
                  <input type="date" id="dob" name="dob" required>
                  <button class="">Submit</button>
                </form>

              </div>`;

  root.replaceChildren();

  root.insertAdjacentHTML("afterbegin", dom);

  const zodiacSigns = [
    "Capricorn",
    "Aquarius",
    "Pisces",
    "Aries",
    "Taurus",
    "Gemini",
    "Cancer",
    "Leo",
    "Virgo",
    "Libra",
    "Scorpio",
    "Sagittarius",
  ];

  // Based on Date, size 31
  const compliments = [
    "You have a great sense of humor.",
    "Your smile lights up the room.",
    "You bring out the best in people.",
    "You're an incredibly thoughtful person.",
    "You have a heart of gold.",
    "Your creativity is inspiring.",
    "You're a fantastic problem-solver.",
    "Your kindness is contagious.",
    "You have an amazing ability to connect with others.",
    "You're so knowledgeable about so many things.",
    "Your determination is admirable.",
    "You're a great listener.",
    "You make the world a better place.",
    "Your positivity is infectious.",
    "You have an eye for detail.",
    "You're always so helpful and considerate.",
    "You have a natural talent for leadership.",
    "Your courage is inspiring.",
    "You're an amazing friend.",
    "You have a unique perspective that is refreshing.",
    "Your energy brightens everyone’s day.",
    "You're incredibly resourceful.",
    "You have a wonderful way with words.",
    "You're a ray of sunshine on a cloudy day.",
    "Your hard work is paying off.",
    "You're so reliable and trustworthy.",
    "You have a fantastic sense of style.",
    "Your confidence is inspiring.",
    "You're a great mentor and teacher.",
    "Your dedication is remarkable.",
    "You make everyone feel valued and respected.",
  ];

  // size 20
  const victimCardCompliments = [
    "You always do good for others, but they don't appreciate it.",
    "You give so much, but rarely get anything in return.",
    "Your kindness often goes unnoticed, but it’s truly remarkable.",
    "You always put others first, even when they don’t deserve it.",
    "You sacrifice so much, yet people rarely acknowledge it.",
    "You have a heart of gold, but others take it for granted.",
    "You’re always there for everyone, but they’re not always there for you.",
    "You work so hard, yet your efforts often go unrecognized.",
    "You care deeply, even when others don’t reciprocate.",
    "You forgive so easily, even when people don’t deserve it.",
    "You give people the benefit of the doubt, but they rarely do the same for you.",
    "You stand by people in their tough times, but they forget you in yours.",
    "You always try to make peace, even when others blame you.",
    "You handle so much pressure, yet no one sees your struggles.",
    "You give so much love, but people don’t value it enough.",
    "You’re always honest, yet people misunderstand your intentions.",
    "You go out of your way for others, but they don’t return the favor.",
    "You share everything you have, but people still ask for more.",
    "You’re a true friend, even when others don’t treat you the same.",
    "You keep helping others, even when they don’t say thank you.",
  ];

  // size is 30
  const recommendations = [
    "Feed a street dog and spread kindness.",
    "Plant a tree and nurture it.",
    "Volunteer at a local shelter or community center.",
    "Start your day with meditation for a peaceful mind.",
    "Write down three things you’re grateful for daily.",
    "Spend time with your family and cherish those moments.",
    "Help someone in need, even in small ways.",
    "Read a book that inspires you to grow.",
    "Exercise regularly to keep your body healthy.",
    "Donate clothes you don’t wear to charity.",
    "Cook a meal for someone and share the joy of food.",
    "Smile at strangers and brighten their day.",
    "Learn a new skill or hobby that excites you.",
    "Reduce your plastic use to help the environment.",
    "Disconnect from social media for a day and enjoy the moment.",
    "Start a journal to document your thoughts and dreams.",
    "Spend time in nature and appreciate its beauty.",
    "Compliment someone genuinely and make their day.",
    "Clean your room or workspace to feel more organized.",
    "Drink more water and prioritize your health.",
    "Write a letter to your future self.",
    "Support a local business or artisan.",
    "Listen to someone without interrupting.",
    "Practice random acts of kindness every day.",
    "Save a small amount of money weekly for future goals.",
    "Make a vision board to stay motivated.",
    "Adopt an eco-friendly habit like cycling or walking more.",
    "Spend time with children and learn from their innocence.",
    "Call an old friend and reconnect.",
    "Learn to say no to things that don’t serve your happiness.",
  ];

  // size is 20
  const predictions = [
    "You will become a crorepati!",
    "Success is just around the corner for you.",
    "Your dream job is closer than you think.",
    "Expect the unexpected—great things are coming.",
    "You will travel the world in the next few years.",
    "A big opportunity will knock on your door soon.",
    "Your hard work will pay off in ways you can't imagine.",
    "You will make a difference in someone's life.",
    "A surprising adventure is coming your way.",
    "Great things come to those who wait—your time is coming.",
    "Your creativity will lead to great success.",
    "A life-changing moment is just ahead.",
    "Get ready for some exciting news soon.",
    "A financial breakthrough is in your future.",
    "You will find happiness in the smallest things.",
    "Your patience will lead to big rewards.",
    "A new friendship will change your life.",
    "Prepare for a future full of opportunities.",
    "A career breakthrough is on the horizon.",
    "You will leave a legacy of inspiration.",
  ];

  const form = document.getElementById("astrology-form");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("firstName").value;
    const surname = document.getElementById("surname").value;
    const [year, month, day] = document.getElementById("dob").value.split("-");

    const text = `Hi ${name} ${surname}, Your Zodiac sign is ${
      zodiacSigns[month - 1]
    }
    . ${compliments[day - 1]}. ${victimCardCompliments[year % 20]}. ${
      recommendations[(day * month) % 30]
    }.
    ${predictions[(name.length * surname.length) % 20]}`;

    // console.log(text)

    const insightDiv = document.createElement("div");
    insightDiv.style.backgroundColor = "#222";
    insightDiv.style.marginTop = "10px";
    insightDiv.style.padding = "10px 15px";
    insightDiv.style.fontSize = "18px";
    insightDiv.textContent = text;
    form.after(insightDiv);
  });
};

//  Todo List

const todoList = () => {
  const dom = `  <div class="todo-container">

              <div id="todo-input">
                <input type="text">
                <button>➕</button>
              </div>

             </div>`;

  root.replaceChildren();
  root.insertAdjacentHTML("afterbegin", dom);
  addClassToRoot(["flex", "justify-center"]);
};

// Clicker Game

const clickerGame = () => {
  root.replaceChildren();
  root.style.position = "relative";

  root.addEventListener("click", (e) => {
    console.log(e);

    const bubble = document.createElement("div");
    bubble.classList.add("bubble");
    bubble.textContent = "Hi";

    bubble.style.backgroundColor = `hsl(${Math.floor(
      Math.random() * 360
    )}deg, 100%,50% )`;

    const rect = root.getBoundingClientRect();
    console.log(rect);

    const x = e.x - rect.left; // 25 = half bubble size (for centering)
    const y = e.y - rect.top;

    bubble.style.top = `${y - 50}px`;
    bubble.style.left = `${x}px`;

    root.append(bubble);

    setTimeout(() => {
      bubble.remove();
    }, 5000);
  });
};

//  Digital Clock

const digitalClock = () => {
  const clockContainer = document.createElement("div");
  clockContainer.style.fontSize = "50px";

  root.replaceChildren();
  addClassToRoot("center");
  root.append(clockContainer);
  clockContainer.textContent = new Date().toLocaleTimeString();

  const time = setInterval(() => {
    clockContainer.textContent = new Date().toLocaleTimeString();
  }, 1000);
};

// CountDown Timer

const timer = () => {
  // console.log(currentTime, olymicDate)

  const dom = `  <div class="timer">
            <div class="default-timer">
              <p id="eventName">
                Olympic Starts in
              </p>
              <p id="result">00:00:00</p>
            </div>
            <h2 style="margin-top:30px;font-size:40px;" class='text-center'> Custom CountDown </h2>
            <form id="clockForm">
              <div class="flex align-center" style="gap: 20px">
                <div>
                  <input type="text" placeholder="Event Name" required id="event" name="event"/>
                </div>
                <div class="flex flex-col align-center">
                <label for="clock" style="font-size: 40px" id="timer-clock">🕛</label>
                <p id="timePara">HH:MM PM</p>
                <input
                  type="time"
                  class=""
                  id="clock"
                  style="width:0; height:0; opacity:0;"
                  name="clock"

                />
                </div>

                <div class="flex flex-col align-center">
                <label for="date" style="font-size: 40px" id="timer-date">📆</label>
                <p id="datePara">yyyy-mm-dd</p>
                <input type="date" class="" id="date"  style="width:0; height:0; opacity:0;" name="date"/>
                </div>
              </div>
              <button id="btn">start</button>
            </form>
          </div>`;

  //  Insert element into root
  root.replaceChildren();
  root.insertAdjacentHTML("afterbegin", dom);
  addClassToRoot(["flex", "justify-center"]);

  let defaultTime = new Date(2028, 6, 14);
  let currentTime = new Date();
  let minDate = currentTime.toISOString().split("T")[0];
  const date = document.getElementById("date");
  const time = document.getElementById("clock");

  const dateInput = document.getElementById("date");
  dateInput.setAttribute("min", minDate);
  console.log(minDate);

  //  Timer at page load
  const result = document.getElementById("result");
  result.style.fontSize = `40px`;
  result.style.color = "hotpink";

  const btn = document.getElementById("btn");
  const form = document.getElementById("clockForm");

  //

  document.getElementById("timer-clock").addEventListener("click", () => {
    const input = document.getElementById("clock");
    input.showPicker();
  });
  document.getElementById("timer-date").addEventListener("click", () => {
    dateInput.showPicker();
  });

  date.addEventListener("change", () => {
    const datePara = document.querySelector("#datePara");
    datePara.textContent = date.value;
  });

  time.addEventListener("change", () => {
    const timePara = document.querySelector("#timePara");
    const [h, m] = time.value.split(":");

    timePara.textContent =
      h > 12 ? `${parseInt(h) - 12}:${m}PM` : `${time.value}AM`;
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const eventName = document.getElementById("event").value;

    const msg = document.getElementById("msg");

    if (msg) {
      msg.remove();
    }

    if (!(date.value || time.value)) {
      let para = document.createElement("p");
      para.textContent = "Chose time & date by clicking the given icon";
      para.style.fontSize = "18px";
      para.setAttribute("id", "msg");
      para.style.color = "#ff5722";
      btn.after(para);
      return;
    }

    const [y, mt, d] = date.value ? date.value.split("-") : minDate.split("-");
    const [h = 0, m = 0] = time.value && time.value.split(":");

    console.log(y, mt, d);
    console.log(h, m);

    defaultTime = new Date(y, mt - 1, d, h, m);

    document.getElementById("eventName").textContent = `${eventName} starts in`;

    // if(time.value && !date.value) {
    //     const [y,mt,d] = minDate.split("-")
    //     const [h,m] = time.value.split(":")
    //     defaultTime = new Date(y,mt,d,h,m)
    //     return
    // }
  });

  const getTimer = () => {
    currentTime = new Date();
    let diff = defaultTime - currentTime;

    const days = Math.floor(diff / (1000 * 3600 * 24));
    diff %= 1000 * 3600 * 24;
    const hours = Math.floor(diff / (1000 * 3600));
    diff %= 1000 * 3600;
    const minutes = Math.floor(diff / (1000 * 60));
    diff %= 1000 * 60;
    const seconds = Math.floor(diff / 1000);

    return `${days < 10 ? "0" + days : days}d and ${
      hours < 10 ? "0" + hours : hours
    }:${minutes < 10 ? "0" + minutes : minutes}:${
      seconds < 10 ? "0" + seconds : seconds
    }`;
  };

  result.textContent = getTimer();

  setInterval(() => {
    result.textContent = getTimer();
  }, 1000);
};

const projects = {
  randomQuotes: {
    name: "Random Quotes",
    fun: randomQuotesGenerator,
  },
  bgChanger: {
    name: "Background Changer",
    fun: backgroundChanger,
  },
  loveCalculator: {
    name: "Love Calculator",
    fun: loveCalculator,
  },
  incomeTaxCalculator: {
    name: "Income Tax Calculator",
    fun: incomeTaxCalculator,
  },

  digitalClock: {
    name: "Digital clock",
    fun: digitalClock,
  },
  countdownTime: {
    name: "Timer",
    fun: timer,
  },

  astrologyApp: {
    name: "Astrology",
    fun: astrology,
  },

  clicker: {
    name: "Clicker Game",
    fun: clickerGame,
  },

  quizGame: {
    name: "Cricket Quiz",
    fun: quizGame,
  },
};

const jsPorject = document.getElementById("jsProject");
const fragment = document.createDocumentFragment();

for (let key in projects) {
  const button = document.createElement("button");
  button.textContent = projects[key].name;
  fragment.append(button);
  button.addEventListener("click", (e) => {
    const allButtons = jsProject.querySelectorAll("button");
    allButtons.forEach((btn) => {
      btn.style.backgroundColor = "rgba(9, 10, 10, 0.473";
      btn.style.color = "white"; // optional, for contrast
    });

    e.target.style.backgroundColor = "violet";
    projects[key].fun();
  });
}

jsPorject.append(fragment);

document.querySelector("#jsProject button:first-child").click();
