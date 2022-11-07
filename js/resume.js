console.log('connected')
// Resume Download
// folkstalk.com
const resumeLink = document.getElementById('resumepdf');
resumeLink.download = 'Resume.pdf';
resumeLink.dispatchEvent(new MouseEvent('click'));