const newFormHandler = async (event) => {
  event.preventDefault();
  console.log('clicked');

  const quoteId = event.target.getAttribute('data-id');
  

  if (quoteId) {
    const response = await fetch(`/api/saved`, {
      method: 'POST',
      body: JSON.stringify({ quote_id: quoteId }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/inspiration');
    } else {
      alert('Failed to save quote');
    }
  }
};

document
  .querySelector('.save-quote')
  .addEventListener('click', newFormHandler);

