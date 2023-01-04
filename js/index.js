let countNode = document.querySelector(`#count`);
let ticketNode = document.querySelector(`#ticket`);
let costNode = document.querySelector(`#cost`);
let filmNameNode = document.querySelector(`#filmName`);
let modalNode = document.querySelector(`#modal`);
let bodyNode = document.querySelector(`#body`);
let buyBtnNode = document.querySelector(`#buy`);
let MModalNode = document.querySelector(`#MModal`);

let m1Node = document.querySelector(`#r1m1`);
let m2Node = document.querySelector(`#r1m2`);
let m3Node = document.querySelector(`#r1m3`);
let m4Node = document.querySelector(`#r1m4`);
let m5Node = document.querySelector(`#r2m1`);
let m6Node = document.querySelector(`#r2m2`);
let m7Node = document.querySelector(`#r2m3`);
let m8Node = document.querySelector(`#r2m4`);
let m9Node = document.querySelector(`#r3m1`);
let m10Node = document.querySelector(`#r3m2`);
let m11Node = document.querySelector(`#r3m3`);
let m12Node = document.querySelector(`#r3m4`);

count = 0;
cost = 0;
ticketNode.innerHTML = ` билетов `;

let filmName = filmNameNode.innerHTML;

modal = `<div class="Mmodal">
<div class="modal" id="modal">
    <h1>Подтверждение покупки ${count} ${ticket} на фильм ${filmName}</h1>
    <hr>
    <div class="inputs">
        <div class="inputBlock">
            <label for="nuber">Введите номер телефона:</label>
            <input name="number" id="number" class="input" type="number" 
            placeholder="+7 (777) 777 77-77">
        </div>
        <div class="inputBlock">
            <label for="email">Введите адрес почты:</label>
            <input name="email" id="email" class="input" type="email" placeholder="example@mail.ru">
        </div>
    </div>
    <p class="access">Подтвердите покупку ${count} ${ticket}</p>
    <div class="card">
        <p class="cardText">Card</p>
        <div class="inputs">
            <div calss="uppercard">
                <div class="inputBlockCard">
                    <label for="cardNuber">Введите номер карты:</label>
                    <input name="cardNumber" id="cardNumber" class="input" type="number" 
                    placeholder="1234 5678 9012 3456">
                </div>
                <div class="inputBlockCard">
                    <label for="username">Введите имя пользователя:</label>
                    <input name="username" id="user" class="input" type="email" placeholder="Иван Иванов">
                </div>
            </div>
            <div class="inputBlockCard">
                <label for="CVC2">Введите CVC2:</label>
                <input name="CVC2" id="CVC2" class="input" type="number" 
                placeholder="123">
            </div>
        </div>
    </div>
    <button class="modalBtn" id="final">Купить</button>
</div>
</div>
</div>`;


final = `<div id="BBBuy" class="BBBuy">
    <div class="Bbuy" id="finalBuy">
        <h1>Выберите сеанс</h1>
        <hr>
        <div class="seans">
            <div class="s" id="s1">
                <p>13:00</p>
                <p>-</p>
                <p>15:00</p>
            </div>
            <div class="s" id="s2">
                <p>15:30</p>
                <p>-</p>
                <p>17:30</p>
            </div>
            <div class="s" id="s3">
                <p>18:00</p>
                <p>-</p>
                <p>20:00</p>
            </div>
        </div>
        <button class="buyBtn">Купить</button>
    </div>
</div>`;


m1Node.addEventListener(`click`, function() {
    m1Node.classList.toggle(`active`);
    m1Node.classList.toggle(`active:hover`);
    if (m1Node.classList.contains(`active`)) {
        count = count + 1;
        countNode.innerHTML = count;
        cost = cost + 600;
        costNode.innerHTML = cost;
    } else {
        count = count - 1;
        countNode.innerHTML = count;
        cost = cost - 600;
        costNode.innerHTML = cost;
    }

    if (count == 0 || count >= 5 ) {
        ticketNode.innerHTML = ` билетов `
    } else if (count == 1) {
        ticketNode.innerHTML = ` билет `
    } else {
        ticketNode.innerHTML = ` билета `
    }
});

