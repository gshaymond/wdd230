const baseURL = "https://gshaymond.github.io/wdd230/";
const linksURL = baseURL + "data/links.json";

async function getLinks() {
  try {
    const response = await fetch(linksURL);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    displayLinks(data.weeks);
  } catch (error) {
    console.error('Error fetching the links:', error);
  }
}

function displayLinks(weeks) {
  const linksContainer = document.getElementById('links-container');
  if (!linksContainer) {
    console.error('No container found with ID "links-container"');
    return;
  }

  weeks.forEach(week => {
    const weekSection = document.createElement('section');
    weekSection.classList.add('week-section');

    const weekHeading = document.createElement('h2');
    weekHeading.textContent = week.week;
    weekSection.appendChild(weekHeading);

    const linksList = document.createElement('ul');
    linksList.classList.add('horizontal-links');

    week.links.forEach(link => {
      const listItem = document.createElement('li');
      listItem.classList.add('link-item');

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