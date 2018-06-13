$('#submit').on('click', createNewRow);

function createNewRow() {
    let firstNameInput =  $('#firstName');
    let lastNameInput = $('#lastName');
    let scoreInput = $('#score');
    if (firstNameInput.val() === '' || lastNameInput.val() === '' || scoreInput.val() === '') {
        return;
    }
    $('tbody').append($('<tr>')
        .append($('<td>').text(('0' + ($('tbody tr').length)).slice(-2)))
        .append($('<td>').text(firstNameInput.val()))
        .append($('<td>').text(lastNameInput.val()))
        .append($('<td>').text(scoreInput.val())));
    firstNameInput.val('');
    lastNameInput.val('');
    scoreInput.val('');
    calculateAverage();
}

function calculateAverage() {
    let allItems = $('tbody tr');
    let sum = 0;
    for (let i = 1; i < allItems.length; i++) {
        sum += Number($(allItems[i]).find('td:last-child').text());
    }
    let average = sum / (allItems.length - 1);
    $('.result').text(`Average score from ${('0' + (allItems.length - 1)).slice(-2)} participants: ${average.toFixed(2)}`);
}