m2Node.addEventListener(`click`, function() {
    m2Node.classList.toggle(`active`);
    m2Node.classList.toggle(`active:hover`);
    if (m2Node.classList.contains(`active`)) {
        count = count + 1;
        countNode.innerHTML = count;
        cost = cost + 600;
        costNode.innerHTML = cost;
    } else {
        count = count - 1;
        countNode.innerHTML = count;
        cost = cost - 600;
        costNode.innerHTML = cost;
    }

    if (count == 0 || count >= 5 ) {
        ticketNode.innerHTML = ` билетов `
    } else if (count == 1) {
        ticketNode.innerHTML = ` билет `
    } else {
        ticketNode.innerHTML = ` билета `
    }
});

m3Node.addEventListener(`click`, function() {
    m3Node.classList.toggle(`active`);
    m3Node.classList.toggle(`active:hover`);
    if (m3Node.classList.contains(`active`)) {
        count = count + 1;
        countNode.innerHTML = count;
        cost = cost + 600;
        costNode.innerHTML = cost;
    } else {
        count = count - 1;
        countNode.innerHTML = count;
        cost = cost - 600;
        costNode.innerHTML = cost;
    }

    if (count == 0 || count >= 5 ) {
        ticketNode.innerHTML = ` билетов `
    } else if (count == 1) {
        ticketNode.innerHTML = ` билет `
    } else {
        ticketNode.innerHTML = ` билета `
    }
});

m4Node.addEventListener(`click`, function() {
    m4Node.classList.toggle(`active`);
    m4Node.classList.toggle(`active:hover`);
    if (m4Node.classList.contains(`active`)) {
        count = count + 1;
        countNode.innerHTML = count;
        cost = cost + 600;
        costNode.innerHTML = cost;
    } else {
        count = count - 1;
        countNode.innerHTML = count;
        cost = cost - 600;
        costNode.innerHTML = cost;
    }

    if (count == 0 || count >= 5 ) {
        ticketNode.innerHTML = ` билетов `
    } else if (count == 1) {
        ticketNode.innerHTML = ` билет `
    } else {
        ticketNode.innerHTML = ` билета `
    }
});

m5Node.addEventListener(`click`, function() {
    m5Node.classList.toggle(`active`);
    m5Node.classList.toggle(`active:hover`);
    if (m5Node.classList.contains(`active`)) {
        count = count + 1;
        countNode.innerHTML = count;
        cost = cost + 500;
        costNode.innerHTML = cost;
    } else {
        count = count - 1;
        countNode.innerHTML = count;
        cost = cost - 500;
        costNode.innerHTML = cost;
    }

    if (count == 0 || count >= 5 ) {
        ticketNode.innerHTML = ` билетов `
    } else if (count == 1) {
        ticketNode.innerHTML = ` билет `
    } else {
        ticketNode.innerHTML = ` билета `
    }
});

m6Node.addEventListener(`click`, function() {
    m6Node.classList.toggle(`active`);
    m6Node.classList.toggle(`active:hover`);
    if (m6Node.classList.contains(`active`)) {
        count = count + 1;
        countNode.innerHTML = count;
        cost = cost + 500;
        costNode.innerHTML = cost;
    } else {
        count = count - 1;
        countNode.innerHTML = count;
        cost = cost - 500;
        costNode.innerHTML = cost;
    }

    if (count == 0 || count >= 5 ) {
        ticketNode.innerHTML = ` билетов `
    } else if (count == 1) {
        ticketNode.innerHTML = ` билет `
    } else {
        ticketNode.innerHTML = ` билета `
    }
});

m7Node.addEventListener(`click`, function() {
    m7Node.classList.toggle(`active`);
    m7Node.classList.toggle(`active:hover`);
    if (m7Node.classList.contains(`active`)) {
        count = count + 1;
        countNode.innerHTML = count;
        cost = cost + 500;
        costNode.innerHTML = cost;
    } else {
        count = count - 1;
        countNode.innerHTML = count;
        cost = cost - 500;
        costNode.innerHTML = cost;
    }

    if (count == 0 || count >= 5 ) {
        ticketNode.innerHTML = ` билетов `
    } else if (count == 1) {
        ticketNode.innerHTML = ` билет `
    } else {
        ticketNode.innerHTML = ` билета `
    }
});

