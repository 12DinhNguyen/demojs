class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    getDetails() {
        return `${this.name} - $${this.price}`;
    }
}

// --- Electronics kế thừa Product ---
class Electronics extends Product {
    constructor(name, price, warranty) {
        super(name, price);
        this.warranty = warranty;
    }

    // Override (đa hình)
    getDetails() {
        return `${this.name} - $${this.price} - Bảo hành: ${this.warranty} tháng`;
    }
}

// --- Clothing kế thừa Product ---
class Clothing extends Product {
    constructor(name, price, size) {
        super(name, price);
        this.size = size;
    }

    // Override (đa hình)
    getDetails() {
        return `${this.name} - $${this.price} - Size: ${this.size}`;
    }
}

// --- Shopping Cart (Encapsulation) ---
class ShoppingCart {
    #items = []; // private

    addItem(product) {
        this.#items.push(product);
        console.log(`Đã thêm ${product.name} vào giỏ.`);
    }

    showCart() {
        if (this.#items.length === 0) {
            console.log("Giỏ hàng trống.");
            return;
        }

        console.log("Danh sách sản phẩm:");
        this.#items.forEach((item, index) => {
            console.log(`${index + 1}. ${item.getDetails()}`);
        });
    }

    calculateTotal() {
        return this.#items.reduce((total, item) => total + item.price, 0);
    }
}

// --- Async Payment ---
function processPayment(totalAmount) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (totalAmount > 0) {
                resolve("Thanh toán thành công");
            } else {
                reject("Giỏ hàng trống, không thể thanh toán");
            }
        }, 2000);
    });
}

// --- TEST SCRIPT ---
async function runDemo() {
    try {
        const cart = new ShoppingCart();
        
        // 1. Tạo sản phẩm
        const laptop = new Electronics("Macbook", 2000, 12);
        const shirt = new Clothing("T-Shirt", 20, "L");

        // 2. Thêm vào giỏ
        cart.addItem(laptop);
        cart.addItem(shirt);

        // 3. Hiển thị giỏ
        cart.showCart();

        // 4. Tính tiền
        const total = cart.calculateTotal();
        console.log("Tổng tiền:", total);

        // 5. Thanh toán
        const result = await processPayment(total);
        console.log(result);

    } catch (error) {
        console.error("LỖI:", error);
    } finally {
        console.log("Hệ thống đóng. Hẹn gặp lại!");
    }
}

runDemo();