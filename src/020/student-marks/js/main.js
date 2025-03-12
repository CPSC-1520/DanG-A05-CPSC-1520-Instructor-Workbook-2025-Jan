import '@picocss/pico/css/pico.css';
import { populateAbout } from './about-ui';

// Setup of info about the project/website
fetch('./ReadMe.md')
    .then(response => response.text())
    .then(populateAbout);


