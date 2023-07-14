<template>




    <body>
        
    <!-- header section starts  -->
    
    <header>
    
        <a href="#" class="logo"><span>Crypto</span>Tracker</a>
    
        <input type="checkbox" id="menu-bar">
        <label for="menu-bar" class="fas fa-bars"></label>
    
        <nav class="navbar">
            <a href="#home">Home</a>
            <a href="#features">Features</a>
            <a href="#about">About</a>
            <a href="#review">Review</a>
            <a href="#contact">Contact</a>
            <a></a>
            <a href="/login" class="log-btn">Login</a> <!-- V-if: userlogged in (funckija) -->
        </nav>
    
    </header>
    
    <!-- header section ends -->
    
    <!-- home section starts  -->
    
    <section class="home" id="home">
    
        <div class="content">
            <h3>best crypto <span>portfolio</span> app</h3>
            <p>Create an account and complete the verification process to secure your account.</p>
            <a href="#" class="btn">Try now!</a>
        </div>
    
        <div class="image">
            <img src="@/assets/img/landing/lp-img-4.png" alt="">
        </div>
    
    </section>
    
    <!-- home section ends -->
    
    <!-- features section starts  -->
    
    <section class="features" id="features">
    
        <h1 class="heading"> app features </h1>
    
        <div class="box-container">
    
            <div class="box">
                <img src="@/assets/img/landing/images/f-icon1.png" alt="">
                <h3>Build up your perfect crypto portfolio</h3>
                <p>We offer bunch off different crypto currencies you can choose from.</p>
                <a href="#" class="btn">Read more</a>
            </div>
  
            <div class="box">
                <img src="@/assets/img/landing/images/f-icon2.png" alt="">
                <h3>Add reminders for price changes</h3>
                <p>Add a reminders for price changes and keep track on everything.</p>
                <a href="#" class="btn">Read more</a>
            </div>
    
            <div class="box">
                <img src="@/assets/img/landing/images/f-icon3.png" alt="">
                <h3>Stay up to date with latest news</h3>
                <p>We offer majority of latest crypto related news so you always stay up to date.</p>
                <a href="#" class="btn">Read more</a>
            </div>
    
        </div>
    
    </section>
    
    <!-- features section ends -->
    
    <!-- about section starts  -->
    
    <section class="about" id="about">
    
        <h1 class="heading"> about the app </h1>
    
        <div class="column">
    
            <div class="image">
                <img src="@/assets/img/landing/images/about-img.png" alt="">
            </div>
    
            <div class="content">
                <h3>Easy and perfect solution for your <span>Crypto</span> portfolio</h3>
                <p>CryptoTracker is a free to use crypto portfolio that gives you personalized crypto news, analytics, and ability to add reminders for price changes.</p>
                <p>In addition you will get charts showing the price movement of each coin. CryptoTracker is available on both desktop  and smartphones. With CryptoTracker, you'll never miss a great opportunity to invest in the most profitable cryptocurrency!</p>
            </div>
    
        </div>
    
    </section>
    
    <!-- about section ends -->
    
    <!-- newsletter  -->
    
    <div class="newsletter">
    
        <h3>Subscribe For New Features</h3>
        <p>Stay up to date with our latest updates, and changes on the app. We won't spam you, we promise!</p>
        <form action="">
            <input type="email" placeholder="enter your email">
            <input type="submit" value="Subscribe">
        </form>
    
    </div>
    
    <!-- review section starts  -->
    
    <section class="review" id="review">
    
        <h1 class="heading"> people's review </h1>
    
        <div class="box-container">
    
            <div class="box">
                <i class="fas fa-quote-right"></i>
                <div class="user">
                    <img src="@/assets/img/landing/images/pic1.jpg" alt="">
                    <h3>Luka B.</h3>
                    <div class="stars">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                    </div>
                    <div class="comment">
                        CryptoTracker is fantastic app, and I really love to use it. I would recommend it to everyone!
                    </div>
                </div>
            </div>
  
            <div class="box">
                <i class="fas fa-quote-right"></i>
                <div class="user">
                    <img src="@/assets/img/landing/images/pic2.png" alt="">
                    <h3>Alen O.</h3>
                    <div class="stars">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                    </div>
                    <div class="comment">
                        CryptoTracker is the best crypto portfolio app in the market. My favorite are reminders for price. 
                    </div>
                </div>
            </div>
            <div class="box">
                <i class="fas fa-quote-right"></i>
                <div class="user">
                    <img src="@/assets/img/landing/images/pic3.png" alt="">
                    <h3>Mihael B.</h3>
                    <div class="stars">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                    </div>
                    <div class="comment">
                      This app allows me to check my portfolio values from my smartphone where I want and when I want to. 
                    </div>
                </div>
            </div>
            <div class="box">
                <i class="fas fa-quote-right"></i>
                <div class="user">
                    <img src="@/assets/img/landing/images/lugi.jpg" alt="">
                    <h3>Karlo L.</h3>
                    <div class="stars">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                    </div>
                    <div class="comment">
                      The interface in CryptoTracker is easy to navigate and I find everything I need quickly. 
                    </div>
                </div>
            </div>
            <div class="box">
                <i class="fas fa-quote-right"></i>
                <div class="user">
                    <img src="@/assets/img/landing/images/pic3.png" alt="">
                    <h3>Josip S.</h3>
                    <div class="stars">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                    </div>
                    <div class="comment">
                        Really friendly app. I'm able to check everything I need in very short period. Perfect.
                    </div>
                </div>
            </div>
    
            <div class="box">
                <i class="fas fa-quote-right"></i>
                <div class="user">
                    <img src="@/assets/img/landing/images/pic2.png" alt="">
                    <h3>Thomas S.</h3>
                    <div class="stars">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star-half-alt"></i>
                    </div>
                    <div class="comment">
                        I've tried a lot of apps with a simillar purpose but this is by far the best. Easy to use and beautiful graphics.
                    </div>
                </div>
            </div>
    
            <div class="box">
                <i class="fas fa-quote-right"></i>
                <div class="user">
                    <img src="@/assets/img/landing/images/pic3.png" alt="">
                    <h3>Alan B.</h3>
                    <div class="stars">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                    </div>
                    <div class="comment">
                        This app is really easy to use. A personal favorite feature are the reminders for price changes.
                    </div>
                </div>
            </div>
    
        </div>
  
  
      
    </section>
    
    <!-- review section ends -->
    
    <!-- pricing section starts 
    
    <section class="pricing" id="pricing">
    
        <h1 class="heading"> Our Pricing Plans </h1>
    
        <div class="box-container">
    
            <div class="box">
                <h3 class="title">basic</h3>
                <div class="price">$10<span>/monthly</span></div>
                <ul>
                    <li> <i class="fas fa-check"></i> 1000+ downloads </li>
                    <li> <i class="fas fa-check"></i> No transaction fees </li>
                    <li> <i class="fas fa-times"></i> unlimited storage </li>
                    <li> <i class="fas fa-times"></i> 5 downloads </li>
                </ul>
                <a href="#" class="btn">check out</a>
            </div>
    
            <div class="box">
                <h3 class="title">standard</h3>
                <div class="price">$15<span>/monthly</span></div>
                <ul>
                    <li> <i class="fas fa-check"></i> 1000+ downloads </li>
                    <li> <i class="fas fa-check"></i> No transaction fees </li>
                    <li> <i class="fas fa-check"></i> unlimited storage </li>
                    <li> <i class="fas fa-times"></i> 5 downloads </li>
                </ul>
                <a href="#" class="btn">check out</a>
            </div>
    
            <div class="box">
                <h3 class="title">premium</h3>
                <div class="price">$25<span>/monthly</span></div>
                <ul>
                    <li> <i class="fas fa-check"></i> 1000+ downloads </li>
                    <li> <i class="fas fa-check"></i> No transaction fees </li>
                    <li> <i class="fas fa-check"></i> unlimited storage </li>
                    <li> <i class="fas fa-check"></i> 5 downloads </li>
                </ul>
                <a href="#" class="btn">check out</a>
            </div>
    
        </div>
    
    </section>
    
   pricing section ends -->
    
    <!-- contact section starts  -->
    
    <section class="contact" id="contact">
    
        <div class="image">
            <img src="@/assets/img/landing/images/contact1.png" alt="">
        </div>
    
        <form action="">
    
            <h1 class="heading">contact us</h1>
    
            <div class="inputBox">
                <input type="text" required>
                <label>Name</label>
            </div>
    
            <div class="inputBox">
                <input type="email" required>
                <label>Email</label>
            </div>
    
            <div class="inputBox">
                <input type="title" required>
                <label>Title</label>
            </div>
    
            <div class="inputBox">
                <textarea required name="" id="" cols="30" rows="10"></textarea>
                <label>Message</label>
            </div>
    
            <input type="submit" class="btn" value="Send message">
    
        </form>
    
    </section>
    
    <!-- contact section edns -->
    
    <!-- footer section starts  -->
    
    <div class="footer">
    
        <div class="box-container">
    
            <div class="box">
                <h3>About us</h3>
                <p>At CryptoTracker we want to provide high quality app for our users. We want to deliver latest news, price changes and keep everything up to date.</p>
            </div>
    
            <div class="box">
                <h3>Quick links</h3>
                <a href="#">Home</a>
                <a href="#">Features</a>
                <a href="#">About</a>
                <a href="#">Reviews</a>         
                <a href="#">Contact</a>
            </div>
    
            <div class="box">
                <h3>Follow us</h3>
                <a href="#">Facebook</a>
                <a href="#">Instagram</a>
                <a href="#">Linkedin</a>
                <a href="#">Twitter</a>
            </div>
    
            <div class="box">
                <h3>contact info</h3>
                <div class="info">
                    <i class="fas fa-phone"></i>
                    <p> +123-456-7890 <br> +111-2222-333 </p>
                </div>
                <div class="info">
                    <i class="fas fa-envelope"></i>
                    <p> info@cryptotracker.com <br> help@cryptotracker.com </p>
                </div>
                <div class="info">
                    <i class="fas fa-map-marker-alt"></i>
                    <p> Pula, Croatia</p>
                </div>
            </div>
    
        </div>
    
        <h1 class="credit"> &copy; Copyright @ 2022 by CryptoTracker</h1>
    
    </div>
    
    <!-- footer section ends -->
    
    
    
    
    
    
    </body>
    
    
    </template>
    
  
    <style >
    
    @import '../assets/css/landingPage.css';
  
    </style>
  
  
  
    <script setup>
    import { onMounted } from 'vue';


    onMounted( () => {
        // $("a").on('click', function(event) {
  
        //     // Make sure this.hash has a value before overriding default behavior
        //     if (this.hash !== "") {
        //         // Prevent default anchor click behavior
        //         event.preventDefault();

        //         // Store hash
        //         var hash = this.hash;

        //         // Using jQuery's animate() method to add smooth page scroll
        //         // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        //         $('html, body').animate({
        //             scrollTop: $(hash).offset().top
        //         }, 800, function(){
        //             // Add hash (#) to URL when done scrolling (default click behavior)
        //             window.location.hash = hash;
        //         });
        //     } // End if
        // });
    } )
  
//   $(document).ready(function(){
//     // Add smooth scrolling to all links
    
//   });


// console.log($)
  </script>