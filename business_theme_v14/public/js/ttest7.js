frappe.provide('frappe.ui.toolbar');

frappe.ui.toolbar.add_navbar_item = function() {
    alert('Function add_navbar_item is called'); // Alert when function is called
    console.log("--------------------------\n-------------------------");
    // Target the sidebar section
    
    const sidebar = document.querySelector('[data-title="Public"]'); //${".classname}
    if (!sidebar) {
        alert('sidebar not found'); // Alert if sidebar is not found
        return;
    }

    alert('sidebar found'); // Alert if sidebar is found
    
    function createItem(name,link){
        return(`
        <div class="sidebar-item-container is-draggable" item-parent="" item-name=${name} item-public="1" item-is-hidden="0">
                     <div class="desk-sidebar-item standard-sidebar-item selected">
                         <a href=${link} class="item-anchor" title="Home">
                             <span class="sidebar-item-icon" item-icon="getting-started"><svg class="icon  icon-md" style="">
                 <use class="" href="#icon-getting-started"></use>
             </svg></span>
                             <span class="sidebar-item-label">Home<span>
                         </span></span></a>
                         <div class="sidebar-item-control"><button class="btn btn-secondary btn-xs drag-handle" title="Drag"><svg class="icon  icon-xs" style="">
                 <use class="" href="#icon-drag"></use>
             </svg></button><div class="btn btn-secondary btn-xs setting-btn dropdown-btn" title="Setting">
                     <svg class="icon  icon-xs" style="">
                 <use class="" href="#icon-dot-horizontal"></use>
             </svg>
                 </div>
                 <div class="dropdown-list hidden"><div class="dropdown-item" title="Edit Workspace">
                         <span class="dropdown-item-icon"><svg class="icon  icon-sm" style="">
                 <use class="" href="#icon-edit"></use>
             </svg></span>
                         <span class="dropdown-item-label">Edit</span>
                     </div><div class="dropdown-item" title="Duplicate Workspace">
                         <span class="dropdown-item-icon"><svg class="icon  icon-sm" style="">
                 <use class="" href="#icon-duplicate"></use>
             </svg></span>
                         <span class="dropdown-item-label">Duplicate</span>
                     </div><div class="dropdown-item" title="Hide Workspace">
                         <span class="dropdown-item-icon"><svg class="icon  icon-sm" style="">
                 <use class="" href="#icon-hide"></use>
             </svg></span>
                         <span class="dropdown-item-label">Hide</span>
                     </div><div class="dropdown-item" title="Delete Workspace">
                         <span class="dropdown-item-icon"><svg class="icon  icon-sm" style="">
                 <use class="" href="#icon-delete-active"></use>
             </svg></span>
                         <span class="dropdown-item-label">Delete</span>
                     </div></div><span class="drop-icon hidden"><svg class="icon  icon-sm" style="">
                 <use class="" href="#icon-small-down"></use>
             </svg></span></div>
                     </div>
                     <div class="sidebar-child-item nested-container"></div>
                 </div>
         `)
    }
    // Create new sidebar items
    const newItem1 = createItem("Home1","/app/home1");
    
    const newItem2 = createItem("Home2","/app/home2");
    
    const newItem3 = createItem("Home3","/app/home3");
    
    // Add the new items right after the logo
    sidebar.insertAdjacentHTML('beforeend', newItem1);
    sidebar.insertAdjacentHTML('beforeend', newItem2);
    sidebar.insertAdjacentHTML('beforeend', newItem3);
    alert('sidebar items added'); // Alert after adding sidebar items
    
}

// Wait for the DOM content to be fully loaded before calling the function
document.addEventListener('DOMContentLoaded', (event) => {
    // You can adjust the delay as needed
    setTimeout(frappe.ui.toolbar.add_navbar_item, 2000); // 2000 milliseconds = 2 seconds
})
