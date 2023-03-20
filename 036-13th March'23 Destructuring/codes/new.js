const linkedinRegex = /^https:\/\/www\.linkedin\.com\/in\/[a-zA-Z0-9_-]{5,30}[a-zA-Z0-9]$/;

function validateLinkedinProfileUrl(url) {
  if (linkedinRegex.test(url)) {
    console.log(`${url} is a valid LinkedIn profile URL.`);
  } else {
    console.log(`${url} is not a valid LinkedIn profile URL.`);
  }
}

validateLinkedinProfileUrl('https://www.linkedin.com/in/johndoe');
validateLinkedinProfileUrl('https://www.linkedin.com/in/john_doe-123');
validateLinkedinProfileUrl('https://www.linkedin.com/in/johndoe-');
validateLinkedinProfileUrl('https://www.linkedin.com/in/johndoe-123456789012345678901234567890');
