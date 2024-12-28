function redirectToProduct(productId) {
    console.log('Redirecting to:', productId);  // Log product ID for testing
    
    const productLinks = {
        'product1': 'https://joshuamediaministries.org/product/face-face-appearances-jesus-book-english/',
        'product2': 'https://joshuamediaministries.org/product/inheritance-by-lineage-2/',
        'product3': 'https://joshuamediaministries.org/product/the-heart-paying-the-price-currency-of-heaven-book/',
        'product4': 'https://joshuamediaministries.org/product/book-the-warrior-the-wife-and-the-wedding/',
        'product5': 'https://joshuamediaministries.org/product/4thwatchprayerbook/',
        'product6': 'https://joshuamediaministries.org/product/audiobook-victory-over-pride-triumph-in-humility/',
        'product7': 'https://joshuamediaministries.org/product/book-the-importance-of-dreams/',
        'product8': 'https://joshuamediaministries.org/product/you-were-made-a-king/',
    };

    if (productLinks[productId]) {
        // Open the product link in a new tab
        window.open(productLinks[productId], '_blank');
    } else {
        console.error("Product link not found for:", productId);
    }
}

