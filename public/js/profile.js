const newFormHandler = async (event) => {
  event.preventDefault();

  const quote = document.querySelector('#quote-name').value.trim();
  const author = document.querySelector('#speaker-author').value.trim();
  const comment = document.querySelector('#comment-desc').value.trim();

  if (quote && author) {
    const response = await fetch(`/api/quotes`, {
      method: 'POST',
      body: JSON.stringify({ quote, author }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/portfolio');
    } else {
      alert('Failed to create quote');
    }
  }
};

const delButtonHandler = async (event) => {
  
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/quotes/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/portfolio');
    } else {
      alert('Failed to delete project');
    }
  }
};

document
  .querySelector('#post-quote')
  .addEventListener('submit', newFormHandler);

 document
   .querySelector('.quote-list')
   .addEventListener('click', delButtonHandler);
