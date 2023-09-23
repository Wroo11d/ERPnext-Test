frappe.provide('frappe.ui.toolbar');

frappe.ui.toolbar.add_navbar_item = function () {
    const content = [
        {
            name:"Customers",
            link:"http://127.0.0.1:8000/app/customer",
            icon:"#icon-customer"
        },
        {
            name:"Subscription",
            link:"http://127.0.0.1:8000/app/subscription",
            icon:"#icon-buying"
        },
        {
            name:"Sales Invoice",
            link:"http://127.0.0.1:8000/app/sales-invoice",
            icon:"#icon-sell"
        }
    ];
    
    // Target the sidebar section

    const sidebar = document.querySelector('[data-title="Public"]'); //${".classname}
    if (!sidebar) {
        alert('sidebar not found'); // Alert if sidebar is not found
        return;
    }

    function createItem(name, link, icon) {
        return (`
        <div class="sidebar-item-container is-draggable" item-parent="" item-name=${name} item-public="1" item-is-hidden="0">
                     <div class="desk-sidebar-item standard-sidebar-item">
                         <a href=${link} class="item-anchor" title=${name}>
                             <span class="sidebar-item-icon" item-icon="getting-started"><svg class="icon  icon-md" style="">
                 <use class="" href=${icon}></use>
             </svg></span>
                             <span class="sidebar-item-label">${name}<span>
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

    content.forEach(element => {
        // Create new sidebar item
        const newItem = createItem(element.name, element.link, element.icon);
        // Add the new item at the end
        sidebar.insertAdjacentHTML('beforeend', newItem);
    });

}

// Wait for the DOM content to be fully loaded before calling the function
document.addEventListener('DOMContentLoaded', (event) => {
    // You can adjust the delay as needed
    setTimeout(frappe.ui.toolbar.add_navbar_item, 2000); // 2000 milliseconds = 2 seconds
})

