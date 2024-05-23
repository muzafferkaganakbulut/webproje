
//1 (buradaki rastgele kahve tarifi vereni bir fonksiyon olarak saydım :))
function showRandomCoffeeRecipe() {
    const coffees = [
        { name: "Türk Kahvesi", recipe: "Türk kahvesi yapımı: 1. İyi kaliteli kahve çekirdeklerini kahve öğütücüsünde un haline getirin. 2. Öğütülen kahveyi cezveye koyun. 3. Şeker ekleyin (isteğe bağlı). 4. Su ekleyin ve karıştırın. 5. Orta ateşte kaynatın. 6. Köpüklenmeye başladığında fincana dökün ve keyfini çıkarın." },
        { name: "Espresso", recipe: "Espresso yapımı: 1. Espresso makinesini hazırlayın. 2. Espresso fincanını ısıtın. 3. Öğütülmüş kahveyi portafiltere koyun ve sıkın. 4. Makineyi çalıştırın ve espresso akışını izleyin. 5. Espresso fincanına alın ve servis edin." },
        { name: "Americano", recipe: "Americano yapımı: 1. Fincana sıcak su ekleyin. 2. Espresso ekleyin. 3. İsteğe bağlı olarak süt veya krema ekleyin. 4. Karıştırın ve servis edin." },
        { name: "Latte", recipe: "Latte yapımı: 1. Espresso yapın ve bir fincana koyun. 2. Süt buharlayın. 3. Köpürtülen sütü espressonun üzerine ekleyin. 4. İsteğe bağlı olarak karamel veya vanilya şurubu ekleyin. 5. Karıştırın ve servis edin." },
        { name: "Cappuccino", recipe: "Cappuccino yapımı: 1. Espresso yapın ve bir fincana koyun. 2. Süt buharlayın ve köpürtün. 3. Köpüklü sütü espressonun üzerine ekleyin. 4. Üzerine çikolata rendesi veya kakao tozu serpin. 5. Servis edin." },
        { name: "Mocha", recipe: "Mocha yapımı: 1. Espresso yapın ve bir fincana koyun. 2. Kakao tozu ve şeker ekleyin. 3. Süt buharlayın ve espressoya ekleyin. 4. İsteğe bağlı olarak krema ekleyin. 5. Servis edin." }
    ];
    const randomIndex = Math.floor(Math.random() * coffees.length);
    const randomCoffee = coffees[randomIndex];

    alert("Bugün ne içebilirsiniz? " + randomCoffee.name + " tarifi:\n\n" + randomCoffee.recipe);

}
//2
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}
//3
window.onload = function() {
    // Sayfa tamamen yüklendikten sonra yapılacak işlemler buraya yazılır
    alert("Sayfa yenilendi!");
};
//4
function playGame(userChoice) {
    // Bilgisayarın rastgele seçim yapması
    var choices = ["taş", "kağıt", "makas"];
    var computerChoice = choices[Math.floor(Math.random() * choices.length)];

    // Kullanıcının seçimi ve bilgisayarın seçimini gösterme
    var resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "Sizin Seçiminiz: " + userChoice + "<br>Bilgisayarın Seçimi: " + computerChoice + "<br>";

    // Kazananı belirleme
    if (userChoice === computerChoice) {
        resultDiv.innerHTML += "Berabere!";
    } else if ((userChoice === "taş" && computerChoice === "makas") ||
               (userChoice === "kağıt" && computerChoice === "taş") ||
               (userChoice === "makas" && computerChoice === "kağıt")) {
        resultDiv.innerHTML += "Tebrikler, kazandınız!";
    } else {
        resultDiv.innerHTML += "Üzgünüz, bilgisayar kazandı!";
    }
}
//5
function answerYes() {
    alert("Harika! Çok memnun olduk.");
}
//6
function moveButton() {
    var button = document.getElementById("noButton");
    var moveAmount = 850; // Piksel cinsinden kaydırma miktarı
    button.style.transform = "translateX(-" + moveAmount + "px)";
}
/*
  function resetButton() {
    var button = document.getElementById("noButton");
    button.style.transform = "translateX(0)";
}

*/

