function showGroup(groupNumber) {
    // Hide all groups
    const allGroups = document.querySelectorAll('.card-group');
    allGroups.forEach(group => group.style.display = 'none');

    // Show the selected group
    const groupToShow = document.querySelector('.group-' + groupNumber);
    if (groupToShow) {
      groupToShow.style.display = 'block';
    }
  }

  // Initialize default view (first group visible)
  showGroup(1);
