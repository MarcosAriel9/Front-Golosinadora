
// Make a request to the API endpoint
fetch('https://example.com/api/delivery-person')
  .then(response => response.json())
  .then(data => {
    // Store the data in the cache
    // (using PWA techniques such as caching and service workers)

    // Retrieve the data from the cache
    // (using PWA techniques such as caching and service workers)

    // Display the data in the desired format using DOM manipulation
    
    const tableRow = document.getElementById('delivery-table');
    const imageCell = document.createElement('td');
    const image = document.createElement('img');
    image.src = data.photoUrl;
    image.alt = 'Foto del repartidor';
    imageCell.appendChild(image);
    tableRow.appendChild(imageCell);

    const nameCell = document.createElement('td');
    nameCell.textContent = data.name;
    tableRow.appendChild(nameCell);

    const phoneCell = document.createElement('td');
    phoneCell.textContent = data.phone;
    tableRow.appendChild(phoneCell);

    const emailCell = document.createElement('td');
    emailCell.textContent = data.email;
    tableRow.appendChild(emailCell);

    const actionsCell = document.createElement('td');
    const viewLink = document.createElement('a');
    viewLink.href = '#';
    const viewIcon = document.createElement('i');
    viewIcon.classList.add('fas', 'fa-eye');
    viewLink.appendChild(viewIcon);
    actionsCell.appendChild(viewLink);

    const editLink = document.createElement('a');
    editLink.href = '#';
    const editIcon = document.createElement('i');
    editIcon.classList.add('fas', 'fa-edit');
    editLink.appendChild(editIcon);
    actionsCell.appendChild(editLink);

    const deleteLink = document.createElement('a');
    deleteLink.href = '#';
    const deleteIcon = document.createElement('i');
    deleteIcon.classList.add('fas', 'fa-trash');
    deleteLink.appendChild(deleteIcon);
    actionsCell.appendChild(deleteLink);

    tableRow.appendChild(actionsCell);

    const tableBody = document.querySelector('tbody');
    tableBody.appendChild(tableRow);
  })
  .catch(error => {
    console.error('Error fetching delivery person data:', error);
  });
