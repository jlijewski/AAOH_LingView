//import  {getMediaFilePath} from '~./jsx/App/Stories/Story/Story.jsx'
import  dataEmitter  from './emitter/dataEmitter.js';

//const fs = require('fs');
//const path = require('path');
const dir = "/data/csv_files";

// function searchFiles(dir, fileName) {
//     fs.readdir(dir, (err, files) => {
//       if (err) {
//         console.error(`Error reading directory ${dir}:`, err);
//         return;
//       }
  
//       files.forEach(file => {
//         const fullPath = path.join(dir, file);
//         fs.stat(fullPath, (err, stats) => {
//           if (err) {
//             console.error(`Error stating file ${fullPath}:`, err);
//             return;
//           }
  
//            if (stats.isFile() && path.basename(fullPath) === fileName) {
//             console.log(`File found: ${fullPath}`);
//           }
//         });
//       });
//     });
//   }
  



let tooltipContent;
let currentTarget;
let currTitle;
const testEmit = dataEmitter;
try {
    dataEmitter.on('newStory', (data) => {
        console.log('Data received:', data);
        
        currTitle = data + ".csv";
      });
    
} catch (error) {
    
}


console.log(testEmit);

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
    //const index =  import('~./data/index.json').default;
   searchFiles(dir,currTitle);

    var rect = target.getBoundingClientRect();
    var text =target.querySelector('.topRow');

    
    
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