/*
 function changeBackgroundColor() {
    // Rastgele bir renk oluştur (HEX formatında)
    var randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);

    // Sayfanın arka plan rengini değiştir
    document.body.style.backgroundColor = randomColor;
}
*/
//7
// Butona tıklandığında arka plan rengini değiştir
document.getElementById("changeButton").addEventListener("click", function() {
    // Rastgele bir renk oluştur (HEX formatında)
    var randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);

    // Sayfanın arka plan rengini değiştir
    document.body.style.backgroundColor = randomColor;
});

//8-9
function hesaplaFiyat() {
    var kahveTuru = document.getElementById("kahveTuru").value;
    var boyut = document.getElementById("boyut").value;
    
    var ekstraFiyat = 0;
    var ekstralar = document.getElementsByName("ekstra");
    ekstralar.forEach(function(ekstra) {
        if (ekstra.checked) {
            ekstraFiyat += parseFloat(ekstra.value);
        }
    });
    
    var fiyat = 0;
    if (kahveTuru === "Espresso") {
        fiyat += 3.50;
    } else if (kahveTuru === "Latte") {
        fiyat += 4.00;
    } else if (kahveTuru === "Americano") {
        fiyat += 3.00;
    } // Diğer kahve türlerini ekleyin
    
    if (boyut === "Küçük") {
        fiyat *= 1.0;
    } else if (boyut === "Orta") {
        fiyat *= 1.2;
    } else if (boyut === "Büyük") {
        fiyat *= 1.5;
    }
    
    fiyat += ekstraFiyat;
    
    document.getElementById("fiyat").innerText = "Toplam Fiyat: $" + fiyat.toFixed(2);
}



// İlk soruyu oluşturma
var dogruCevap = yeniSoru();
 //10
// Soru oluşturma ve ekrana yazdırma
function yeniSoru() {
    var sayi1 = rastgeleSayi(1, 10);
    var sayi2 = rastgeleSayi(1, 10);
    var islem = rastgeleIslem();
    var soruMetni = sayi1 + " " + islem + " " + sayi2 + " = ?";
    document.getElementById("soru").textContent = soruMetni;
    return islemiYap(sayi1, sayi2, islem); // Doğru cevabı döndür
}

// Kontrol işlemi
//11
document.getElementById("kontrolBtn").addEventListener("click", function() {
    var cevap = parseFloat(document.getElementById("cevapInput").value);
    var sonuc = document.getElementById("bilgi");
    if (isNaN(cevap)) {
        sonuc.textContent = "Lütfen geçerli bir sayı girin!";
    } else {
        if (cevap === dogruCevap) {
            sonuc.textContent = "Tebrikler! Doğru cevap!";
        } else {
            sonuc.textContent = "Üzgünüm, yanlış cevap. Doğru cevap: " + dogruCevap;
        }
    }
    dogruCevap = yeniSoru(); // Yeni soru oluştur ve doğru cevabı güncelle
});     
// Rastgele sayı üretme fonksiyonu
//12
function rastgeleSayi(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// Rastgele işlem seçme fonksiyonu
//13
function rastgeleIslem() {
    var islemler = ['+', '-', '*', '/'];
    return islemler[rastgeleSayi(0, 3)];
}

// İşlemi gerçekleştirme fonksiyonu
//14
function islemiYap(a, b, islem) {
    switch (islem) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            return a / b;
        default:
            return NaN;
    }
}
//15
document.getElementById("myButtond").addEventListener("click", function() {
    this.innerHTML = "Sürpriz";
    this.classList.add("");
}); 