m8Node.addEventListener(`click`, function() {
    m8Node.classList.toggle(`active`);
    m8Node.classList.toggle(`active:hover`);
    if (m8Node.classList.contains(`active`)) {
        count = count + 1;
        countNode.innerHTML = count;
        cost = cost + 500;
        costNode.innerHTML = cost;
    } else {
        count = count - 1;
        countNode.innerHTML = count;
        cost = cost - 500;
        costNode.innerHTML = cost;
    }

    if (count == 0 || count >= 5 ) {
        ticketNode.innerHTML = ` билетов `
    } else if (count == 1) {
        ticketNode.innerHTML = ` билет `
    } else {
        ticketNode.innerHTML = ` билета `
    }
});

m9Node.addEventListener(`click`, function() {
    m9Node.classList.toggle(`active`);
    m9Node.classList.toggle(`active:hover`);
    if (m9Node.classList.contains(`active`)) {
        count = count + 1;
        countNode.innerHTML = count;
        cost = cost + 400;
        costNode.innerHTML = cost;
    } else {
        count = count - 1;
        countNode.innerHTML = count;
        cost = cost - 400;
        costNode.innerHTML = cost;
    }

    if (count == 0 || count >= 5 ) {
        ticketNode.innerHTML = ` билетов `
    } else if (count == 1) {
        ticketNode.innerHTML = ` билет `
    } else {
        ticketNode.innerHTML = ` билета `
    }
});

m10Node.addEventListener(`click`, function() {
    m10Node.classList.toggle(`active`);
    m10Node.classList.toggle(`active:hover`);
    if (m10Node.classList.contains(`active`)) {
        count = count + 1;
        countNode.innerHTML = count;
        cost = cost + 400;
        costNode.innerHTML = cost;
    } else {
        count = count - 1;
        countNode.innerHTML = count;
        cost = cost - 400;
        costNode.innerHTML = cost;
    }

    if (count == 0 || count >= 5 ) {
        ticketNode.innerHTML = ` билетов `
    } else if (count == 1) {
        ticketNode.innerHTML = ` билет `
    } else {
        ticketNode.innerHTML = ` билета `
    }
});

m11Node.addEventListener(`click`, function() {
    m11Node.classList.toggle(`active`);
    m11Node.classList.toggle(`active:hover`);
    if (m11Node.classList.contains(`active`)) {
        count = count + 1;
        countNode.innerHTML = count;
        cost = cost + 400;
        costNode.innerHTML = cost;
    } else {
        count = count - 1;
        countNode.innerHTML = count;
        cost = cost - 400;
        costNode.innerHTML = cost;
    }

    if (count == 0 || count >= 5 ) {
        ticketNode.innerHTML = ` билетов `
    } else if (count == 1) {
        ticketNode.innerHTML = ` билет `
    } else {
        ticketNode.innerHTML = ` билета `
    }
});

m12Node.addEventListener(`click`, function() {
    m12Node.classList.toggle(`active`);
    m12Node.classList.toggle(`active:hover`);
    if (m12Node.classList.contains(`active`)) {
        count = count + 1;
        countNode.innerHTML = count;
        cost = cost + 400;
        costNode.innerHTML = cost;
    } else {
        count = count - 1;
        countNode.innerHTML = count;
        cost = cost - 400;
        costNode.innerHTML = cost;
    }

    if (count == 0 || count >= 5 ) {
        ticketNode.innerHTML = ` билетов `
    } else if (count == 1) {
        ticketNode.innerHTML = ` билет `
    } else {
        ticketNode.innerHTML = ` билета `
    }
});



