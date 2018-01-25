// jshint esversion: 6

window.usedEmails = ['author@mail.com', 'foo@mail.com', 'tester@mail.com'];


(function () {
    let validationStatus = [];
    let allValidators = [];
    let serverCheckStatus = null;
    const submitButton = document.querySelector('button[type=submit]');


    function ajax(requeriedEmail, cb, node) {
        const STATE_READY = 4;
        const DOMAIN = "https://aqueous-reaches-8130.herokuapp.com/check-email/?email=";

        let url = DOMAIN + encodeURIComponent(requeriedEmail);

        let request = new XMLHttpRequest();

        request.open('GET', url, true);

        request.onreadystatechange = function() {
            if (request.readyState === STATE_READY) {
                cb(request.responseText, node);
            }

        };

        request.send();
    }


    function ajaxCallback(response, node) {
        let parsed = JSON.parse(response).used;

        if (parsed) {
            showError(getContainer(node) , 'Этот адрес уже используется SERVER');
            submitButton.disabled = true;
            serverCheckStatus = false;
        } else {
            hideError(getContainer(node));
            submitButton.disabled = false;
            serverCheckStatus = true;
        }
    }
    

    let data = {

        email: [
            {
                validator: function (value) { return !value; },
                message: 'Введите email. Это обязательное поле'
            },
            {
                validator: function (value) { return window.usedEmails.some(usedEmail => usedEmail === value); },
                message: 'Этот адрес уже используется'
            },
            {
                validator: function (value) { return !/^([a-z0-9_\.-]+)@([a-z0-9_\.-]+)\.([a-z\.]{2,6})$/i.test(value); },
                message: 'Проверьте написание. В адресе не должно быть ошибок.'
            },
            {
                validator: function (value, node) { ajax(value, ajaxCallback, node); }
            }
        ],


        password: [
            {
                validator: function (value) { return !value; },
                message: 'Введите пароль. Это обязательное поле'
            },
            {
                validator: function (value) { return (value.length < 4); },
                message: 'Длина пароля должна быть больше 4 символов'
            },
            {
                validator: function (value) { return /^([a-z]+|[0-9]+)$/i.test(value); },
                message: 'Пароль должен состоять из букв и чесел'
            },
            {
                validator: function (value) { return /[^a-z0-9_-]/gi.test(value); },
                message: 'Пароль не должен содержать недопустимых символов'
            }
        ],


        checkbox: [
            {
                validator: function (value, node) { return !node.checked; },
                message: 'Это обязательное поле'
            }
        ],


        phone: [
            {
                validator: function (value) { return value && !/^\+380\d{9}$/.test(value); },
                message: 'Неверный формат, должен быть в формате +380509993322'
            }
        ]

    };
    

    function validate(id, rules) {
        const node = document.getElementById(id);
        const nodeWrapper = getContainer(node);
        let validationStatusIndex = validationStatus.push(true) - 1;

        function check() {
            hideError(nodeWrapper);
    
            let status = rules.every(rule => {
                if (rule.validator(node.value, node)) {
                    showError(nodeWrapper, rule.message);
                    return false;
                } else {
                    return true;
                }
            });

            validationStatus[validationStatusIndex] = status;
            submitControl();

            return status;
        }
    
        node.addEventListener('keyup', check);
        node.addEventListener('blur', check);
        node.addEventListener('change', check);

        return check;
    }
    
    
    function checkTotalStatus() {
        return validationStatus.every(status => status === true) && serverCheckStatus;
    }
    
    
    function submitControl() {
        if (checkTotalStatus()) {
            submitButton.disabled = false;
        } else {
            submitButton.disabled = true;
        }
    }
    
    
    function topWalker(node, func) {
        while (!func(node)) {
            node = node.parentNode;
        }
        return node;
    }
    
    
    function getContainer(node) {
        return topWalker(node, function (node) {
            return node.classList.contains('form-group');
        });
    }


    function createNode(tag, props, ...children) {
        const element = document.createElement(tag);
    
        Object.keys(props).forEach(key => element[key] = props[key]);
    
        children.forEach(child => {
            if (typeof child === 'string') {
                child = document.createTextNode(child);
            }
    
            element.appendChild(child);
        });
    
        return element;
    }
    
    
    function showError(node, message) {
        if (node.classList.contains('has-error')) return;
    
        node.classList.add('has-error');
    
        const errorMsgNode = createNode('div', { className: 'alert alert-danger' }, message);
        node.appendChild(errorMsgNode);
    }
    
    
    function hideError(node) {
        if (!node.classList.contains('has-error')) return;
    
        node.classList.remove('has-error');
    
        const errorMsgNode = node.querySelector('.alert.alert-danger');
        errorMsgNode.parentNode.removeChild(errorMsgNode);
    }


    for (let inputID in data) {
        allValidators.push(validate(inputID, data[inputID]));
    }


    const form = document.querySelector('form');

    form.addEventListener('submit', () => {

        let isValid = allValidators.reduce((result, validators) => {
            let inputIsValid = validators();

            if (!result) {
                return false;
            } else {
                return inputIsValid;
            }

        }, true);


        if (!isValid) {
            event.preventDefault();
        } else {
            event.preventDefault();
            console.log('submit');
        }

    });


}());