document.addEventListener('DOMContentLoaded', function() {
    // View toggle functionality
    const gridViewBtn = document.getElementById('grid-view-btn');
    const listViewBtn = document.getElementById('list-view-btn');
    const publicationsContainer = document.getElementById('publications-container');
    
    // Set initial view state
    publicationsContainer.classList.add('grid-view-active');
    
    gridViewBtn.addEventListener('click', function() {
        publicationsContainer.classList.remove('list-view-active');
        publicationsContainer.classList.add('grid-view-active');
        
        listViewBtn.classList.remove('active');
        gridViewBtn.classList.add('active');
    });
    
    listViewBtn.addEventListener('click', function() {
        publicationsContainer.classList.remove('grid-view-active');
        publicationsContainer.classList.add('list-view-active');
        
        gridViewBtn.classList.remove('active');
        listViewBtn.classList.add('active');
    });
    
    // Sort dropdown functionality
    const sortBtn = document.getElementById('sort-btn');
    const sortDropdown = document.getElementById('sort-dropdown');
    
    sortBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        sortDropdown.classList.toggle('show');
    });
    
    // Close dropdown when clicking outside
    document.addEventListener('click', function() {
        sortDropdown.classList.remove('show');
    });
    
    // Prevent dropdown from closing when clicking inside it
    sortDropdown.addEventListener('click', function(e) {
        e.stopPropagation();
    });
    
    // Sort dropdown option selection
    const sortOptions = document.querySelectorAll('.dropdown-item');
    
    sortOptions.forEach(function(option) {
        option.addEventListener('click', function() {
            // Remove active class from all options
            sortOptions.forEach(opt => opt.classList.remove('active'));
            
            // Add active class to selected option
            this.classList.add('active