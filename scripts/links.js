const baseURL = "https://gshaymond.github.io/wdd230/";
const linksURL = baseURL + "data/links.json";

async function getLinks() {
        const response = await fetch(linksURL);
        const data = await response.json();
        displayLinks(data);
    }
    
    function displayLinks(weeks) {
        const linksContainer = document.getElementById('links-container'); // Make sure your HTML has this container
    
        weeks.forEach(week => {
        // Create a section for each week
        const weekSection = document.createElement('section');
        weekSection.classList.add('week-section');
    
        // Create a heading for the week
        const weekHeading = document.createElement('h2');
        weekHeading.textContent = week.week;
        weekSection.appendChild(weekHeading);
    
        // Create a list for the links
        const linksList = document.createElement('ul');
    
        week.links.forEach(link => {
            const listItem = document.createElement('li');
            const anchor = document.createElement('a');
            anchor.href = baseURL + link.url;
            anchor.textContent = link.title;
            listItem.appendChild(anchor);
            linksList.appendChild(listItem);
        });
    
        weekSection.appendChild(linksList);
        linksContainer.appendChild(weekSection);
        });
  }
  
  getLinks();