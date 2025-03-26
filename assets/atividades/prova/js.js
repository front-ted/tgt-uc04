let currentExercise = 0;
const exercises = document.querySelectorAll('.exercise');
const completionMessage = document.getElementById('completion-message');
const exercisesContainer = document.getElementById('exercises-container');

function init() {
    updateProgress();
    updateButtons();
}

function updateProgress() {
    const progress = (currentExercise / (exercises.length - 1)) * 100;
    document.getElementById('progress-bar').style.width = `${progress}%`;
    document.getElementById('counter').textContent = 
        `${currentExercise + 1} de ${exercises.length}`;
}

function updateButtons() {
    document.getElementById('prev-btn').disabled = currentExercise === 0;
    document.getElementById('next-btn').style.display = 
        currentExercise === exercises.length - 1 ? 'none' : 'block';
    document.getElementById('complete-btn').style.display = 
        currentExercise === exercises.length - 1 ? 'block' : 'none';
}

function nextExercise() {
    if(currentExercise < exercises.length - 1) {
        exercises[currentExercise].classList.remove('active');
        currentExercise++;
        exercises[currentExercise].classList.add('active');
        updateProgress();
        updateButtons();
    }
}

function prevExercise() {
    if(currentExercise > 0) {
        exercises[currentExercise].classList.remove('active');
        currentExercise--;
        exercises[currentExercise].classList.add('active');
        updateProgress();
        updateButtons();
    }
}

function showCompletion() {
    exercisesContainer.style.display = 'none';
    completionMessage.style.display = 'block';
    document.querySelector('.nav-buttons').style.display = 'none';
    document.getElementById('progress-bar').style.width = '100%';
}

function restartExercise() {
    currentExercise = 0;
    exercisesContainer.style.display = 'block';
    completionMessage.style.display = 'none';
    document.querySelector('.nav-buttons').style.display = 'flex';
    
    exercises.forEach((ex, index) => {
        ex.classList.remove('active');
        if(index === 0) ex.classList.add('active');
    });
    
    updateProgress();
    updateButtons();
}

document.addEventListener('DOMContentLoaded', init);