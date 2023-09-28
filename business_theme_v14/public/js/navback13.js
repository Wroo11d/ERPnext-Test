frappe.provide('frappe.ui.toolbar');

frappe.ui.toolbar.add_navbar_item = function() {
    alert('Function add_navbar_item is called'); // Alert when function is called
    console.log("--------------------------\n-------------------------");
    // Target the navbar section
    

    const navbar = document.querySelector(".collapse.navbar-collapse.justify-content-end"); //${".classname}
    if (!navbar) {
        alert('Navbar not found'); // Alert if navbar is not found
        return;
    }

    alert('Navbar found'); // Alert if navbar is found
    
    
    // Create new navbar items
   /* const newItem = `
    <ul class="navbar-nav">
        <li class="navbar-item">
            <a href="http://10.4.4.16:8080/app" title="Back" 
            <svg class="icon icon-md"><use href="#icon-left"></use></svg>  > 
        </li>
    </ul>
    `;*/
    const newItem = `
    <ul class="navbar-nav">
        <li class="cnav-item">
            <a href="http://127.0.0.1:8000/app"><span class="sidebar-item-icon" item-icon="getting-started"><svg class="icon  icon-md" style="color:white !important;">
                 <use class="" href="#icon-left"></use>
             </svg></span></a>
            
    </ul>
    `;
    
    // Add the new items right after the logo
    navbar.insertAdjacentHTML('afterbegin', newItem);
    alert('Navbar items added'); // Alert after adding navbar items
    
}

// Wait for the DOM content to be fully loaded before calling the function
document.addEventListener('DOMContentLoaded', (event) => {
    // You can adjust the delay as needed
    setTimeout(frappe.ui.toolbar.add_navbar_item, 2000); // 2000 milliseconds = 2 seconds
})
