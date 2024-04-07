document.addEventListener('DOMContentLoaded', function() {
    // Menu Toggle
    document.getElementById('menu-toggle').addEventListener('click', function() {
        var menuLinks = document.getElementById('menu-links');
        menuLinks.classList.toggle('hidden');
    });

    // Add to Cart
    document.querySelectorAll('.add-to-cart').forEach(function(button) {
        button.addEventListener('click', function() {
            var productName = this.previousElementSibling.previousElementSibling.textContent;
            // Ürün sepete ekleme mantığı burada olacak, şimdilik sadece uyarı
            alert(productName + " sepete eklendi!");
            // Sepet sayfasına yönlendirme
            window.location.href = 'cart.html';
        });
    });

    // Registration Form Submission
    var registerForm = document.getElementById('register-form');
    if (registerForm) { // Form varsa işlem yap
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            var name = document.getElementById('name').value;
            var email = document.getElementById('email').value;
            var password = document.getElementById('password').value;
            
            console.log('Registered with:', name, email, password);
            
            // Kayıt işlemi başarılı ise kullanıcıyı giriş sayfasına yönlendir.
            window.location.href = 'login.html';
        });
    }
});


// Sepet dizisi (örnek olarak; gerçek uygulamada bu bilgi sunucudan alınabilir)
var cart = JSON.parse(localStorage.getItem('cart')) || [];

document.addEventListener('DOMContentLoaded', function() {
    // Kitap sayfalarındaki "Sepete Ekle" işlevselliği
    var addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            var bookTitle = this.closest('.book-item').querySelector('.book-title').textContent;
            cart.push(bookTitle);
            localStorage.setItem('cart', JSON.stringify(cart));
            alert(bookTitle + " sepete eklendi!");
            window.location.href = 'cart.html';
        });
    });

    // Cart.html'deki sepet öğelerini görüntüleme
    if(window.location.pathname.endsWith('cart.html')) {
        var cartItemsContainer = document.getElementById('cart-items');
        cart.forEach(function(item) {
            var div = document.createElement('div');
            div.classList.add('cart-item');
            div.textContent = item;
            cartItemsContainer.appendChild(div);
        });
    }

    // Checkout işlevselliği (Örnek)
    var checkoutButton = document.getElementById('checkout-button');
    if(checkoutButton) {
        checkoutButton.addEventListener('click', function() {
            alert('Checkout işlemine yönlendiriliyorsunuz.');
            // Checkout işlemi burada gerçekleştirilecek
        });
    }
});
