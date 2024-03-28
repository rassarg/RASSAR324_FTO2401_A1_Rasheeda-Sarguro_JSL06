// Sample menu data (Consider fetching this data from a server in a real-world scenario)
const menu = {
    Starters: [
        {name: "Garlic Bread", price: 100},
        {name: "Bruschetta", price: 150}
    ],    
    MainCourses: [
        {name: "Margherita Pizza", price: 80}, 
        {name: "Spaghetti Carbonara", price: 95}
    ],
    Desserts: [
        {name: "Tiramisu", price: 120},
        {name: "Cheesecake", price: 65}
    ]
};

// Function to display menu items by category
function displayMenuItems(menu) {
    // Get the menu container element from the HTML
    const menuDiv = document.getElementById('menu');
    // Loop through each category and its items in the menu object
    for (const [category, items] of Object.entries(menu)) {
        // Create an element to represent the category
        const categoryElement = document.createElement('div');
        // Set the text content of the category element to the category name
        categoryElement.textContent = category;
        // Append the category element to the menu container
        menuDiv.appendChild(categoryElement);

        // Create an element to represent a list of items
        const itemListElement = document.createElement('ul');
        // Append a list of items element to the menu container
        menuDiv.appendChild(itemListElement);

        // Loop through the items in the category and create list items
        for (let i = 0; i < items.length; i++) {
            const item = items[i];
            // Create a list item element
            const listItemElement = document.createElement('li');
            // Set the text content of the list item element to the item name and price
            listItemElement.textContent = `${item.name} - $${item.price}`;
            // Attach a click event listener to the list item to add it to the order
            listItemElement.addEventListener('click', (event) => {
                console.log(`${item.name} added to the order...`);
                addToOrder(item.name, item.price); // Pass the clicked item to addToOrder function
            });
            // Append the list item to the list of items
            itemListElement.appendChild(listItemElement);
        }
    }
}

// Callback function for adding an item to the order
function addToOrder(itemName, itemPrice) {
    // Get the order items list and the order total element from the HTML
    const orderItemsElement = document.getElementById('order-items');
    const orderTotalElement = document.getElementById('order-total');
    // Create a list item for the order
    const orderListItemElement = document.createElement('li');
    // Set the text content of the list item to the item name
    orderListItemElement.textContent = `${itemName} - $${itemPrice}`;
    // Append the list item to the order items list
    orderItemsElement.appendChild(orderListItemElement)
    // Calculate and update the total price
   
    // Update the text content of the order total element with the new total
}

// Function to initialize the menu system
function initMenuSystem(menu) {
    // Call the function to display menu items
    displayMenuItems(menu);
}

// Start the menu system by calling the init function
initMenuSystem(menu);
