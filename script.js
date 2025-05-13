// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // 1. Change Text Content
    const changeTextBtn = document.getElementById('change-text-btn');
    const changeableText = document.getElementById('changeable-text');
    
    changeTextBtn.addEventListener('click', function() {
        const messages = [
            "The text has been changed!",
            "JavaScript is powerful!",
            "DOM manipulation is fun!",
            "You can create dynamic content!",
            "Web development is exciting!"
        ];
        
        const randomIndex = Math.floor(Math.random() * messages.length);
        changeableText.textContent = messages[randomIndex];
    });
    
    // 2. Modify CSS Styles
    const styleBtn = document.getElementById('style-btn');
    const styleTarget = document.getElementById('style-target');
    
    styleBtn.addEventListener('click', function() {
        styleTarget.classList.toggle('highlight');
        
        // Change button text based on state
        if (styleTarget.classList.contains('highlight')) {
            styleBtn.textContent = 'Remove Highlight';
        } else {
            styleBtn.textContent = 'Toggle Highlight';
        }
    });
    
    // 3. Add/Remove Elements
    const addElementBtn = document.getElementById('add-element-btn');
    const removeElementBtn = document.getElementById('remove-element-btn');
    const elementContainer = document.getElementById('element-container');
    let elementCounter = 1;
    
    addElementBtn.addEventListener('click', function() {
        const newElement = document.createElement('p');
        newElement.textContent = `New Element #${elementCounter++}`;
        newElement.className = 'dynamic-element';
        elementContainer.appendChild(newElement);
    });
    
    removeElementBtn.addEventListener('click', function() {
        const elements = document.querySelectorAll('.dynamic-element');
        if (elements.length > 0) {
            const lastElement = elements[elements.length - 1];
            elementContainer.removeChild(lastElement);
            elementCounter--;
        } else {
            alert('No elements to remove!');
        }
    });
    
    // 4. Event Listeners
    const eventSection = document.getElementById('event-section');
    const clickCounterBtn = document.getElementById('click-counter-btn');
    const clickCountDisplay = document.getElementById('click-count');
    let clickCount = 0;
    
    // Mouse enter/leave events
    eventSection.addEventListener('mouseenter', function() {
        this.style.backgroundColor = '#e3f2fd';
    });
    
    eventSection.addEventListener('mouseleave', function() {
        this.style.backgroundColor = '';
    });
    
    // Click counter
    clickCounterBtn.addEventListener('click', function() {
        clickCount++;
        clickCountDisplay.textContent = clickCount;
        
        // Change button color based on click count
        if (clickCount % 5 === 0) {
            this.style.backgroundColor = '#e91e63';
        } else {
            this.style.backgroundColor = '#3498db';
        }
    });
    
    // 5. Bonus: Change footer year dynamically
    const footer = document.getElementById('page-footer');
    const year = new Date().getFullYear();
    const footerText = footer.querySelector('p');
    footerText.textContent += ` © ${year}`;
});