//16
let randomNumber = Math.floor(Math.random() * 100) + 1;
        let attempts = 0;

        function checkGuess() {
            const userGuess = Number(document.getElementById('guessInput').value);
            attempts++;

            if (userGuess < 1 || userGuess > 100) {
                document.getElementById('message').textContent = "Lütfen 1 ile 100 arasında bir sayı girin.";
            } else if (userGuess < randomNumber) {
                document.getElementById('message').textContent = "Daha yüksek bir sayı tahmin edin.";
            } else if (userGuess > randomNumber) {
                document.getElementById('message').textContent = "Daha düşük bir sayı tahmin edin.";
            } else {
                document.getElementById('message').textContent = `Tebrikler! ${attempts} denemede doğru tahmin ettiniz. Sayı: ${randomNumber}`;
                // Oyunu yeniden başlatmak için rastgele yeni bir sayı oluşturun ve deneme sayısını sıfırlayın
                randomNumber = Math.floor(Math.random() * 100) + 1;
                attempts = 0;
            }

            document.getElementById('guessInput').value = ''; // Girdi alanını temizle
        }
//17
        function changeFont() {
            const fonts = ["Arial", "Courier New", "Georgia", "Times New Roman", "Verdana"];
            const randomFont = fonts[Math.floor(Math.random() * fonts.length)];
            document.getElementById('fontButton').style.fontFamily = randomFont;
        }
//jQuery

        $(document).ready(function(){
            // Sayfa yüklendiğinde çalışacak kod buraya yazılır
            $("#loading").fadeIn("slow"); // loading div'ini görünür yap
            setTimeout(function(){
                $("#loading").fadeOut("slow"); // 2 saniye sonra loading div'ini tekrar gizle
            }, 2000);
        });

        $(document).ready(function(){
            $(".image").click(function(){
                $(this).toggleClass("enlarge");
            });
        });

        $(document).ready(function(){
            $("#title").hover(function(){
                $(this).css({
                    'color': '#fff',
                    'transform': 'scale(1.05)',
                });
                $(this).animate({
                    'textShadowBlur': '10px',
                    'textShadowColor': 'rgba(255, 255, 255, 0.7)'
                }, 300);
            }, function(){
                $(this).css({
                    'color': '#333',
                    'transform': 'scale(1)',
                });
                $(this).animate({
                    'textShadowBlur': '0',
                    'textShadowColor': 'rgba(255, 255, 255, 0)'
                }, 300);
            });
        });

        $(document).ready(function(){
            $("#buz").hover(function(){
                $(this).css({
                    'color': '#B3E0F2',
                    'transform': 'scale(1.05)',
                });
                $(this).animate({
                    'textShadowBlur': '10px',
                    'textShadowColor': 'rgba(255, 255, 255, 0.7)'
                }, 300);
            }, function(){
                $(this).css({
                    'color': '#2E75B6',
                    'transform': 'scale(1)',
                });
                $(this).animate({
                    'textShadowBlur': '0',
                    'textShadowColor': 'rgba(255, 255, 255, 0)'
                }, 300);
            });
        });
        

        $(document).ready(function(){
            $("#tatli").hover(function(){
                $(this).css({
                    'color': '#FF1493',
                    'transform': 'scale(1.1)',
                });
                $(this).animate({
                    'rotation': 360
                }, {
                    step: function(now, fx) {
                        $(this).css('transform', 'rotate(' + now + 'deg)');
                    },
                    duration: 1000,
                    easing: 'linear',
                    queue: false
                });
            }, function(){
                $(this).css({
                    'color': '#FF69B4',
                    'transform': 'scale(1)',
                });
                $(this).stop().css('transform', '');
            });
        });
    

        
        $(document).ready(function(){
            let points = 0;
            const $playArea = $("#play-areas");
        
            function createBalloon() {
                const balloon = $('<div class="balloon"></div>');
                const playAreaWidth = $playArea.width();
                const playAreaHeight = $playArea.height();
        
                const newLeft = Math.random() * (playAreaWidth - 50);
                const newTop = Math.random() * (playAreaHeight - 50);
        
                balloon.css({
                    left: newLeft,
                    top: newTop
                });
        
                balloon.click(function() {
                    $(this).remove();
                    points++;
                    $("#points").text(points);
                    createBalloon();
                });
        
                $playArea.append(balloon);
        
                setTimeout(function() {
                    balloon.fadeOut(500, function() {
                        $(this).remove();
                        if ($(".balloon").length === 0) {
                            createBalloon();
                        }
                    });
                }, 2000);
            }
        
            createBalloon();
        });
        