document.addEventListener("DOMContentLoaded", (event) => {
const headphone = document.getElementById('headphone'); 

        // Spin the headphone emoji
        gsap.to(headphone, {
            rotation: 360,
            duration: 5,
            repeat: -1,
            ease: "linear"
        });

        // Function to show music emojis
        function showMusicEmojis() {
            const musicEmojis = document.querySelectorAll('.music');
            musicEmojis.forEach((emoji, index) => {
                const angle = (index / musicEmojis.length) * 360; // Distribute around the circle
                const distance = 150; // Distance from the center
                
                const x = distance * Math.cos(gsap.utils.toRadians(angle));
                const y = distance * Math.sin(gsap.utils.toRadians(angle));
                emoji.style.transform = `translate(${x}px, ${y}px)`;
                
                // Animate floating effect
                gsap.to(emoji, {
                    opacity: 1, // Fade in
                    y: "+=30", // Float up
                    duration: 1,
                    yoyo: true,
                    repeat: -1,
                    ease: "sine.inOut",
                    delay: Math.random() * 2 
                });

              
                gsap.to(emoji, {
                    rotation: 360,
                    duration: 10,
                    repeat: -1,
                    ease: "linear",
                    modifiers: {
                        x: function() {
                            return distance * Math.cos(gsap.getProperty(emoji, "rotation") * Math.PI / 180);
                        },
                        y: function() {
                            return distance * Math.sin(gsap.getProperty(emoji, "rotation") * Math.PI / 180);
                        }
                    }
                });
            });
        }
        function hideMusicEmojis() {
            const musicEmojis = document.querySelectorAll('.music');
            musicEmojis.forEach(emoji => {
                gsap.to(emoji, {
                    opacity: 0, // Fade out
                    duration: 0.5
                });
            });
        }

        // Show music emojis on mouse enter and hide on mouse leave
        headphone.addEventListener('mouseenter', showMusicEmojis);
        headphone.addEventListener('mouseleave', hideMusicEmojis);