buyBtnNode.addEventListener(`click`, function() {
    tickets = '';
    if (count == 1) {
        tickets = ` билета `
    } else {
        tickets = ` билетов `
    }
    modal = `<form class="Mmodal">
        <div class="modal" id="modal">
            <h1>Подтверждение покупки ${count} ${tickets} на фильм ${filmName}</h1>
            <hr>
            <div class="inputs">
                <div class="inputBlock">
                    <label for="nuber">Введите номер телефона:</label>
                    <input name="number" id="number" class="input" type="number" required
                    placeholder="+7 (777) 777 77-77">
                </div>
                <div class="inputBlock">
                    <label for="email">Введите адрес почты:</label>
                    <input name="email" id="email" class="input" type="email" required placeholder="example@mail.ru">
                </div>
            </div>
            <p class="access">Подтвердите покупку ${count} ${tickets}</p>
            <div class="card">
                <p class="cardText">Card</p>
                <div class="inputs">
                    <div calss="uppercard">
                        <div class="inputBlockCard">
                            <label for="cardNuber">Введите номер карты:</label>
                            <input name="cardNumber" id="cardNumber" class="input" type="number" required 
                            placeholder="1234 5678 9012 3456">
                        </div>
                        <div class="inputBlockCard">
                            <label for="username">Введите имя пользователя:</label>
                            <input name="username" id="username" class="input" type="text" required placeholder="Иван Иванов">
                        </div>
                    </div>
                    <div class="inputBlockCard">
                        <label for="CVC2">Введите CVC2:</label>
                        <input name="CVC2" id="CVC2" class="input" type="number" required
                        placeholder="123">
                    </div>
                </div>
            </div>
            <button class="modalBtn" id="final" type="submit">Купить</button>
        </div>
    </form>`;

    MModalNode.innerHTML += modal;
    document.addEventListener('click', function(evt) {
        if (!evt.target.classList.contains(`MMmdal`) && !evt.target.classList.contains(`buy`)  && !evt.target.classList.contains(`modal`)  && !evt.target.classList.contains(`inputs`)  && !evt.target.classList.contains(`input`)  && !evt.target.classList.contains(`card`) && !evt.target.classList.contains(`modalBtn`) && !evt.target.classList.contains(`h1`)) {
        MModalNode.innerHTML = '';
        }
        });

    let finalNode = document.querySelector(`#final`);
    let bBuyNode = document.querySelector(`#bBuy`);

    let numberInput = document.querySelector(`#number`);
    let emailInput = document.querySelector(`#email`);
    let cardNumberInput = document.querySelector(`#cardNumber`);
    let usernameInput = document.querySelector(`#username`);
    let CVC2Input = document.querySelector(`#CVC2`);

    
    finalNode.addEventListener(`click`, function(evt) {
        evt.preventDefault()
        final = `<div id="BBBuy" class="BBBuy">
            <div class="Bbuy" id="finalBuy">
                <h1>Выберите сеанс</h1>
                <hr>
                <div class="seans">
                    <div class="s" id="s1">
                        <p>13:00</p>
                        <p>-</p>
                        <p>15:00</p>
                    </div>
                    <div class="s" id="s2">
                        <p>15:30</p>
                        <p>-</p>
                        <p>17:30</p>
                    </div>
                    <div class="s" id="s3">
                        <p>18:00</p>
                        <p>-</p>
                        <p>20:00</p>
                    </div>
                </div>
            </div>
        </div>`;

        if (numberInput.value != `` && emailInput.value != `` && cardNumberInput.value != `` && usernameInput.value != `` && CVC2Input.value != ``) {
            MModalNode.innerHTML = '';
            bBuyNode.innerHTML += final;
            let s1Node = document.querySelector(`#s1`);
            let s2Node = document.querySelector(`#s2`);
            let s3Node = document.querySelector(`#s3`);

            s1.addEventListener('click', function(evt) {
                MModalNode.innerHTML = '';
                bBuyNode.innerHTML = ``;
                alert( "Поздравляем! Вы купили билет!" );
            });

            s2.addEventListener('click', function(evt) {
                MModalNode.innerHTML = '';
                bBuyNode.innerHTML = ``;
                alert( "Поздравляем! Вы купили билет!" );
            });


            s3.addEventListener('click', function(evt) {
                MModalNode.innerHTML = '';
                bBuyNode.innerHTML = ``;
                alert( "Поздравляем! Вы купили билет!" );
            });
        }
    });
});