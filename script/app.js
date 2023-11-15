const init = function(){
    document.querySelector('.icon--add').classList.add('added');
    document.querySelector('.js-toggle').addEventListener('click', function(){
        document.querySelector('.icon--add').classList.toggle('added');
        document.querySelector('.icon--check').classList.toggle('added');
    })
}

document.addEventListener('DOMContentLoaded', init);