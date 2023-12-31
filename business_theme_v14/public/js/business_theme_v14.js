frappe.provide('frappe.ui.toolbar');

frappe.ui.toolbar.add_navbar_item = function() {
    alert('Function add_navbar_item is called'); // Alert when function is called
    console.log("--------------------------\n-------------------------");
    // Target the navbar section
    
    documen.getElemetnById("avbar-breadcrumbs").append("<li>heyyyyyyyyyyyyyyyyyyyyyy</li>");

    const navbar = document.getElementById("navbar-breadcrumbs"); //${".classname}
    if (!navbar) {
        alert('Navbar not found'); // Alert if navbar is not found
        return;
    }

    alert('Navbar found'); // Alert if navbar is found
    
    
    // Create new navbar items
    const newItem = `
        <li id="whatever">
            <a href="http://www.erpnext.com">New Item 1</a>
        </li>
        <li>
            <a href="http://www.erpnext.com">New Item 2</a>
        </li>
        <li>
            <a href="http://www.erpnext.com">New Item 3</a>
        </li>
    `;
    
    // Add the new items right after the logo
    navbar.insertAdjacentHTML('afterbegin', newItem);
    alert('Navbar items added'); // Alert after adding navbar items
    
}

// Wait for the DOM content to be fully loaded before calling the function
document.addEventListener('DOMContentLoaded', (event) => {
    // You can adjust the delay as needed
    setTimeout(frappe.ui.toolbar.add_navbar_item, 2000); // 2000 milliseconds = 2 seconds
});

