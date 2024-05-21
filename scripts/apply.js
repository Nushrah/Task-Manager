function apply() {
    var eng = document.querySelector('#house');
    var sci = document.querySelector('#study');
    var is = document.querySelector('#errand');
    var clicks = new Array();
    clicks[0] = eng;
    clicks[1] = sci;
    clicks[2] = is;

    for (var i = 0; i < clicks.length; i++) {
        clicks[i].onclick = function () {
            for (var i = 0; i < clicks.length; i++) {
                clicks[i].setAttribute('style', 'background-color:  rgb(37, 119, 169);;');
            }
            this.setAttribute('style', 'background-color: white;');
        }
    }
    eng.addEventListener('click', function () {
        document.querySelector('#engineering').setAttribute('style', 'display: block;');
        document.querySelector('#science').setAttribute('style', 'display: none;');
        document.querySelector('#studies').setAttribute('style', 'display: none;');
    });
    sci.addEventListener('click', function () {
        document.querySelector('#engineering').setAttribute('style', 'display: none;');
        document.querySelector('#science').setAttribute('style', 'display: block;');
        document.querySelector('#studies').setAttribute('style', 'display: none;');
    });
    is.addEventListener('click', function () {
        document.querySelector('#engineering').setAttribute('style', 'display: none;');
        document.querySelector('#science').setAttribute('style', 'display: none;');
        document.querySelector('#studies').setAttribute('style', 'display: block;');
    });

    var cat = [];
    var tsk = [];

    function addValidationListener(inputId, buttonId) {
        var get_rank = document.getElementById(inputId);
        var chk = document.getElementById(buttonId);

        chk.addEventListener('click', function (event) {
            event.preventDefault();
            let rank_input = get_rank.value.trim();
            let isEmpty = !rank_input;

            if (isEmpty) {
                alert("Please enter the rank of chosen task.");
                return;
            }

            let rank = parseInt(rank_input);
            if (rank < 1 || rank > 10) {
                alert("Please enter a valid rank of chosen task between 1 and 10. ");
                return;
            }

            for (var a = 0; a < rank_input.length; a++) {
                if (isNaN(rank_input[a])) {
                    alert("Please enter the rank of chosen task.");
                    return;
                }
            }

            var words;
            if (rank === 1) {
                words = 'st';
            } else if (rank === 2) {
                words = 'nd';
            } else if (rank === 3) {
                words = 'rd';
            } else {
                words = 'th';
            }
            var tasks = {
                'bed': 'Make the bed',
                'mop': 'Mop the floors',
                'kitch': 'Clean the kitchen',
                'meal': 'Cook a meal',
                'lawn': 'Mow the lawn',
                'hw': 'Do homework',
                'bag': 'Pack the bag',
                'test': 'Study for the test',
                'groc': 'Do groceries',
                'dry': 'Pick up the dry-cleaning',
                'bank': 'Go to the bank',
            };

            var categories = {
                'bed': 'Household',
                'mop': 'Household',
                'kitch': 'Household',
                'meal': 'Household',
                'lawn': 'Household',
                'hw': 'Study',
                'bag': 'Study',
                'test': 'Study',
                'groc': 'Errands',
                'dry': 'Errands',
                'bank': 'Errands',
            };

            var task = tasks[inputId];
            var category = categories[inputId];

            if (tsk.includes(task)) {
                alert("You have already chosen this task.")
                return;
            }

            var index = rank - 1;

            if (cat[index] || tsk[index]) {
                alert("You have already chosen this rank.");
                return;
            }
            cat[index] = category;
            tsk[index] = task;


            alert("You have chosen " + task + " as your " + rank + words + " chosen task in " + category + " successfully.");

            var td1text = document.getElementById('td1').textContent;
            var td2text = document.getElementById('td2').textContent;
            var td3text = document.getElementById('td3').textContent;
            var td4text = document.getElementById('td4').textContent;
            var td5text = document.getElementById('td5').textContent;
            var td6text = document.getElementById('td6').textContent;
            var td7text = document.getElementById('td7').textContent;
            var td8text = document.getElementById('td8').textContent;
            var td9text = document.getElementById('td9').textContent;
            var td10text = document.getElementById('td10').textContent;

            var my_ranks = [td1text, td2text, td3text, td4text, td5text, td6text, td7text, td8text, td9text, td10text]

            for (var i = 0; i < 10; i++) {
                var rankIndex = i;
                if (my_ranks[i] == rank_input) {
                    document.getElementById('cat' + (rankIndex + 1)).innerHTML = cat[rankIndex];
                    document.getElementById('tsk' + (rankIndex + 1)).innerHTML = tsk[rankIndex];
                }
            }

            // console.log(cat);
            // console.log(tsk);

        });

        var number_tasks = document.querySelector('#total_number');
        var timee = document.querySelector('#last_time');
        function timeupd() {
            function formatTwoDigits(value) {
                if (value < 10) {
                    return '0' + value;
                } else {
                    return value;
                }
            }
            var today = new Date();
            var year = today.getFullYear();
            var mont = today.getMonth();
            var month = mont + 1;
            var date = today.getDate();
            var hour = formatTwoDigits(today.getHours());
            var min = formatTwoDigits(today.getMinutes());
            var sec = formatTwoDigits(today.getSeconds());
            var formattedDate = year + '/' + month + '/' + date + ' ' + hour + ':' + min + ':' + sec;
            return formattedDate;
        }

        var my_set = new Set();
        chk.addEventListener('click', function updateTable() {
            for (var i = 0; i < tsk.length; i++) {
                if (tsk[i] != null) {
                    my_set.add(tsk[i]);
                    let timeups = timeupd();
                    timee.innerHTML = timeups;
                    number_tasks.innerHTML = +my_set.size;
                }
            }
            // console.log(my_set);

        });
        var submit_clear = document.querySelector('#sub_clr');
        var sub = document.getElementById('subb');
        sub.addEventListener('click', function (event) {
            event.preventDefault();
            let timeups = timeupd();
            timee.innerHTML = timeups;
            var rank_array = [];

            if (tsk.length == 0) {
                submit_clear.setAttribute("style", "color: red; text-align: center;");
                submit_clear.innerHTML = "You have not chosen any task.";
            } else {
                var hasNull = false;
            
                for (var i = 0; i < tsk.length; i++) {
                    if (tsk[i] == null) {
                        hasNull = true;
                        var words;
                        var rank = i + 1;
                        if (rank === 1) {
                            words = 'st';
                        } else if (rank === 2) {
                            words = 'nd';
                        } else if (rank === 3) {
                            words = 'rd';
                        } else {
                            words = 'th';
                        }
                        var rankk = rank + words + " chosen task";
                        if (rank_array.length == 0) {
                            rank_array.push(rankk + ',');
                        } else {
                            rank_array.push(' and ' + rankk + ',');
                        }
                    }
                }
            
                if (hasNull) {
                    submit_clear.setAttribute("style", "color: red; text-align: center;");
                    submit_clear.innerHTML = "You have not chosen your " + rank_array.join('') + " you cannot leave any gap between your chosen tasks.";
                } else {
                    submit_clear.setAttribute("style", "color: green; text-align: center; font-size: 25px;");
                    submit_clear.innerHTML = "Your list is complete as of "+ timeups;
                }
            }
        });

        var cler = document.getElementById('clar');
        cler.addEventListener('click', function (event) {
            event.preventDefault();
            for (var i = 0; i < 10; i++) {
                document.getElementById('cat' + (i + 1)).innerHTML = '';
                document.getElementById('tsk' + (i + 1)).innerHTML = '';
                tsk = [];
                cat = [];
            }
            number_tasks.innerHTML = 0;
            let timeups = timeupd();
            timee.innerHTML = timeups;
            submit_clear.innerHTML = "";
            my_set.clear();
        });
    }

    addValidationListener('bed', 'btn2');
    addValidationListener('mop', 'btn3');
    addValidationListener('kitch', 'btn4');
    addValidationListener('meal', 'btn5');
    addValidationListener('lawn', 'btn6');
    addValidationListener('hw', 'btn7');
    addValidationListener('bag', 'btn8');
    addValidationListener('test', 'btn9');
    addValidationListener('groc', 'btn10');
    addValidationListener('dry', 'btn11');
    addValidationListener('bank', 'btn12');

}