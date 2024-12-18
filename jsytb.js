// Replace with actual API data 
const videos = [
    {
        title: "Exploring the Mountains",
        details: "1.5M views • 2 weeks ago",
        thumbnail: "https://via.placeholder.com/300x150",
        likes: 0,
        shares: 0,
    },
    {
        title: "Technology Innovations 2024",
        details: "3M views • 1 month ago",
        thumbnail: "https://via.placeholder.com/300x150",
        likes: 0,
        shares: 0,
    },
    {
        title: "How to Cook Perfect Pasta",
        details: "900K views • 3 days ago",
        thumbnail: "https://via.placeholder.com/300x150",
        likes: 0,
        shares: 0,
    },
    {
        title: "DIY Home Projects",
        details: "1.2M views • 1 week ago",
        thumbnail: "https://via.placeholder.com/300x150",
        likes: 0,
        shares: 0,
    },
];

const searchInput = document.getElementById("searchInput");
const videoContainer = document.getElementById("videoContainer");

// Function to render videos
function renderVideos(filter = "") {
    videoContainer.innerHTML = ""; // Clear current videos
    videos
        .filter(video => video.title.toLowerCase().includes(filter.toLowerCase()))
        .forEach((video, index) => {
            const videoCard = document.createElement("div");
            videoCard.className = "video-card";

            videoCard.innerHTML = `
                <img src="${video.thumbnail}" alt="Video thumbnail">
                <div class="video-info">
                    <div class="video-title">${video.title}</div>
                    <div class="video-details">${video.details}</div>
                    <div class="video-actions">
                        <button class="action-btn like-btn" data-index="${index}">
                            👍 Like (<span>${video.likes}</span>)
                        </button>
                        <button class="action-btn share-btn" data-index="${index}">
                            🔄 Share (<span>${video.shares}</span>)
                        </button>
                    </div>
                </div>
            `;

            videoContainer.appendChild(videoCard);
        });

    // Attach event listeners to buttons after rendering
    attachButtonListeners();
}

// Function to attach event listeners to buttons
function attachButtonListeners() {
    document.querySelectorAll(".like-btn").forEach(button => {
        button.addEventListener("click", event => {
            const index = event.target.getAttribute("data-index");
            videos[index].likes++;
            renderVideos(searchInput.value); // Re-render to update likes
        });
    });

    document.querySelectorAll(".share-btn").forEach(button => {
        button.addEventListener("click", event => {
            const index = event.target.getAttribute("data-index");
            videos[index].shares++;
            alert(`You shared: ${videos[index].title}`);
            renderVideos(searchInput.value); // Re-render to update shares
        });
    });
}

// Initial render
renderVideos();

// Add search functionality
searchInput.addEventListener("input", event => {
    renderVideos(event.target.value);
});
