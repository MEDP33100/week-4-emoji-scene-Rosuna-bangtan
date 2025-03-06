const headphone = document.getElementById('headphone');

        gsap.to(headphone, {
            rotation: 360,
            duration: 5,
            repeat: -1,
            ease: "linear"
        });

        // GSAP Animation for the music emojis
        const musicEmojis = document.querySelectorAll('.music');
        musicEmojis.forEach((emoji, index) => {
            const angle = (index / musicEmojis.length) * 360; 
            const distance = 150; 

            
            const x = distance * Math.cos(gsap.utils.toRadians(angle));
            const y = distance * Math.sin(gsap.utils.toRadians(angle));
            emoji.style.transform = `translate(${x}px, ${y}px)`;

            // Animate floating effect
            gsap.to(emoji, {
                y: "+=30", // Float up
                duration: 1,
                yoyo: true,
                repeat: -1,
                ease: "sine.inOut",
                delay: Math.random() * 2 
            });

            // Animate circular movement
            gsap.to(emoji, {
                rotation: 360,
                duration: 10,
                repeat: -1,
                ease: "linear",
                modifiers: {
                    x: function(x) {
                        return distance * Math.cos(gsap.getProperty(emoji, "rotation") * Math.PI / 180);
                    },
                    y: function(y) {
                        return distance * Math.sin(gsap.getProperty(emoji, "rotation") * Math.PI / 180);
                    }
                }
            });
        });
