let tooltipContent;
let currentTarget;

function csvSplit(csvContent) {
    const data = csvContent.split('\n').map(row => row.split(','));

    return data;

}
function csvSearch(data, text) {

    for (let i = 0; i < data.length; i++) {
        const row = data[i];
        for (let j = 0; j < row.length; j++) {
            if (row[j].toLowerCase().includes(searchTerm.toLowerCase())) {
                console.log(`Found "${searchTerm}" in row ${i + 1}, column ${j + 1}`);
                
                return; 
            }
        }
    }

    

}



function createTooltip() {
    if(!tooltipContent)
    {

        tooltipContent = document.createElement('div');
        tooltipContent.classList.add('tooltip-content');
        tooltipContent.textContent = 'Example Text';
        document.body.appendChild(tooltipContent);
    }
    
}
function removeTooltip() {

    try {
        tooltipContent.style.visibility = 'hidden';
        tooltipContent.style.opacity = '0';
        setTimeout(() => {
            if (tooltipContent) {
                document.body.removeChild(tooltipContent);
                tooltipContent = null;
            }
        }, 300);
        
    } catch (error) {
        
    }
    
}

export function highlightIfNeeded(target)
{
    var rect = target.getBoundingClientRect();
    var text =target.querySelector('.topRow');

    console.log("TEST-GOT TO FILE");
    
    text.classList.add('highlight');


    target.addEventListener('mouseenter', (event) => {
        createTooltip();
        tooltipContent.style.visibility = 'visible';
        tooltipContent.style.opacity = '1';
    });

    document.addEventListener('mousemove', (event) => {

        if (!tooltipContent) return;

        const tooltipX = event.clientX + 10; // Offset from the cursor
        const tooltipY = event.clientY + 10;

        tooltipContent.style.left = `${tooltipX + window.scrollX}px`;
        tooltipContent.style.top = `${tooltipY + window.scrollY}px`;

        

    });

    target.addEventListener('mouseleave', () => {
        
        removeTooltip();
    });
}

