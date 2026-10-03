/* ================= ELEMENTS ================= */

const opening =
    document.getElementById("opening");

const chapter1 =
    document.getElementById("chapter1");

const chapter2 =
    document.getElementById("chapter2");

const chapter3 =
    document.getElementById("chapter3");

const chapter4 =
    document.getElementById("chapter4");

const finalScreen =
    document.getElementById("finalScreen");


const openBtn =
    document.getElementById("openBtn");

const chapter2Btn =
    document.getElementById("chapter2Btn");

const chapter3Btn =
    document.getElementById("chapter3Btn");

const chapter4Btn =
    document.getElementById("chapter4Btn");

const finalBtn =
    document.getElementById("finalBtn");


/* ================= CHAPTER TRANSITION ================= */

function showChapter(current, next) {

    current.style.transition =
        "opacity 0.9s ease, transform 0.9s ease";

    current.style.opacity = "0";

    current.style.transform =
        "scale(0.97) translateY(-20px)";


    setTimeout(() => {

        current.style.display = "none";

        next.style.display = "flex";

        window.scrollTo({
            top: 0,
            behavior: "instant"
        });


        setTimeout(() => {

            next.style.transition =
                "opacity 1.1s ease";

            next.style.opacity = "1";

            next.style.transform = "translateY(0)";

        }, 50);

    }, 900);
}


/* ================= OPENING ================= */

openBtn.addEventListener("click", () => {

    showChapter(
        opening,
        chapter1
    );

});


/* ================= CHAPTER 01 ================= */

chapter2Btn.addEventListener("click", () => {

    showChapter(
        chapter1,
        chapter2
    );

});


/* ================= DAAA BUTTON ================= */

const daaaButton =
    document.getElementById("daaaButton");

const secretMessage =
    document.getElementById("secretMessage");


const messages = [

    "You make me laugh when I don't even feel like laughing. 😂",

    "You somehow know when something is wrong.",

    "When I'm sad, you're actually there for me. 🫂",

    "You care more than you probably realize.",

    "You're annoying... but in a very special way. 😭",

    "Somehow, talking to you makes bad days feel lighter.",

    "And honestly... I'm really glad I met you. ❤️",

    "That's the DAAA effect. ✨"

];


let messageIndex = 0;


daaaButton.addEventListener("click", () => {

    secretMessage.style.opacity = "0";


    setTimeout(() => {

        secretMessage.textContent =
            messages[messageIndex];

        secretMessage.style.opacity = "1";


        messageIndex++;

        if (messageIndex >= messages.length) {
            messageIndex = 0;
        }

    }, 250);

});


/* ================= CHAPTER 02 ================= */

chapter3Btn.addEventListener("click", () => {

    showChapter(
        chapter2,
        chapter3
    );

});


/* ================= CHAPTER 03 ================= */

chapter4Btn.addEventListener("click", () => {

    showChapter(
        chapter3,
        chapter4
    );

});


/* ================= FINAL COUNTDOWN ================= */

finalBtn.addEventListener("click", () => {

    showChapter(
        chapter4,
        finalScreen
    );


    startCountdown();

});


function startCountdown() {

    const countdown =
        document.getElementById("countdown");

    const birthdayText =
        document.getElementById("birthdayText");

    const finalMessage =
        document.querySelector(".final-message");

    let number = 3;


    birthdayText.style.opacity = "0";
    finalMessage.style.opacity = "0";


    countdown.textContent = number;


    const timer =
        setInterval(() => {

            number--;

            if (number > 0) {

                countdown.style.transform =
                    "scale(1.3)";

                setTimeout(() => {

                    countdown.style.transform =
                        "scale(1)";

                }, 150);

                countdown.textContent =
                    number;

            }


            else {

                clearInterval(timer);

                countdown.style.display =
                    "none";

                birthdayText.style.transition =
                    "opacity 1.5s ease, transform 1.5s ease";

                birthdayText.style.opacity =
                    "1";

                birthdayText.style.transform =
                    "scale(1.05)";


                setTimeout(() => {

                    birthdayText.style.transform =
                        "scale(1)";

                    finalMessage.style.transition =
                        "opacity 1.5s ease";

                    finalMessage.style.opacity =
                        "1";

                }, 500);

            }

        }, 1000);

}