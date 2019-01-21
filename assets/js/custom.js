/*!
 * Mama's Noodle House - mamasnoodle.com
 * (c) 2019 Jianxing Cai
 * Released under the GPL License.
 */
var vm = new Vue({
	el: "#body-wrapper",
	data: {
		picked: "",
        cart: [
            { 
                name: 'Scallion Pancake',
                detail: '葱油饼', 
                price: 2.00,
                img: 'assets/img/products/product-pancake.jpg',
                type: "Appetizer"
            },
            { 
                name: 'Curry Fish Ball',
                detail: '咖喱鱼蛋', 
                price: 2.00,
                img: 'assets/img/products/product-fishball.jpg',
                type: "Appetizer"
            },
            { 
                name: 'Braised Beef Stew Noodle Soup',
                detail: '红烧牛腩面', 
                price: 6.00,
                type: "Noodle"
            },
        ],
        menu: [
        { 
            name: 'Scallion Pancake',
            detail: '葱油饼', 
            price: 2.00,
            img: 'assets/img/products/product-pancake.jpg',
            type: "Appetizer"
        },
        { 
            name: 'Curry Fish Ball',
            detail: '咖喱鱼蛋', 
            price: 2.00,
            img: 'assets/img/products/product-fishball.jpg',
            type: "Appetizer"
        },
        { 
            name: 'Fried Pork Dumpling',
            detail: '煎饺/锅贴', 
            price: 3.50,
            img: 'assets/img/products/product-fdumpling.jpg',
            type: "Appetizer"
        },
        { 
            name: 'Soy Sauce Egg',
            detail: '卤水蛋', 
            price: 0.50,
            img: 'assets/img/products/product-soyegg.jpg',
            type: "Appetizer"
        },
        { 
            name: 'Vegetables in Oyster Sauce',
            detail: '蚝油菜心', 
            price: 3.5,
            img: 'assets/img/products/product-veg.jpg',
            type: "Appetizer"
        },
        { 
            name: 'Bok Choy w. Garlic',
            detail: '蒜蓉白菜', 
            price: 6.00,
            img: 'assets/img/products/product-bokchoy.jpg',
            type: "Appetizer"
        },
        { 
            name: 'Shrimp Dumplings Soup (10)',
            detail: '鲜虾净云吞', 
            price: 5.00,
            type: "Dumpling"
        },
        { 
            name: 'Dumpling Noodle Soup',
            detail: '水饺汤面', 
            price: 5.00,
            type: "Dumpling"
        },
        { 
            name: 'Shrimp Dumpling Noodle Soup',
            detail: '鲜虾云吞汤面', 
            price: 5.00,
            type: "Dumpling"
        },
        { 
            name: 'Wonton & Dumpling Noodle Soup',
            detail: '云吞水饺汤面', 
            price: 5.00,
            type: "Dumpling"
        },
        { 
            name: 'Hot & Spicy Wonton (8)',
            detail: '双酱鲜虾云吞 Mixed pork & shrimp w. sezchuan pepper', 
            price: 6.00,
            type: "Dumpling"
        },
        { 
            name: 'Bok Choy Plain Dumplings (8)',
            detail: '白菜净水饺', 
            price: 5.00,
            type: "Dumpling"
        },
        { 
            name: 'Duk Mandoo Gook Rice Cake Dumpling Soup',
            detail: '年糕饺子汤', 
            price: 6.00,
            type: "Dumpling"
        },
        { 
            name: 'Mandoo Ramen Korean Style',
            detail: '拉面饺子 Spicy ramen soup w. dumplings', 
            price: 6.00,
            type: "Dumpling"
        },
        { 
            name: 'House Special MaMa Noodle Soup',
            detail: '特色妈妈面 Beef stew, fish ball, egg & minced pork paste', 
            price: 7.00,
            type: "Noodle"
        },
        { 
            name: 'Braised Beef Stew Noodle Soup',
            detail: '红烧牛腩面', 
            price: 6.00,
            type: "Noodle"
        },
        { 
            name: 'Curry Fish Ball Noodle Soup',
            detail: '咖喱鱼蛋汤面', 
            price: 5.00,
            type: "Noodle"
        },
        { 
            name: 'Mixed Combinations Noodle Soup',
            detail: '素什锦汤面', 
            price: 5.00,
            type: "Noodle"
        },
        { 
            name: 'Beef Ball Noodle Soup',
            detail: '牛丸汤面 (Choose Ho Fun, Mei Fun, Potato Noole, or Regular Noodle)', 
            price: 6.00,
            type: "Noodle"
        },
        { 
            name: 'Curry Chicken Noodle Soup',
            detail: '咖喱鸡面', 
            price: 6.00,
            type: "Noodle"
        },
        { 
            name: 'Curry Shrimp Noodle Soup',
            detail: '咖喱虾面', 
            price: 6.00,
            type: "Noodle"
        },
        { 
            name: 'Curry Beef Stew Noodle Soup',
            detail: '咖喱牛腩面', 
            price: 6.00,
            type: "Noodle"
        },
        { 
            name: 'Curry Fish Ball & Shrimp/Chicken Noodle Soup',
            detail: '咖喱鱼蛋虾面/鸡面 (Choose Ho Fun, Mei Fun, Potato Noole, or Regular Noodle)', 
            price: 6.00,
            type: "Noodle"
        },
        { 
            name: 'Beef Stew Noodle Soup',
            detail: '牛腩汤面', 
            price: 6.00,
            type: "Noodle"
        },
        { 
            name: 'Beef Stew w. Minced Pork Paste Lo Mein',
            detail: '牛腩肉酱捞面', 
            price: 6.00,
            type: "Lomein"
        },
        { 
            name: 'Fish Ball Lo Mein',
            detail: '鱼丸捞面', 
            price: 5.00,
            type: "Lomein"
        },
        { 
            name: 'Wonton Lo Mein',
            detail: '云吞捞面', 
            price: 5.00,
            type: "Lomein"
        },
        { 
            name: 'Dumplings Lo Mein',
            detail: '水饺捞面', 
            price: 5.00,
            type: "Lomein"
        },
        { 
            name: 'Beef Stew Lo Mein',
            detail: '牛腩捞面', 
            price: 6.00,
            type: "Lomein"
        },
        { 
            name: 'Beef Ball Lo Mein',
            detail: '牛丸捞面', 
            price: 6.00,
            type: "Lomein"
        },
        { 
            name: 'Fish Ball & Beef Ball Lo Mein',
            detail: '双丸捞面', 
            price: 6.00,
            type: "Lomein"
        },
        { 
            name: 'Japanese Chae (Chicken/Shrimp/Vegetable)',
            detail: '韩式炒粉丝 (鸡/虾/蔬菜)', 
            price: 6.00,
            type: "Lomein"
        },
        { 
            name: 'Pad Thai Noodle',
            detail: '泰式炒河粉', 
            price: 6.00,
            type: "Thai"
        },
        { 
            name: 'Tom Yum Soup',
            detail: '冬阴汤', 
            price: 3.00,
            type: "Thai"
        },
        { 
            name: 'Singapore Mei Fun',
            detail: '星州炒米粉', 
            price: 6.00,
            type: "Thai"
        },
        { 
            name: 'Basil Chicken Ho Fun',
            detail: '九层塔鸡炒河粉', 
            price: 6.00,
            type: "Thai"
        },
        { 
            name: 'Basil Shrimp Ho Fun',
            detail: '九层塔虾炒河粉', 
            price: 6.00,
            type: "Thai"
        },
        { 
            name: 'Special Minced Pork Paste',
            detail: '特色炸酱面 (鸡蛋，肉汤酱)', 
            price: 6.00,
            type: "Thai"
        },
        { 
            name: 'Minced Pork Noodle',
            detail: '臊子面', 
            price: 5.50,
            type: "Szechuan"
        },
        { 
            name: 'Hot Pot Style Noodle',
            detail: '秘制火锅粉', 
            price: 5.50,
            type: "Szechuan"
        },
        { 
            name: 'Home Style Hot & Sour Soup',
            detail: '农家酸辣系列', 
            price: 5.50,
            type: "Szechuan"
        },
        { 
            name: 'Stewed Chicken Noodle Soup',
            detail: '三鲜鸡汤面', 
            price: 5.50,
            type: "Szechuan"
        },
        { 
            name: 'Hot Pot Chicken',
            detail: '水煮鸡', 
            price: 8.50,
            type: "Szechuan"
        },
        { 
            name: 'Hot Pot Shrimp',
            detail: '水煮虾', 
            price: 8.50,
            type: "Szechuan"
        },
        { 
            name: 'Hot Pot Fish',
            detail: '水煮鱼', 
            price: 10,
            type: "Szechuan"
        },
        { 
            name: 'Coca Cola',
            detail: '可口可乐', 
            price: 1.00,
            type: "Drinks"
        },
        { 
            name: 'Pepsi',
            detail: '百事可乐', 
            price: 1.00,
            type: "Drinks"
        },
        { 
            name: 'Fender',
            detail: '芬达橙汁', 
            price: 1.00,
            type: "Drinks"
        },
        ],
        modal: [],
   },
   methods: {
        addtoCart(index) {
            var pushdata = this.menu[index]
            this.cart.push(pushdata)
        },
        deleteItem(index){
            this.cart.splice(index,1);
        },
        addtoSelected(index) {
            var selecteddata = this.menu[index]
            this.modal = [selecteddata]
        },
        pickSize(index,s) {
        	var selecteddata = this.menu[index+s]
            this.modal = [selecteddata]
        },
        SelectedtoCart() {

        },
    },
   computed: {
        getTotal(){
            var _itemList=this.cart.filter(function (val) { return val }),orderTotal=0;
            for(var i=0,len=_itemList.length;i<len;i++){
                orderTotal+=_itemList[i].price;
                }
            var tax = 0.08875*orderTotal;
            var totalPrice = orderTotal+tax;
            
            return {totalNumber:_itemList.length,orderTotal:orderTotal.toFixed(2),tax:tax.toFixed(2),totalPrice:totalPrice.toFixed(2)}
        },
    },
})