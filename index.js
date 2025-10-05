class PortfolioGallery {
    constructor() {
        // --- START OF MANUAL IMAGE CONFIGURATION ---
        // To add your own images, edit the array below.
        // Each image is an object with the following properties:
        //
        // id: A unique number for each image.
        // src: The path to your image file (e.g., 'images/my-photo.jpg').
        // title: The title of the image, shown on hover and in the lightbox.
        // description: A short description for the image.
        // category: Must match one of the 'data-filter' values on the buttons in index.html.
        //           Current options: 'studio', 'outdoor', 'weddings'.
        //
       
            
           
           this.images = [
            {
                id: 1,
                src: './public/images/Website Portfolio/1.jpg',
                title: 'Korean Inspired',
                description: ' I tried the trendy korean style photoshoot with a very simple outfit and background.',
                category: 'studio'
            },
            {
                id: 2,
                src: './public/images/Website Portfolio/2.jpg',
                title: 'Korean Inspired',
                description: ' I tried the trendy korean style photoshoot with a very simple outfit and background.',
                category: 'studio'
            },
            {
                id: 3,
                src: './public/images/Website Portfolio/3.jpg',
                title: 'Korean Inspired',
                description: ' I tried the trendy korean style photoshoot with a very simple outfit and background.',
                category: 'studio'
            },
            {
                id: 4,
                src: './public/images/Website Portfolio/4.jpg',
                title: 'JABJAB X TINA',
                description: '“Every bow hides a story; every ring holds a promise.”',
                category: 'weddings'
            },
            {
                id: 5,
                src: './public/images/Website Portfolio/5.jpg',
                title: 'JABJAB X TINA',
                description: '“Every bow hides a story; every ring holds a promise.”',
                category: 'weddings'
            },
            {
                id: 6,
                src: './public/images/Website Portfolio/6.jpg',
                title: 'JABJAB X TINA',
                description: '“Every bow hides a story; every ring holds a promise.”',
                category: 'weddings'
            },
            {
                id: 7,
                src: './public/images/Website Portfolio/7.jpg',
                title: 'JOSEPH X HOSSANA',
                description: '“All along, we knew each other — we just didn’t know we were bound together.”',
                category: 'weddings'
            },
            {
                id: 8,
                src: './public/images/Website Portfolio/8.jpg',
                title: 'JOHN X KYE',
                description: ' A small prenup style pohoto session with John and Kye.',
                category: 'weddings'
            },
            {
                id: 9,
                src: './public/images/Website Portfolio/9.jpg',
                title: 'JOSEPH X HOSSANA',
                description: '“All along, we knew each other — we just didn’t know we were bound together.”',
                category: 'weddings'
            },
            {
                id: 10,
                src: './public/images/Website Portfolio/10.jpg',
                title: 'The joy of Christmas',
                description: 'A photoshoot of a family celebrating Chirstmas together.',
                category: 'weddings'
            },
            {
                id: 11,
                src: './public/images/Website Portfolio/11.jpg',
                title: 'ORA’S 1st Birthday',
                description: 'Small hands, big smiles, pure happiness.',
                category: 'weddings'
            },
            {
                id: 12,
                src: './public/images/Website Portfolio/12.jpg',
                title: 'The joy of Christmas',
                description: 'A photoshoot of a family celebrating Chirstmas together.',
                category: 'weddings'
            },
            {
                id: 13,
                src: './public/images/Website Portfolio/13.jpg',
                title: 'Renaissance Inspired',
                description: 'An old classic style inspired from the 15th - 16th cenutry. “A classic Beauty that never fades.”',
                category: 'studio'
            },
            {
                id: 14,
                src: './public/images/Website Portfolio/14.jpg',
                title: 'A Bouquet of flowers',
                description: 'She’s like a bouquet — each layer of her beauty unfolds with color, scent, and surprise.',
                category: 'studio'
            },
            {
                id: 15,
                src: './public/images/Website Portfolio/15.jpg',
                title: 'Renaissance Inspired',
                description: 'An old classic style inspired from the 15th - 16th cenutry. “A classic Beauty that never fades.”',
                category: 'studio'
            },
            {
                id: 16,
                src: './public/images/Website Portfolio/16.jpg',
                title: 'JOANNAH',
                description: 'A dramatic photoshoot on her 23rd Birthday.',
                category: 'studio'
            },
            {
                id: 17,
                src: './public/images/Website Portfolio/17.jpg',
                title: 'The other side of you',
                description: ' I got the chance to photoshoot my friend and gave a different style revealing his other side of his personality.',
                category: 'studio'
            },
            {
                id: 18,
                src: './public/images/Website Portfolio/18.jpg',
                title: "Charisse's 18th Birthday",
                description: 'This portrait is a reminder when that time my camera broke down during her special event, it felt like disaster. Now I see it as a canon event — the moment that shaped me into a stronger photographer.',
                category: 'weddings'
            },
            {
                id: 19,
                src: './public/images/Website Portfolio/19.jpg',
                title: ' Girl in the field',
                description: 'A young lady having a stroll in a green field.',
                category: 'outdoor'
            },
            {
                id: 20,
                src: './public/images/Website Portfolio/21.jpg',
                title: '17th century inspired',
                description: 'A portrait of this era that has been inspired by a two famous painting, The milk maid and the girl with pearl earring.',
                category: 'studio'
            },
            {
                id: 21,
                src: './public/images/Website Portfolio/20.jpg',
                title: ' Girl in the field',
                description: 'A young lady having a stroll in a green field.',
                category: 'outdoor'
            },
            {
                id: 22,
                src: './public/images/Website Portfolio/22.jpg',
                title: 'Sunkissed',
                description: 'A touch of sunray on the face and showing the natural brown eyes of my best friend when were in Tagaytay.',
                category: 'outdoor'
            },
            {
                id: 23,
                src: './public/images/Website Portfolio/23.jpg',
                title: 'A kid with a Lion Spirit',
                description: 'This was shot way back year 2022 at Sampalok lake, San pablo City.',
                category: 'outdoor'
            },
            {
                id: 24,
                src: './public/images/Website Portfolio/24.jpg',
                title: 'A smile of a loving Grandfather',
                description: 'A grandfather is celebrating the life of his grandson on his birthday.',
                category: 'outdoor'
            },
            {
                id: 25,
                src: './public/images/Website Portfolio/25.jpg',
                title: 'KEZIAH @ 6TH',
                description: 'A painterly photoshoot for her 6th birthday.',
                category: 'studio'
            },
            {
                id: 26,
                src: './public/images/Website Portfolio/26.jpg',
                title: 'Mr. Conrado',
                description: 'A father who will do anything and everything for his family.',
                category: 'studio'
            },
            {
                id: 27,
                src: './public/images/Website Portfolio/27.jpg',
                title: 'KEZIAH @ 6TH',
                description: 'A painterly photoshoot for her 6th birthday.',
                category: 'studio'
            },
            {
                id: 28,
                src: './public/images/Website Portfolio/28.jpg',
                title: 'Korean Inspired',
                description: 'I tried the trendy korean style photoshoot with a very simple outfit and background. “Softness that speaks volumes, beauty that lingers.”',
                category: 'studio'
            },
            {
                id: 29,
                src: './public/images/Website Portfolio/29.jpg',
                title: 'OATH TAKING',
                description: '“Every sacrifice, every struggle, was the stepping stone to this moment.”',
                category: 'outdoor'
            },
            {
                id: 30,
                src: './public/images/Website Portfolio/30.jpg',
                title: 'Korean Inspired',
                description: 'I tried the trendy korean style photoshoot with a very simple outfit and background. “Softness that speaks volumes, beauty that lingers.”',
                category: 'studio'
            },
            {
                id: 31,
                src: './public/images/Website Portfolio/31.jpg',
                title: 'Teal and Orange',
                description: ' I did an experiment using famous complementary color, teal and orange on my friends.',
                category: 'studio'
            },
            {
                id: 32,
                src: './public/images/Website Portfolio/32.jpg',
                title: 'Teal and Orange',
                description: ' I did an experiment using famous complementary color, teal and orange on my friends.',
                category: 'studio'
            },
            {
                id: 33,
                src: './public/images/Website Portfolio/33.jpg',
                title: 'Teal and Orange',
                description: ' I did an experiment using famous complementary color, teal and orange on my friends.',
                category: 'studio'
            },
            {
                id: 34,
                src: './public/images/Website Portfolio/34.jpg',
                title: 'Cottilion',
                description: 'A memory of when I was based in Naga City, Camarines Sur for almost a month to capture more than a thousand of students for their Graduation.',
                category: 'moments'  
            }

            
        ];
        // --- END OF MANUAL IMAGE CONFIGURATION ---

        this.filteredImages = [];
        this.currentFilter = 'all';
        this.currentPage = 1;
        this.imagesPerPage = 12;
        this.currentLightboxIndex = 0;
        
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.loadImages();
    }

    setupEventListeners() {
        // Mobile menu toggle
        const mobileMenuButton = document.getElementById('mobile-menu-button');
        const mobileMenu = document.getElementById('mobile-menu');  
        
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        // Filter buttons
        const filterButtons = document.querySelectorAll('.filter-btn');
        filterButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const filter = e.target.dataset.filter;
                this.setActiveFilter(e.target);
                this.filterImages(filter);
            });
        });

        // Load more button
        document.getElementById('load-more').addEventListener('click', () => {
            this.loadMoreImages();
        });

        // Lightbox controls
        document.getElementById('close-lightbox').addEventListener('click', () => {
            this.closeLightbox();
        });

        document.getElementById('prev-image').addEventListener('click', () => {
            this.previousImage();
        });

        document.getElementById('next-image').addEventListener('click', () => {
            this.nextImage();
        });

        // Close lightbox on background click
        document.getElementById('lightbox').addEventListener('click', (e) => {
            if (e.target.id === 'lightbox') {
                this.closeLightbox();
            }
        });

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (document.getElementById('lightbox').classList.contains('hidden')) return;
            
            switch(e.key) {
                case 'Escape':
                    this.closeLightbox();
                    break;
                case 'ArrowLeft':
                    this.previousImage();
                    break;
                case 'ArrowRight':
                    this.nextImage();
                    break;
            }
        });

        // Intersection Observer for lazy loading and animations
        this.setupIntersectionObserver();
    }

    setupIntersectionObserver() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '50px'
        };

        this.observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    
                    // Lazy load image
                    const img = entry.target.querySelector('img');
                    if (img && img.dataset.src) {
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                    }
                }
            });
        }, observerOptions);
    }

    setActiveFilter(activeButton) {
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.classList.remove('active', 'bg-[#2D4F2B]', 'text-white');
            btn.classList.add('bg-white', 'border', 'border-gray-300', 'text-gray-600');
        });
        
        activeButton.classList.add('active', 'bg-[#2D4F2B]', 'text-white');
        activeButton.classList.remove('bg-white', 'border', 'border-gray-300', 'text-gray-600');
    }

    filterImages(filter) {
        this.currentFilter = filter;
        this.currentPage = 1;
        
        if (filter === 'all') {
            this.filteredImages = [...this.images];
        } else {
            this.filteredImages = this.images.filter(img => img.category === filter);
        }
        
        this.renderImages(true);
    }

    async loadImages() {
        // Hide loading, show gallery
        setTimeout(() => {
            document.getElementById('loading').classList.add('hidden');
            document.getElementById('gallery').classList.remove('hidden');
            
            this.filteredImages = [...this.images];
            this.renderImages();
        }, 1000);
    }

    renderImages(clearGallery = false) {
        const gallery = document.getElementById('gallery');
        
        if (clearGallery) {
            gallery.innerHTML = '';
        }

        const startIndex = clearGallery ? 0 : (this.currentPage - 1) * this.imagesPerPage;
        const endIndex = startIndex + this.imagesPerPage;
        const imagesToRender = this.filteredImages.slice(startIndex, endIndex);

        imagesToRender.forEach((image, index) => {
            const imageElement = this.createImageElement(image, startIndex + index);
            gallery.appendChild(imageElement);
            
            // Observe for intersection
            this.observer.observe(imageElement);
        });

        // Update load more button visibility
        const loadMoreBtn = document.getElementById('load-more');
        if (endIndex >= this.filteredImages.length) {
            loadMoreBtn.classList.add('hidden');
        } else {
            loadMoreBtn.classList.remove('hidden');
        }
    }

    createImageElement(image, index) {
        const div = document.createElement('div');
        div.className = 'image-container relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer fade-in group';
        div.style.height = `500px`; // Set a more uniform height
        
        div.innerHTML = `
            <img data-src="${image.src}" 
                 alt="${image.title}" 
                 class="w-full h-full object-cover transition-transform duration-300"
                 loading="lazy">
            <div class="image-overlay absolute inset-0 flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div class="text-white">
                    <h3 class="text-lg font-semibold">${image.title}</h3>
                    <p class="text-sm text-gray-200">${image.description}</p>
                </div>
            </div>
        `;

        div.addEventListener('click', () => {
            this.openLightbox(index);
        });

        return div;
    }

    loadMoreImages() {
        this.currentPage++;
        this.renderImages();
    }

    openLightbox(index) {
        this.currentLightboxIndex = index;
        const image = this.filteredImages[index];
        
        document.getElementById('lightbox-image').src = image.src;
        document.getElementById('lightbox-title').textContent = image.title;
        document.getElementById('lightbox-description').textContent = image.description;
        
        document.getElementById('lightbox').classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    }

    closeLightbox() {
        document.getElementById('lightbox').classList.add('hidden');
        document.body.style.overflow = 'auto';
    }

    previousImage() {
        if (this.currentLightboxIndex > 0) {
            this.currentLightboxIndex--;
        } else {
            this.currentLightboxIndex = this.filteredImages.length - 1;
        }
        
        const image = this.filteredImages[this.currentLightboxIndex];
        document.getElementById('lightbox-image').src = image.src;
        document.getElementById('lightbox-title').textContent = image.title;
        document.getElementById('lightbox-description').textContent = image.description;
    }

    nextImage() {
        if (this.currentLightboxIndex < this.filteredImages.length - 1) {
            this.currentLightboxIndex++;
        } else {
            this.currentLightboxIndex = 0;
        }
        
        const image = this.filteredImages[this.currentLightboxIndex];
        document.getElementById('lightbox-image').src = image.src;
        document.getElementById('lightbox-title').textContent = image.title;
        document.getElementById('lightbox-description').textContent = image.description;
    }
}

// Initialize the gallery when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new PortfolioGallery();
});