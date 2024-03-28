// Sample menu data
const menu = {
    Starters: [
        {name: "Garlic Bread", price: 60},
        {name: "Bruschetta", price: 80}
    ],    
    MainCourses: [
        {name: "Margherita Pizza", price: 100}, 
        {name: "Spaghetti Carbonara", price: 130}
    ],
    Desserts: [
        {name: "Tiramisu", price: 110},
        {name: "Cheesecake", price: 60}
    ]
};

// Function to display menu items by category
function displayMenuItems(menu) {
    // Get the menu container element from the HTML
    const menuContainerElement = document.getElementById('menu');
    // Loop through each category and its items in the menu object
    for (const [category, items] of Object.entries(menu)) {
        // Create an element to represent the category
        const categoryHeaderElement = document.createElement('h3');
        // Set the text content of the category element to the category name
        categoryHeaderElement.textContent = category;
        // Append the category element to the menu container
        menuContainerElement.appendChild(categoryHeaderElement);

        // Create an element to represent a list of items
        const categoryItemListElement = document.createElement('ul');
        // Append a list of items element to the menu container
        menuContainerElement.appendChild(categoryItemListElement);

        // Loops through the items in the category and creates list items
        for (let i = 0; i < items.length; i++) {
            const menuItem = items[i];
            // Create a list item element
            const menuItemElement = document.createElement('li');
            // Set the text content of the list item element to the item name and price
            menuItemElement.textContent = `${menuItem.name}`;
            // Attach a click event listener to the list item to add it to the order
            menuItemElement.addEventListener('click', (event) => {
                console.log(`${menuItem.name} added to the order...`);
                addToOrder(menuItem.name, menuItem.price); // Pass the clicked item to addToOrder function
            });
            // Append the list item to the list of items
            categoryItemListElement.appendChild(menuItemElement);
        }
    }
}

// Variable that stores the total order price:
let total = 0;

// Callback function for adding an item to the order
function addToOrder(itemName, itemPrice) {
    // Get the order items list and the order total element from the HTML
    const orderItemsElement = document.getElementById('order-items');
    const orderTotalElement = document.getElementById('order-total');
    // Create a list item for the order
    const orderListItemElement = document.createElement('li');
    // Set the text content of the list item to the item name
    orderListItemElement.textContent = `${itemName} - R${itemPrice}`;
    // Append the list item to the order items list
    orderItemsElement.appendChild(orderListItemElement)
    // Calculate and update the total price
    total += itemPrice;
    orderTotalElement.textContent = `${total.toFixed(2)}`;
}

// Function to initialize the menu system
function initMenuSystem(menu) {
    // Call the function to display menu items
    displayMenuItems(menu);
}

// Start the menu system by calling the init function
initMenuSystem(menu);
